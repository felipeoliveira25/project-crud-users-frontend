import { useMutation } from '@tanstack/react-query'
import { api } from '../lib/axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { UserSchema } from '../schemas/user.schema'

const reqPutUser = async (data: UserSchema, id: number) => {
  const response = await api.put(`/users/${id}`, data)
  return response.data
}

export const useHandleUpdateUser = (id: number) => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (data: UserSchema) => reqPutUser(data, id),
    onSuccess: () => {
      toast.success('Usuário atualizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      })
      router.push('/')
    },
    onError: () => {
      toast.error('Erro ao atualizar usuário, verifique os campos!')
    },
  })

  return mutation
}
