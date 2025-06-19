'use client';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import * as S from './styles';
import * as Input from '@/components/Input';
import { useValidateToken } from '../../hooks/useValidateToken';
import { useForm } from 'react-hook-form';
import { userSchema, UserSchema } from '../../schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGetUserById } from '../../hooks/useGetUserById';
import { useEffect } from 'react';
import { useHandleUpdateUser } from '../../hooks/useHandleEditUser';
import { toast } from 'react-toastify';
import { useDeleteUserById } from '../../hooks/useDeleteUserById';
import { BackButton } from '../../components/BackButton';
import { useFormActionUser } from '../../hooks/useFormActionUser';

export const EditUserScreen = ({ id }: { id: number }) => {
  useValidateToken();

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { register, handleSubmit, formState: { isDirty }, reset } = form;

  const { fieldsToRender, errors } = useFormActionUser(form);
  const { data: userData } = useGetUserById(id);
  const { mutate: mutateDelete } = useDeleteUserById(id);
  const { mutate, isPending } = useHandleUpdateUser(id);

  const onSubmit = (data: UserSchema) => {
    if (!isDirty) {
      toast.info('Nenhuma alteração foi feita.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    mutate(data);
  };

  const handleDeleteUser = () => {
    mutateDelete();
  };

  useEffect(() => {
    if (userData) {
      reset(userData);
    }
  }, [userData, reset]);

  return (
    <S.ContainerEditUser>
      <BackButton />
      <Form title="Editar Usuário" onSubmit={handleSubmit(onSubmit)}>
        {fieldsToRender.map((field) => (
          <Input.GeneralRoot key={field.name}>
            <Input.Label htmlFor={field.name}>{field.label}</Input.Label>
            <Input.RootInput
              id={field.name}
              type={field.type}
              isNumericOnly={field.isNumericOnly}
              allowDecimal={field.allowDecimal}
              hasError={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              {...register(field.name)}
            />
            <Input.ErrorMessage
              message={errors[field.name]?.message}
            />
          </Input.GeneralRoot>
        ))}
        <Button type="submit" disabled={isPending} className='full-width'>
          {isPending ? 'Carregando...' : 'Salvar'}
        </Button>
        <Button
          type="button"
          backgroundcolor="#f53333"
          color="#fff"
          margin="0"
          onClick={handleDeleteUser}
          className='full-width'
        >
          Excluir Usuário
        </Button>
      </Form>
    </S.ContainerEditUser>
  );
};