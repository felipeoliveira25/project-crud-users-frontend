import { Header } from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";




export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header nameUser="Lara Nunes" />
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}