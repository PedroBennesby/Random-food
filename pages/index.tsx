import Head from 'next/head'
import {
  Container,
  Text,
  useColorMode,
  Button,
  IconButton,
  Switch,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>Food Randomizer</title>
      </Head>

      <Container
        my="40px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Teste color mode</Text>

        {colorMode === 'light' ? (
          <IconButton
            my="20px"
            isRound
            color="gray.800"
            icon={<MoonIcon />}
            variant="outline"
            onClick={toggleColorMode}
            aria-label="Change color mode"
          />
        ) : (
          <IconButton
            my="20px"
            isRound
            color="yellow.500"
            icon={<SunIcon />}
            variant="outline"
            onClick={toggleColorMode}
            aria-label="Change color mode"
          />
        )}
      </Container>
    </>
  )
}
