import * as S from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  return (
    <S.WrapperButton $width={props.width} $height={props.height} $backgroundColor={props.backgroundColor} color={props.color} $margin={props.margin} {...props}>
      {props.children}
    </S.WrapperButton>
  )
}