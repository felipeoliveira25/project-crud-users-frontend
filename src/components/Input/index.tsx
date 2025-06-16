'use client'
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, useState } from "react"
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import * as S from './styles'


interface IconProps {
  children: ReactNode
  onClick?: () => void
}

export const Icon = ({children, onClick}: IconProps) => {
  return (
    <S.WrapperIcon onClick={onClick}>
      {children}
    </S.WrapperIcon>
  )
}

interface GeneralRootProps {
  children: ReactNode
}

export const GeneralRoot = ({children}: GeneralRootProps) => {
  return (
    <S.GeneralRootContainer>
      {children}
    </S.GeneralRootContainer>
  )
}

interface RootInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPasswordInput?: boolean
  children?: ReactNode
}

export const RootInput = ({ children ,isPasswordInput, ...props }: RootInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleVisibility = () => setShowPassword((prev) => !prev)

  const inputType = isPasswordInput ? (showPassword ? 'text' : 'password') : props.type || 'text'

  return (
    <S.InputFieldContainer>
      {children}
      <S.InputFieldText {...props} type={inputType} />
      {isPasswordInput && (
        <Icon onClick={toggleVisibility}>
          {showPassword ? <VscEyeClosed size={18} /> : <VscEye size={18} />}
        </Icon>
      )}
    </S.InputFieldContainer>
  )
}


interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement>{}

export const FormField = (props: FormFieldProps) => {
  return (
          <S.InputFieldText {...props} />
  )
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{
  children: ReactNode
}

export const Label = (props: LabelProps) => {
  return (
    <S.LabelInput {...props}>
      {props.children}
    </S.LabelInput>
  )
}

interface ErrorMessageProps {
  message: string | undefined
}

export const ErrorMessage = ({message}: ErrorMessageProps) => {
  return (
    <span>{message }</span>
  )
}

