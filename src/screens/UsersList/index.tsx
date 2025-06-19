import { TableUsers } from '../../components/TableUsers'
import * as S from './styles'

export const UsersListScreen = () => {
  return (
    <S.ContainerRegisterUser>
      <S.Title>Users List</S.Title>
      <TableUsers />
    </S.ContainerRegisterUser>
  )
}