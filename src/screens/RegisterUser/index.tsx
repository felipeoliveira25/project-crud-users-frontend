'use client'
import { Button } from '../../components/Button'
import { Form } from '../../components/Form'
import * as S from './styles'
import * as Input from '@/components/Input'
import { useRouter } from 'next/navigation';


//aqui ficará a chamada para criar um novo usuário 
//POST /users
export const RegisterUserScreen = () => {

  const router = useRouter()

  const backToHome = () => {
    
    router.push('/')
  }
  return (
    <S.ContainerRegisterUser>
      <Form title='Register new User' subtitle='Add his information'>
          <Input.GeneralRoot>
              <Input.Label>Name</Input.Label>
              <Input.RootInput />
          </Input.GeneralRoot>
            
          <Input.GeneralRoot>
              <Input.Label>E-mail</Input.Label>
              <Input.RootInput/>
          </Input.GeneralRoot>
        
          <Input.GeneralRoot>
              <Input.Label>Telephone</Input.Label>
              <Input.RootInput/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Role</Input.Label>
              <Input.RootInput/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Age</Input.Label>
              <Input.RootInput/>
          </Input.GeneralRoot>
          
          <Input.GeneralRoot>
              <Input.Label>Salary</Input.Label>
              <Input.RootInput/>
          </Input.GeneralRoot>
        
        <Button>
          Send
        </Button>
        
        <Button backgroundColor='#EEEFE0' color='#000' margin='0' onClick={backToHome} type='button'>Back to home</Button>

      </Form>

      
    </S.ContainerRegisterUser>
  )
}