import {
  Flex,
  Button,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import ThemeSwitcher from '../ThemeSwitcher'
import theme from '../theme'

const Navbar = () => {
  const [display, changeDisplay] = useState('none')
  const { colorMode, setColorMode } = useColorMode()
  return (
    <Flex justifyContent={['flex-start', 'flex-start', 'center', 'center']}>
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
        </NextLink>
        <NextLink href="/adicionar" passHref>
          <Button as="a" variant="ghost" aria-label="Sobre" my={5} w="100%">
            Adicionar
          </Button>
        </NextLink>
        <NextLink href="/catalogo" passHref>
          <Button as="a" variant="ghost" aria-label="Contato" my={5} w="100%">
            Catálogo
          </Button>
        </NextLink>
        <ThemeSwitcher />
      </Flex>

      <IconButton
        aria-label="Abrir Menu"
        size="lg"
        mt={2}
        ml={2}
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
      />

      <Flex
        w="100vw"
        bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex>
          <IconButton
            mt={2}
            ml={2}
            aria-label="Fechar Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>
          <NextLink href="/adicionar" passHref>
            <Button as="a" variant="ghost" aria-label="Sobre" my={5} w="100%">
              Adicionar
            </Button>
          </NextLink>
          <NextLink href="/catalogo" passHref>
            <Button as="a" variant="ghost" aria-label="Contato" my={5} w="100%">
              Catálogo
            </Button>
          </NextLink>
          <ThemeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
