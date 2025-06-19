import { Header } from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
    </>
  );
}