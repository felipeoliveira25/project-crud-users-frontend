import styled from "styled-components"

interface WrapperButtonProps {
  $width?: string
  $height?: string
  $backgroundColor?: string
  $margin?: string
  color?: string
}

export const WrapperButton = styled.button<WrapperButtonProps>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "3rem"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || "#115DFC"};
  color: ${({ color }) => color || "#fff"};;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  margin: ${({ $margin }) => $margin || "1rem 0 0 0"};
`
