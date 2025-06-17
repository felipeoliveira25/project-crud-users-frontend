import { useMutation } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { UserSchema } from '../schemas/user.schema'

const reqPostUser = async (data: UserSchema) => {
  const response = await api.post('/users', data)
  return response.data
}

export const useHandleRegisterUser = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: reqPostUser,
    onSuccess: () => {
      toast.success('Usuário cadastrado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      })
      router.push('/')
    },
    onError: () => {
      toast.error('Erro no cadastro do usuário, verifique os campos!')
    },
  })

  return mutation
}
