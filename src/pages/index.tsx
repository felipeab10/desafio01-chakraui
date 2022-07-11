import { Divider, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Banner from '../components/Home/Banner'
import Header from '../components/Home/Header'
import { SwiperComponent } from '../components/Home/SwiperComponent';

import { TravelType } from '../components/Home/TravelType';


export default function Home() {
  return (
    <Flex
      w="100vw"
      maxW={[375, 1440]}
      height="100vh"
      mx="auto"
      flexDirection="column">
      <Header />
      <Stack spacing={12}>
        <Banner />
        <Flex
          flex="1"
          justify="center"
          flexDirection="row">

          <Grid templateColumns="repeat(5, 1fr)" gap={40}>
            <TravelType image='images/cocktail.svg' label='Vida noturna' />
            <TravelType image='images/surf.svg' label='praia' />
            <TravelType image='images/building.svg' label='moderno' />
            <TravelType image='images/museum.svg' label='clássico' />
            <TravelType image='images/earth.svg' label='e mais...' />

          </Grid>
        </Flex>
        <Flex justify="center">
          <Divider w="90px" borderWidth="2px" borderColor="#47585B" />
        </Flex>
        <Flex
          align="center"
          justify="center"
          flexDirection="column"
        >
          <Heading
            textAlign="center"
            fontSize='4xl'
            fontWeight="normal"
          >
            Vamos nessa?
          </Heading>
          <Heading
            textAlign="center"
            fontSize='4xl'
            fontWeight="normal"
          >
            Então escolha seu continente
          </Heading>
        </Flex>
        <Flex
          style={{ marginLeft: '100px', paddingBottom: "30px" }}
          justify="center"
          align="center"
          w="100vw"
          maxW={1240}
        >
          <SwiperComponent />
        </Flex>
      </Stack>
    </Flex>
  )
}
