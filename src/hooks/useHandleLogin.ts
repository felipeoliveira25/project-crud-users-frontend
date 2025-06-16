import { useMutation } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { LoginSchema } from '../schemas/login.schema'

const reqLoginData = async (data: LoginSchema) => {
  const response = await api.post('/auth/login', data)
  const token = response.data.access_token

  localStorage.setItem('authToken', token)
}

export const useHandleLogin = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: reqLoginData,
    onSuccess: () => {
      toast.success('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      })
      router.push('/')
    },
    onError: () => {
      toast.error('Erro no login, verifique suas credenciais')
    },
  })

  return mutation
}
