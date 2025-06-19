'use client'

import { formatSalary, formatTelephone } from '../../utils'
import * as S from './styles'
import { useRouter } from 'next/navigation'
import { useGetUsers } from '../../hooks/useGetUsers'
import { useValidateToken } from '../../hooks/useValidateToken'

export const TableUsers = () => {
  const router = useRouter()

  useValidateToken()
  
  const { data, isPending } = useGetUsers()

  const handleGoToUser = (id: number) => {
    router.push(`/edit-user/${id}`)
  }

  if (isPending) {
    return <p>Loading users...</p>
  }

  return (
    <S.TableContainer>
      <S.Table>
        <S.TableHeader>
          <tr>
            <S.TableHeaderCell>Nome</S.TableHeaderCell>
            <S.TableHeaderCell>Email</S.TableHeaderCell>
            <S.TableHeaderCell>Telefone</S.TableHeaderCell>
            <S.TableHeaderCell>Cargo</S.TableHeaderCell>
            <S.TableHeaderCell>Idade</S.TableHeaderCell>
            <S.TableHeaderCell>Salário</S.TableHeaderCell>
          </tr>
        </S.TableHeader>
        <S.TableBody>
  {data && data.length > 0 ? (
    data.map((user) => (
      <S.TableRow key={user.id} onClick={() => handleGoToUser(user.id)}>
        <S.TableCell>{user.name}</S.TableCell>
        <S.EmailCell>{user.email}</S.EmailCell>
        <S.TelefoneCell>{formatTelephone(user.telephone)}</S.TelefoneCell>
        <S.CargoCell>{user.role}</S.CargoCell>
        <S.TableCell>{user.age} anos</S.TableCell>
        <S.SalaryCell>{formatSalary(user.salary)}</S.SalaryCell>
      </S.TableRow>
    ))
  ) : (
    <S.TableRow>
      <S.TableCell colSpan={6}>
        <S.ContainerWithoutUsers>
          <span>📋</span>
          <span>Nenhum usuário cadastrado</span>
          <span>
            Adicione usuários para visualizá-los aqui
          </span>
        </S.ContainerWithoutUsers>
      </S.TableCell>
    </S.TableRow>
  )}
</S.TableBody>
      </S.Table>
    </S.TableContainer>
  )
}
