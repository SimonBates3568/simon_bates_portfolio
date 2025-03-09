import { Blockquote } from "../components/ui/blockquote.jsx";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub, FaBootstrap, FaNpm, FaJs } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import WhatsAppButton from '../components/ui/WhatsAppButton';
import Chatbot from "../components/Chatbot.jsx";

import {
  Box,
  Heading,
  Button,
  Image,
  Stack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

// Define keyframes for the animation
// const spin = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="relative"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minH="100vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "black" : "white"}
      p={4}
    >
      {/* Background Image */}
      <Image
        src="/public/images/background_image.jpg"
        alt="hero image"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        top={0}
        left={0}
        opacity={0.4} // Adds a slight overlay effect
      />
      {/* Logo Image */}
      {/* <Image
        src="/public/images/simon.jpg"
        alt="logo image"
        objectFit="cover"
        w="100px"
        h="100px"
        position="absolute"
        top="10px"
        left="10px"
        zIndex={0}
        borderRadius="full"
        // animation={`${spin} infinite 20s linear`} // Apply the animation
      /> */}
      
      {/* Responsive Container for Icons */}
      <Box position="absolute" top={4} right={4} display="flex" gap={2} zIndex={1}>
        {/* Burger Bar Icon */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          onClick={onOpen}
          size="sm"
        />
        {/* Light/Dark Mode Toggle */}
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          size="sm"
        />
      </Box>
      {/* Drawer Component */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Button w="100%" mb={2} colorScheme="teal" onClick={() => window.location.href = "/portfolio"}>View Projects</Button>
            <Button w="100%" mb={2} colorScheme="blue" onClick={() => window.location.href = "/contact"}>Get in Touch</Button>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Hero Content */}
      <Stack spacing={4} maxW="800px" textAlign="center" justifyContent="center" alignItems="center" p={2}>
        <Heading as="h1" size="2xl">
          <Image src="/public/images/create-a-doodle-of-my-name-simon-bates-for-my-web- (2).jpg" alt="Simon Bates" borderRadius="full" width={200} height={200} />
        </Heading>
        <Blockquote showDash cite="Leiden" citeUrl="#"></Blockquote>
        <Button colorScheme="teal" size="md" onClick={() => window.location.href = "/portfolio"}>View Projects</Button>
        <Button colorScheme="teal" variant="outline" size="md" onClick={() => window.location.href = "/contact"}>Get in Touch</Button>
        <WhatsAppButton w={5} h={5} colorScheme="green"/>
      </Stack>
      {/* Our Tech Stack Section */}
      <Box mt={6} textAlign="center">
        <Stack direction="row" spacing={4} justifyContent="center">
          <FaReact size={40} />
          <FaJs size={40} />
          <FaNodeJs size={40} />
          <FaCss3Alt size={40} />
          <FaHtml5 size={40} />
          <FaGithub size={40} />
          <FaBootstrap size={40} />
          <FaNpm size={40} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
