import { api } from "../lib/axios"
import { User } from "../interfaces/userInterface"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

const deleteUserData = async (id: number): Promise<User> => {
  const response = await api.delete<User>(`/users/${id}`)
  return response.data
}

export const useDeleteUserById = (id: number) => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: () => deleteUserData(id),
    onSuccess: () => {
      toast.success('Usuário deletado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      })
      router.push('/')
    },
    onError: () => {
      toast.error('Erro ao deletar o usuário, verifique os campos!')
    },
  })

  return mutation
}
