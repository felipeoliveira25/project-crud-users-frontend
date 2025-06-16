'use client'

import * as S from './styles'

import { FormProps } from './types'

export const Form = ({children, title, subtitle, ...props}: FormProps) => {
  return (
    <S.FormContainer {...props}>
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle }</S.Subtitle>
      </S.ContainerTitle>
      {children}
        
      
    </S.FormContainer>
  )
}