'use client'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { Form } from '../../components/Form'
import { useValidateToken } from '../../hooks/useValidateToken'
import * as S from './styles'
import * as Input from '@/components/Input'
import { useRouter } from 'next/navigation';
import { userSchema, UserSchema } from '../../schemas/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useHandleRegisterUser } from '../../hooks/useHandleRegisterUser'



export const RegisterUserScreen = () => {

  useValidateToken()

   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<UserSchema>({
      resolver: zodResolver(userSchema),
    })
  
  const { mutate, isPending } = useHandleRegisterUser()
  
    const onSubmit = (data: UserSchema) => {
    mutate(data)
  }

  const router = useRouter()

  const backToHome = () => {
    
    router.push('/')
  }
  return (
    <S.ContainerRegisterUser>
      <Form title='Register new User' subtitle='Add his information' onSubmit={handleSubmit(onSubmit)}>
        <S.WrapperInputsInline>
            <Input.GeneralRoot>
              <Input.Label>Name</Input.Label>
              
              <Input.RootInput {...register('name')}/>
              <Input.ErrorMessage message={errors?.name?.message}/>
          </Input.GeneralRoot>
            
          <Input.GeneralRoot>
              <Input.Label>E-mail</Input.Label>
              
              <Input.RootInput {...register('email')}/>
              <Input.ErrorMessage message={errors?.email?.message}/>
          </Input.GeneralRoot>
        </S.WrapperInputsInline>

        <S.WrapperInputsInline>
          <Input.GeneralRoot>
              <Input.Label>Telephone</Input.Label>
              
              <Input.RootInput {...register('telephone')}/>
              <Input.ErrorMessage message={errors?.telephone?.message}/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Role</Input.Label>
              
              <Input.RootInput {...register('role')}/>
              <Input.ErrorMessage message={errors?.role?.message}/>
          </Input.GeneralRoot>
        </S.WrapperInputsInline>
        <S.WrapperInputsInline>
          <Input.GeneralRoot>
              <Input.Label>Age</Input.Label>
              
              <Input.RootInput {...register('age')} type='number'/>
              <Input.ErrorMessage message={errors?.age?.message}/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Salary</Input.Label>
              <Input.RootInput {...register('salary')}/>
              <Input.ErrorMessage message={errors?.salary?.message}/>
          </Input.GeneralRoot>
        </S.WrapperInputsInline>
          
        
          
          
          
        
        <Button width='70%' type='submit'>
          {isPending ? 'Loading' : 'Send'}
        </Button>
        
        <Button backgroundcolor='#EEEFE0' color='#000' margin='0' width='70%' onClick={backToHome} type='button'>Back to home</Button>

      </Form>

      
    </S.ContainerRegisterUser>
  )
}