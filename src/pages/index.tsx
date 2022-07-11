import { Box, Divider, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Banner from '../components/Home/Banner'
import Header from '../components/Home/Header'
import styles from './index.module.css';

import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


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
            <GridItem >
              <Flex flexDirection="column" justify='center' align="center">
                <Image
                  mb="2"
                  boxSize="60px"
                  src="images/cocktail.svg"
                  alt="night life"
                />
                <Text fontWeight="600">Vida noturna</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" justify='center' align="center">
                <Image
                  mb="2"
                  boxSize="60px"
                  src="images/surf.svg"
                  alt="night life"
                />
                <Text fontWeight="600">praia</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" justify='center' align="center">
                <Image
                  mb="2"
                  boxSize="60px"
                  src="images/building.svg"
                  alt="night life"
                />
                <Text fontWeight="600">moderno</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" justify='center' align="center">
                <Image
                  mb="2"
                  boxSize="60px"
                  src="images/museum.svg"
                  alt="night life"
                />
                <Text fontWeight="600">clássico</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex flexDirection="column" justify='center' align="center">
                <Image
                  mb="2"
                  boxSize="60px"
                  src="images/earth.svg"
                  alt="night life"
                />
                <Text fontWeight="600">e mais...</Text>
              </Flex>
            </GridItem>
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
          <Swiper
            centeredSlides={true}

            //style={{ alignContent: 'center', alignItems: 'center', marginLeft: '100px' }}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar]}
            navigation
            touchRatio={1.5}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide tag="div" >
              <Flex
                justify="center"
                align='center'
                backgroundImage="url(/images/europa.png)"
                backgroundRepeat="no-repeat"
                height="450px"
                flexDirection="column"
              >
                <Heading fontSize="5xl" color="#DADADA">Europa</Heading>
                <Heading fontSize="2xl" color="#DADADA">O continente mais antigo.</Heading>
              </Flex>

            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/europa.png'
                alt="teste"
              />

            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/europa.png'
                alt="teste"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src='/images/europa.png'
                alt="teste"
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Stack>
    </Flex>
  )
}
