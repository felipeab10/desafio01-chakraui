import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex
            py="6"
            as="header"
            bg="white"
            justify="center"
            align="center"
        >
            <Image
                src="/images/Logo.png"
                alt="logo"
            />

        </Flex>
    )
}