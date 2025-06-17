'use client'
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  overflow-x: hidden;
  height: 5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`

export const TextHelloUser = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
`

export const ContainerActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

interface ButtonLinkToRegisterUserProps {
  $isDisabled?: boolean
}


export const ButtonLinkToRegisterUser = styled.button<ButtonLinkToRegisterUserProps>`
  align-items: center;
 background-color: #FFFFFF;
 border: 1px solid hsla(0, 0.00%, 0.00%, 0.10);
 border-radius: .25rem;
 box-shadow: hsla(0, 0.00%, 0.00%, 0.02) 0 1px 3px 0;
 box-sizing: border-box;
 color: #000000;
 cursor: pointer;
 font-size: 16px;
 font-weight: 600;
 justify-content: center;
 min-height: 1rem;
 padding: calc(.875rem - 1px) calc(1.5rem - 1px);
 user-select: none;

 &:hover {
  border-color: rgba(0, 0, 0, 0.15);
 box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
 color: rgba(0, 0, 0, 0.65);
 transform: translateY(-1px);
 }

${({ $isDisabled }) =>
    $isDisabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}

 
`

export const ProfileUser = styled.div`
  background-color: #A4CCD9;
  border-radius: 50%;
  padding: 1rem;
  width: 3.1rem;
  height: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextProfileUser = styled.span`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 800;
`