'use client';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { useValidateToken } from '../../hooks/useValidateToken';
import * as S from './styles';
import * as Input from '@/components/Input';
import { userSchema, UserSchema } from '../../schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHandleRegisterUser } from '../../hooks/useHandleRegisterUser';
import { BackButton } from '../../components/BackButton';
import { useFormActionUser } from '../../hooks/useFormActionUser';

export const RegisterUserScreen = () => {
  useValidateToken();

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { register, handleSubmit } = form;

  const { fieldsToRender, errors } = useFormActionUser(form);
  const { mutate, isPending } = useHandleRegisterUser();

  const onSubmit = (data: UserSchema) => {
    mutate(data);
  };

  return (
    <S.ContainerRegisterUser>
      <BackButton />
      <Form title="Cadastrar Novo Usuário" subtitle="Adicione suas informações" onSubmit={handleSubmit(onSubmit)}>
        {fieldsToRender.map((field) => (
              <Input.GeneralRoot key={field.name}>
                <Input.Label htmlFor={field.name}>{field.label}</Input.Label>
                <Input.RootInput
                  id={field.name}
                  type={field.type}
                  isNumericOnly={field.isNumericOnly}
                  allowDecimal={field.allowDecimal}
                  hasError={!!errors[field.name]}
                  {...register(field.name)}
                />
                <Input.ErrorMessage message={errors[field.name]?.message} />
              </Input.GeneralRoot>
            
        ))}
        <Button width="100%" type="submit" disabled={isPending} className='full-width'>
          {isPending ? 'Carregando...' : 'Enviar'}
        </Button>
      </Form>
    </S.ContainerRegisterUser>
  );
};