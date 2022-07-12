import { Flex, Image, Link } from "@chakra-ui/react";
import { Link as NextLink } from 'next/link';

interface HeaderProps {
    continentId?: string | string[] | undefined;
    url?: string;
}

export default function Header({ continentId, url }: HeaderProps) {
    return (
        <Flex
            py="6"
            as="header"
            bg="white"
            px="20"
            align="center"
        >
            {continentId && (
                <Link as={NextLink} href={url}>
                    <Image
                        src="/images/back.svg"
                        alt="voltar"
                    />
                </Link>
            )}

            <Flex justify="center" align="center" flex="1">
                <Image
                    src="/images/Logo.png"
                    alt="logo"
                />
            </Flex>

        </Flex>
    )
}