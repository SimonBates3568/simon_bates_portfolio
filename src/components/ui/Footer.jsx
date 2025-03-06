import React from 'react';
import { Box, Text, Link, VStack, HStack, Image } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" bg="gray.800" color="white" py={4}>
            <VStack spacing={4}>
                <Text fontSize="sm">&copy; Created by Simon Bates 2025 </Text>
                <HStack spacing={4}>
                    {/* <Image src="/public/images/logo.jpg" alt="Hero Image" mb="4" borderRadius="md" boxSize="50px" objectFit="cover" /> */}
                    <Link href="/privacy-policy" fontSize="sm" _hover={{ color: 'teal.300' }}>Privacy Policy</Link>
                    <Link href="/terms-of-service" fontSize="sm" _hover={{ color: 'teal.300' }}>Terms of Service</Link>
                    <Link href="/contact" fontSize="sm" _hover={{ color: 'teal.300' }}>Contact Us</Link>
                </HStack>
            </VStack>
       
        </Box>
    );
};

export default Footer;