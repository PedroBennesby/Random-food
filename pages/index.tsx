import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Navbar from '../components/NavBar'
import { Flex, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Food Randomizer</title>
      </Head>
      <Navbar />
      <Flex w="100vw" justify="center">
        <Heading as="h1" size="xl" mt="20">
          O que vamos comer?
        </Heading>
      </Flex>
    </div>
  )
}

export default Home
