/* eslint-disable @next/next/no-page-custom-font */

import { Layout } from "@/components/_common/Layout";
import ClientProvider from "./provider";

// note: need to use `type` (not `interface`) because not all
// NextComponentType members are statically typed
// Generally prefer interface for better error messages
// (see https://www.typescripttutorial.net/typescript-tutorial/typescript-extend-interface/)
interface LayoutProps {
  children: React.ReactNode;
  session?: any;
}

export default async function RootLayout({ children, session }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unica+One&family=Lato&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientProvider>
          <Layout>
            {/* adapted from https://next-auth.js.org/getting-started/client#custom-client-session-handling */}
            {children}
          </Layout>
        </ClientProvider>
      </body>
    </html>
  );
}
