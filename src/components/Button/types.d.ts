import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  margin?: string
  onClick?: () => void
}