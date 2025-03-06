import { Box, Link, HStack, Flex } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Box as="nav" bg="gray.900" color="white" py={2}>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'center', md: 'center' }}
                justify={{ base: 'center', md: 'space-between' }}
                px={{ base: 4, md: 8 }}
            >
                <HStack
                    spacing={8}
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Link href="/" _hover={{ color: 'cyan.400', textDecoration: 'underline' }}>Home</Link>
                    <Link href="/About" _hover={{ color: 'cyan.400', textDecoration: 'underline' }}>About</Link>
                    <Link href="/Portfolio" _hover={{ color: 'cyan.400', textDecoration: 'underline' }}>Projects</Link>
                    <Link href="/Contact" _hover={{ color: 'cyan.400', textDecoration: 'underline' }}>Contact</Link>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Navbar;
