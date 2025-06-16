'use client'
import { Button } from '../../components/Button'
import { Form } from '../../components/Form'
import * as S from './styles'
import * as Input from '@/components/Input'
import { EditUserProps } from './types'
import { useRouter } from 'next/navigation'
export const EditUserScreen = ({ id }: EditUserProps) => {
  
  const router = useRouter()
  
    const backToHome = () => {
      
      router.push('/')
    }
  return (
    //todos esses campos virão com os valores do GET /users/:id
    <S.ContainerEditUser>
      <Form title='Edit User'>
        <span>Id do usuário: { id}</span>
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
          Save
        </Button>

        <Button backgroundColor='#EEEFE0' color='#000' margin='0' onClick={backToHome} type='button'>Back to home</Button>

        
      </Form>
    </S.ContainerEditUser>
  )
}