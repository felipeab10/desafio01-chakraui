import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Home/Header";

interface cityData {
    id: number;
    city: string;
    contry: string;
    image: string;
    logo: string;
}


interface continentData {
    citys: cityData[];
    description: string;
    id: number;
    image_cover: string;
    name: string;
    totalCity: string;
    totalCountry: string;
    totalLanguage: string;
}


export default function Continent() {
    const [continent, setContinent] = useState<continentData>();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get(`/api/getContinent/${id}`)
                .then((resp) => {
                    setContinent(resp.data.continent)

                })
        }
    }, [id]);


    return (
        <Flex
            w="100vw"
            maxW={[375, 1440]}
            height="100vh"
            mx="auto"
            flexDirection="column"
        >
            <Header continentId={id} url="/" />
            <Stack spacing={16}>
                <Flex
                    backgroundImage={`url(${continent?.image_cover})`}
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center"
                    backgroundSize="cover"
                    height="500px"
                    px="20"
                    py="20"
                    justify="flex-start"
                    align="flex-end"
                >
                    <Heading fontSize="5xl" color="#F5F8FA">{continent?.name}</Heading>
                </Flex>
                <Grid templateColumns="1fr 1fr" gap="2" px="20">
                    <GridItem>
                        <Text width="600px">
                            {continent?.description}
                        </Text>
                    </GridItem>
                    <GridItem >
                        <HStack spacing="28">
                            <Flex flexDirection="column" textAlign="center">
                                <Heading fontSize="5xl" fontWeight={600} color="#FFBA08">{continent?.totalCountry}</Heading>
                                <Text fontSize="2xl" fontWeight={600}>países</Text>
                            </Flex>
                            <Flex flexDirection="column" textAlign="center">
                                <Heading fontSize="5xl" fontWeight={600} color="#FFBA08">{continent?.totalLanguage}</Heading>
                                <Text fontSize="2xl" fontWeight={600}>línguas</Text>
                            </Flex>
                            <Flex flexDirection="column" textAlign="center">
                                <Heading fontSize="5xl" fontWeight={600} color="#FFBA08">{continent?.totalCity}</Heading>
                                <Text fontSize="2xl" fontWeight={600}>cidades +100</Text>
                            </Flex>
                        </HStack>
                    </GridItem>
                </Grid>
                <Flex px="20" flexDirection="column" py="8">
                    <Stack spacing={8}>
                        <Heading fontWeight={500} >Cidades +100</Heading>
                        <Grid templateColumns="1fr 1fr 1fr 1fr" gap={10}>
                            {continent?.citys?.map(continent => (
                                <GridItem key={continent.id}>
                                    <Flex flexDirection="column">
                                        <Image
                                            src={continent.image}
                                            alt={continent.city}
                                        />
                                        <Flex align="center" justify="space-between" borderBottomWidth={1} borderLeftWidth={1} borderRightWidth={1} borderRadius="5" borderColor="#FFBA08" px="10">
                                            <Flex py="4" flexDirection="column">
                                                <Text fontSize="xl">{continent.city}</Text>
                                                <Text color="#999999" >{continent.contry}</Text>
                                            </Flex>
                                            <Image
                                                boxSize="30px"
                                                src={continent.logo}
                                                alt="reino unido"
                                            />
                                        </Flex>

                                    </Flex>
                                </GridItem>
                            ))}

                        </Grid>
                    </Stack>
                </Flex>
            </Stack>
        </Flex>
    )
}