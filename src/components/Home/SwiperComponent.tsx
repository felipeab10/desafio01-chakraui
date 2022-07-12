import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Flex, Heading, Image, Link } from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';

interface continentData {
    description: string;
    id: number;
    image: string;
    name: string;
}
interface SwiperComponentProps {
    continents: continentData[];
}



export function SwiperComponent({ continents }: SwiperComponentProps) {
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
            {continents?.map(continent => (
                <SwiperSlide tag="div" key={continent.id}>
                    <Flex
                        justify="center"
                        align='center'
                        backgroundImage={`url(${continent.image})`}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        height="450px"
                        flexDirection="column"
                    >
                        <Link as={NextLink} href={`/continent/${continent.id}`}>
                            <Heading fontSize="5xl" color="#DADADA">{continent.name}</Heading>
                        </Link>
                        <Link as={NextLink} href={`/continent/${continent.id}`}>
                            <Heading fontSize="2xl" color="#DADADA">{continent.description}</Heading>
                        </Link>


                    </Flex>

                </SwiperSlide>
            ))}


        </Swiper>
    )
}