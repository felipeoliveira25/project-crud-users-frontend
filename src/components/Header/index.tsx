'use client'
import * as S from "./styles"
import { HeaderProps } from "./types"
import { usePathname, useRouter } from 'next/navigation';

export const Header = ({ nameUser }: HeaderProps) => {
  //por enquanto está como props, mas futuramente será necessário ter uma chamada para buscar o nome do usuário
  const firstLetterNameUser = nameUser.trim().split(' ')[0][0].toUpperCase()

  const pathname = usePathname()
  console.log("🚀 ~ Header ~ pathname:", pathname)

  const isAddUserPage = pathname === '/register-user'

  const router = useRouter()

  const goToRegisterUserPage = () => {
      router.push('/register-user')
  } 

  return (
    <S.HeaderContainer>
      <S.TextHelloUser>Olá, {nameUser}</S.TextHelloUser>

      <S.ContainerActions>
        <S.ButtonLinkToRegisterUser $isDisabled={isAddUserPage} disabled={isAddUserPage} onClick={() => goToRegisterUserPage()}>Add User</S.ButtonLinkToRegisterUser>
        
        <S.ProfileUser>
          <S.TextProfileUser>{firstLetterNameUser}</S.TextProfileUser>
        </S.ProfileUser>
          
      </S.ContainerActions>
    </S.HeaderContainer>
  )
}