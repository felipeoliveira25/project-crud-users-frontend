import { ReactNode } from "react"
import StyledComponentsRegistry from "../../../lib/registry"

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
  )
}
