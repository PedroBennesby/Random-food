import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React from 'react'
import theme from '../components/theme'
import '@fontsource/roboto'

function MyApp({ Component, pageProps }: AppProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
