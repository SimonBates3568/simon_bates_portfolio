import React from 'react';
import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

const certificates = [
    {
        title: 'HTML basics',
        date: 'January 2023',
        description: 'Completed the JavaScript Basics course covering fundamentals of JavaScript.',
        imageUrl: 'path/to/javascript-basics-certificate.jpg'
    },
    {
        title: 'CSS basics',
        date: 'March 2023',
        description: 'Completed the React Development course covering React fundamentals and advanced topics.',
        imageUrl: 'path/to/react-development-certificate.jpg'
    },
    {
        title: 'JavaScript basics (FED/FS/BED)',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'CSS advanced',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'Design and accessibility)',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'JavaScript Functions',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'JavaScript Advanced',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'ChatGPT for Coding',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'Professional Coding Setup',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'JavaScript in the Browser',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'Talking to the backend',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'React Basics',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    {
        title: 'React Advanced',
        date: 'May 2023',
        description: 'Completed the Node.js course covering Node.js fundamentals and advanced topics.',
        imageUrl: 'path/to/nodejs-certificate.jpg'
    },
    // Add more certificates as needed
];

const Winc = () => {
    return (
        <Box className="certificate-showcase" p={{ base: 2, md: 4 }}>
            <Heading as="h1" size={{ base: 'lg', md: 'xl' }} mb={{ base: 4, md: 6 }} textAlign="center">
                Winc Academy Developer Track: Front End Developer
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 4, md: 6 }}>
                {certificates.map((certificate, index) => (
                    <Box key={index} className="certificate-card" borderWidth="1px" borderRadius="lg" overflow="hidden" p={{ base: 2, md: 4 }}>
                        <Image src={certificate.imageUrl} alt={`${certificate.title} Certificate`} mb={{ base: 2, md: 4 }} />
                        <Heading as="h2" size={{ base: 'sm', md: 'md' }} mb={{ base: 1, md: 2 }}>{certificate.title}</Heading>
                        <Text fontSize={{ base: 'xs', md: 'sm' }} color="gray.500" mb={{ base: 1, md: 2 }}>{certificate.date}</Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }}>{certificate.description}</Text>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Winc;
