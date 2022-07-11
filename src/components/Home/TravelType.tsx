import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps {
    label: string;
    image: string;
}

export function TravelType({ label, image }: TravelTypeProps) {
    return (
        <GridItem >
            <Flex flexDirection="column" justify='center' align="center">
                <Image
                    mb="2"
                    boxSize="60px"
                    src={image}
                    alt="night life"
                />
                <Text fontWeight="600">{label}</Text>
            </Flex>
        </GridItem>
    )
}