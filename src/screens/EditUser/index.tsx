'use client'
import { Button } from '../../components/Button'
import { Form } from '../../components/Form'
import * as S from './styles'
import * as Input from '@/components/Input'
import { EditUserProps } from './types'
import { useRouter } from 'next/navigation'
import { useValidateToken } from '../../hooks/useValidateToken'
import { useForm } from 'react-hook-form'
import { userSchema, UserSchema } from '../../schemas/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGetUserById } from '../../hooks/useGetUserById'
import { useEffect } from 'react'
import { useHandleUpdateUser } from '../../hooks/useHandleEditUser'
import { toast } from 'react-toastify'
import { useDeleteUserById } from '../../hooks/useDeleteUserById'
export const EditUserScreen = ({ id }: EditUserProps) => {
  useValidateToken()
  const router = useRouter()
  
  const backToHome = () => {
      router.push('/')
  }

  const {
    register,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const { data: userData } = useGetUserById(id);

  const {mutate: mutateDelete} = useDeleteUserById(id)

  const { mutate, isPending } = useHandleUpdateUser(id)
  
  const onSubmit = (data: UserSchema) => {
    if (!isDirty) {
      toast.info('Nenhuma alteração foi feita.', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    console.log('Dados enviados para o PUT:', data); // Debug
    mutate(data);
  };

  const handleDeleteUser = (id: number) => {
    mutateDelete(id)
  }

  useEffect(() => {
    if (userData) {
      reset(userData); 
    }
  }, [userData, reset]);
  return (
    <S.ContainerEditUser>
      <Form title='Edit User' onSubmit={handleSubmit(onSubmit)}>
          <Input.GeneralRoot>
              <Input.Label>Name</Input.Label>
              <Input.RootInput {...register('name')}/>
          </Input.GeneralRoot>
            
          <Input.GeneralRoot>
              <Input.Label>E-mail</Input.Label>
              <Input.RootInput {...register('email')}/>
          </Input.GeneralRoot>
        
          <Input.GeneralRoot>
              <Input.Label>Telephone</Input.Label>
              <Input.RootInput {...register('telephone')}/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Role</Input.Label>
              <Input.RootInput {...register('role')}/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Age</Input.Label>
              <Input.RootInput {...register('age')}/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Salary</Input.Label>
              <Input.RootInput {...register('salary')}/>
          </Input.GeneralRoot>
        
        <Button type='submit' onClick={handleSubmit(onSubmit)}>
          {isPending ? 'Loading' : 'Save'}
        </Button>

         <Button type='button' backgroundcolor='#f53333' color='#fff' margin='0' onClick={() => handleDeleteUser(id)}>
          Delete user
        </Button>

        
      </Form>
    </S.ContainerEditUser>
  )
}