"use client";

import { Box } from "@chakra-ui/react";

import { NavBar } from "../nav/Nav";
import { LoadingSpinner } from "./LoadingSpinner";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box h="100vh" w="100vw">
    <Box zIndex={50} w="100vw">
      <NavBar />
    </Box>
    <Box w="100vw" mt={4}>
      <LoadingSpinner display={false} />
      <main>{children}</main>
    </Box>
  </Box>
);
