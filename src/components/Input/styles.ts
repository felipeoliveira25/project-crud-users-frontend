'use client'
import styled from "styled-components";

interface InputFieldContainerProps {
  $hasError?: boolean
}


export const GeneralRootContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const LabelInput = styled.label`
    font-size: 1rem;
    color: #8B8E98;
    font-weight: 600;
`

export const InputFieldContainer = styled.div<InputFieldContainerProps>`
    border-radius: 6px;
    outline: none;
    border: ${({$hasError}) => $hasError ? '2px solid  #f13232' : '2px solid #e5e5e5'} ;
    height: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    
`

export const InputFieldText = styled.input`
   outline: none;
   width: 100%;
   height: 100%;
   border: none;
   padding-left: 0.2rem;
   font-size: 15px;
`

export const WrapperIcon = styled.span`
  margin-right: 0.4rem;
  cursor: pointer;
`

export const ErrorMessageText = styled.span`
  color:#fa4747;
  font-size: 12px;
`