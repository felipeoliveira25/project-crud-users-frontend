import StyledComponentsRegistry from "@/lib/registry";
import { ReactQueryProvider } from "@/providers/reactQueryProvider";
import { ToastProvider } from "@/providers/toastProvider";
import GlobalStyles from "@/styles/globalStyles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
              <StyledComponentsRegistry>
                  <ReactQueryProvider>
                      {children}
                  <ToastProvider/>
                  </ReactQueryProvider>
              </StyledComponentsRegistry>
      </body>
    </html>
  );
}
