"use client";

import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@/lib/theme";

interface ClientProviderProps {
  children: React.ReactNode;
  session?: any;
}

export default function ClientProvider({
  children,
  session,
}: ClientProviderProps) {
  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </SessionProvider>
    </>
  );
}
