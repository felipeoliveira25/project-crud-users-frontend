import { FormHTMLAttributes, ReactNode } from "react";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement>{
  title: string
  subtitle?: string
  children: ReactNode
}