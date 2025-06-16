'use client'

import { Button } from '../../components/Button'
import { Form } from '../../components/Form'
import * as S from './styles'
import * as Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useHandleLogin } from '../../hooks/useHandleLogin'
import { loginSchema, LoginSchema } from '../../schemas/login.schema'

export const LoginScreen = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate, isPending } = useHandleLogin()

  const onSubmit = (data: LoginSchema) => {
  mutate(data)
}

  return (
    <S.ContainerLoginForm>
      <Form title="Login to your Account" subtitle="Get started with us" onSubmit={handleSubmit(onSubmit)}>
        <Input.GeneralRoot>
          <Input.Label>Username</Input.Label>
          <Input.RootInput {...register('username')} />
          <Input.ErrorMessage message={errors?.username?.message} />
        </Input.GeneralRoot>

        <Input.GeneralRoot>
          <Input.Label>Password</Input.Label>
          <Input.RootInput
            isPasswordInput
            {...register('password')}
          />
          <Input.ErrorMessage message={errors?.password?.message} />
        </Input.GeneralRoot>

        <Button type="submit">{isPending ? 'Loading' : 'Sign-In'}</Button>
      </Form>
    </S.ContainerLoginForm>
  )
}
