import React from 'react';
import { Box, Heading, Text, Avatar, Grid, GridItem, VStack, useColorModeValue, Divider, Button, Fade, SlideFade, Image } from '@chakra-ui/react';

const AboutPage = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const sectionBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const buttonBg = useColorModeValue('teal.500', 'teal.300');

  return (
    <Box
      p={[2, 3, 5]}
      bg={bg}
      color={textColor}
      backgroundImage="url('/public/images/background_image.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading fontSize={['2xl', '3xl', '4xl']} textAlign="center" mb={5} fontFamily="Poppins, sans-serif">About Me</Heading>

      {/* About */}
      <SlideFade in offsetX={-80} transition={{ enter: { duration: 1.5 } }}>
        <Box bg={sectionBg} p={5} borderRadius="md" mb={10} boxShadow="lg">
          <Grid templateColumns={['1fr', '1fr 3fr']} gap={6}>
            <GridItem>
              <Image src="/public/images/simon.jpg" alt="Simon Bates"/>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="start">
                <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Professional Profile</Heading>
                <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
                  I have experience working on various projects and enjoy collaborating with others to bring ideas to life. I'm always looking for opportunities to grow and improve my skills.
                </Text>
                <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
                  I'm excited about the future of web development and can't wait to see what new technologies and trends emerge. Let's work together to create something amazing!
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </SlideFade>
      
      <Divider my={10} />

      {/* Technologies */}
      <Fade in transition={{ enter: { duration: 1.5 } }}>
        <Box bg={sectionBg} p={5} borderRadius="md" mb={10} boxShadow="lg">
          <Heading fontSize={['xl', '2xl']} mb={4} fontFamily="Poppins, sans-serif">Technologies I Use</Heading>
         
          <VStack spacing={4} align="start">
          <Image src="/public/images/create-a-picture-for-my-web-developer-portfolio-to (2).jpg" alt="Simon Bates"  width={200} height={200}/>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>Programming Languages:</strong> HTML5, CSS3, JavaScript
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>Frameworks & Libraries:</strong> Bootstrap, React, Express.js, Chakra-UI
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>Server-side Runtime Environment:</strong> Node.js
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>XAMPP Software Stack:</strong> Apache HTTP Server, MySQL, PHP
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>Version Control:</strong> Git, GitHub
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>Databases:</strong> MySQL, MongoDB, SQLite
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>Package Managers:</strong> NPM
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              <strong>AI-assisted Development</strong>
            </Text>
          </VStack>
        </Box>
      </Fade>
      
      <Divider my={10} />

      {/* My Mission and Vision */}
      <SlideFade in offsetY={80} transition={{ enter: { duration: 1.5 } }}>
        <Box bg={sectionBg} p={5} borderRadius="md" mb={10} boxShadow="lg">
          <Grid templateColumns={['1fr', '1fr 1fr']} gap={6}>
            <GridItem>
              <VStack spacing={4} align="start">
                <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">My Mission</Heading>
                <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
                  My mission is to keep learning and growing as a web developer. I want to create websites that not only look great but also provide a fantastic user experience. By staying curious and open to new ideas, I aim to make a positive impact in the web development community.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="start">
                <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">My Vision</Heading>
                <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
                  My vision is to be a web developer who is known for creativity, technical skills, and a willingness to learn. I want to be someone who businesses can rely on to help them achieve their online goals. By building strong relationships and delivering quality work, I hope to make a lasting impact in the industry.
                </Text>
                <Image src="/public/images/my_vision.jpg" alt="Simon Bates"  width={200} height={200}/>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </SlideFade>
      
      <Divider my={10} />

      {/* Contact */}
      <Fade in transition={{ enter: { duration: 1.5 } }}>
        <Box bg={sectionBg} p={5} borderRadius="md" mb={10} boxShadow="lg">
          <Heading fontSize={['xl', '2xl']} mb={4} fontFamily="Poppins, sans-serif">Contact Me</Heading>
          <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
            If you're looking for a web developer who is eager to learn and grow, I'd love to hear from you. Please reach out to me at simonbates52@gmail.com. Let's discuss how we can work together to create something amazing!
          </Text>
          <Box mt={4}>
            <Button colorScheme="teal" bg={buttonBg} variant="solid" size={["md", "lg"]} onClick={() => window.location.href = "/contact"}>Get in Touch</Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default AboutPage;
