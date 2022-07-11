import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Flex, Heading, Image } from '@chakra-ui/react';

export function SwiperComponent() {
    return (
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
                    backgroundImage="url(/images/northamerica.jpg)"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    height="450px"
                    flexDirection="column"
                >
                    <Heading fontSize="5xl" color="#DADADA">America do norte</Heading>
                    <Heading fontSize="2xl" color="#DADADA">Cada bairro oferece algo diferente, do moderno Brooklyn ao elegante Manhattan..</Heading>
                </Flex>

            </SwiperSlide>
            <SwiperSlide tag="div" >
                <Flex
                    justify="center"
                    align='center'
                    backgroundImage="url(/images/sulofamerica.jpg)"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    height="450px"
                    flexDirection="column"
                >
                    <Heading fontSize="5xl" color="#DADADA">America do sul</Heading>
                    <Heading fontSize="2xl" color="#DADADA">Praias lindas, e pessoas muito animada</Heading>
                </Flex>

            </SwiperSlide>
            <SwiperSlide tag="div" >
                <Flex
                    justify="center"
                    align='center'
                    backgroundImage="url(/images/asia.jpg)"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    height="450px"
                    flexDirection="column"
                >
                    <Heading fontSize="5xl" color="#DADADA">Ásia</Heading>
                    <Heading fontSize="2xl" color="#DADADA">Xangai é um centro financeiro global repleto de arranha-céus.</Heading>
                </Flex>

            </SwiperSlide>
            <SwiperSlide tag="div" >
                <Flex
                    justify="center"
                    align='center'
                    backgroundImage="url(/images/europa.png)"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    height="450px"
                    flexDirection="column"
                >
                    <Heading fontSize="5xl" color="#DADADA">Europa</Heading>
                    <Heading fontSize="2xl" color="#DADADA">O continente mais antigo.</Heading>
                </Flex>

            </SwiperSlide>
            <SwiperSlide tag="div" >
                <Flex
                    justify="center"
                    align='center'
                    backgroundImage="url(/images/oceania.jpg)"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    height="450px"
                    flexDirection="column"
                >
                    <Heading fontSize="5xl" color="#DADADA">Oceania</Heading>
                    <Heading fontSize="2xl" color="#DADADA">O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville.</Heading>
                </Flex>

            </SwiperSlide>

        </Swiper>
    )
}