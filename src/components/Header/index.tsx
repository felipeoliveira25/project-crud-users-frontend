'use client'
import * as S from "./styles"
import { usePathname, useRouter } from 'next/navigation';

export const Header = () => {

  const pathname = usePathname()

  const isAddUserPage = pathname === '/register-user'

  const router = useRouter()

  const goToRegisterUserPage = () => {
      router.push('/register-user')
  } 


  const backToHome = () => {
    
    router.push('/')
  }

  return (
    <S.HeaderContainer>
      <S.TextHelloUser onClick={() => backToHome()}>CRUD Users</S.TextHelloUser>

      <S.ContainerActions>
        <S.ButtonLinkToRegisterUser $isDisabled={isAddUserPage} disabled={isAddUserPage} onClick={() => goToRegisterUserPage()}>Add User</S.ButtonLinkToRegisterUser>
        
        <S.ProfileUser>
          <S.TextProfileUser>F</S.TextProfileUser>
        </S.ProfileUser>
          
      </S.ContainerActions>
    </S.HeaderContainer>
  )
}