import { createBreakpoints } from '@chakra-ui/theme-tools'
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const fonts = {
  heading: 'Roboto',
  body: 'Roboto',
}

const theme = extendTheme({ config, breakpoints, fonts })

export default theme
