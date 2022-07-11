import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Banner() {
    return (
        <Flex
            backgroundImage="url(/images/BackgroundBanner.png)"
            backgroundRepeat="no-repeat"
            justify="space-between"
        >
            <Flex
                flexDirection="column"
                px="36"
                py="20"
            >
                <Stack spacing={8}>
                    <Heading width="500px" color="#F5F8FA">
                        5 Continentes,
                        infinitas possibilidades.
                    </Heading>
                    <Text width="450px" color="#F5F8FA">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                </Stack>
            </Flex>
            <Flex
                mr="270px"
                mt="100px"
            >
                <Image
                    objectFit="contain"
                    src="/images/Airplane.png"
                    alt="image Hero"
                />
            </Flex>
        </Flex>
    )
}