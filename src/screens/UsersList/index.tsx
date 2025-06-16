import { TableUsers } from '../../components/TableUsers'
import { userMock } from '../../mocks/users'
import * as S from './styles'

export const UsersListScreen = () => {
  return (
    <S.ContainerRegisterUser>
      <S.Title>Users List</S.Title>
      <TableUsers users={userMock}/>
    </S.ContainerRegisterUser>
  )
}