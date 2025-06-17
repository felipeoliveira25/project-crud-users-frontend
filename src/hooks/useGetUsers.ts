import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/axios"
import { User } from "../interfaces/userInterface"

const getUsersData = async (): Promise<User[]> => {
  const response = await api.get<User[]>('/users')
  return response.data
}

export const useGetUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'], 
    queryFn: getUsersData,
  })
}
