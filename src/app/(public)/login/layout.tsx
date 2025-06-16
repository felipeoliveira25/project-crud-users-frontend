// app/(public)/login/layout.tsx
import { ReactNode } from "react"
import StyledComponentsRegistry from "../../../lib/registry"

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
