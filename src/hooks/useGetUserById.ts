import { useQuery } from "@tanstack/react-query"
import { api } from "../lib/axios"
import { User } from "../interfaces/userInterface"

const getUserData = async (id: number): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`)
  return response.data
}

export const useGetUserById = (id: number) => {
  return useQuery<User, Error>({
    queryKey: ['user', id], 
    queryFn:() => getUserData(id),
  })
}