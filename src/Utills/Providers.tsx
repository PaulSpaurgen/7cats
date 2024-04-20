'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
    const theme  = extendTheme({
        fonts: {
          heading: 'var(--font-rubik)',
          body: 'var(--font-rubik)',
        }
    });
  return <ChakraProvider theme = {theme}>{children}</ChakraProvider>
}