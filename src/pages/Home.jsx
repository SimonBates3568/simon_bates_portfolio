import { Blockquote } from "../components/ui/blockquote.jsx";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub, FaBootstrap, FaNpm, FaJs } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import WhatsAppButton from '../components/ui/WhatsAppButton';

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
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

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
      minH="90vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "black" : "white"}
      p={[4, 6, 10]}
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
      <Image
        src="/public/images/simon.jpg"
        alt="logo image"
        objectFit="cover"
        w={["100px", "150px", "200px"]}
        h={["100px", "150px", "200px"]}
        position="absolute"
        top={["10px", "20px", "30px"]}
        left={["10px", "20px", "30px"]}
        zIndex={0}
        borderRadius="full"
        // animation={`${spin} infinite 20s linear`} // Apply the animation
      />
      {/* Responsive Container for Icons */}
      <Box position="absolute" top={4} right={4} display="flex" gap={4} zIndex={1}>
        {/* Burger Bar Icon */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          onClick={onOpen}
        />
        {/* Light/Dark Mode Toggle */}
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
        />
      </Box>
      {/* Drawer Component */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Button w="100%" mb={4} colorScheme="teal" onClick={() => window.location.href = "/portfolio"}>View Projects</Button>
            <Button w="100%" mb={4} colorScheme="blue" onClick={() => window.location.href = "/contact"}>Get in Touch</Button>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Hero Content */}
      <Stack spacing={6} maxW="800px" textAlign="center" justifyContent="center" alignItems="center" p={4}>
        <Heading as="h1" size={["2xl", "3xl", "4xl"]}>
          Welcome to Simon's Portfolio
        </Heading>
        <Blockquote showDash cite="Leiden" citeUrl="#"></Blockquote>
        <Button colorScheme="teal" size={["md", "lg"]} onClick={() => window.location.href = "/portfolio"}>View Projects</Button>
        <Button colorScheme="teal" variant="outline" size={["md", "lg"]} onClick={() => window.location.href = "/contact"}>Get in Touch</Button>
         <WhatsAppButton w={5} h={5} colorScheme="green"/>
      </Stack>
      {/* Our Tech Stack Section */}
      <Box mt={10} textAlign="center"></Box>
      <Box mt={10} textAlign="center">
        <Stack direction={["column", "row"]} spacing={8} justifyContent="center">
          <FaReact size={50} />
          <FaJs size={50} />
          <FaNodeJs size={50} />
          <FaCss3Alt size={50} />
          <FaHtml5 size={50} />
          <FaGithub size={50} />
          <FaBootstrap size={50} />
          <FaNpm size={50} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
