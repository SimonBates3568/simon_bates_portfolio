import React from 'react';
import { Box, Heading, Text, Image, Button, Grid, Card, CardBody } from '@chakra-ui/react';
import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Import Tilt

const PortfolioPage = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Recipe Checker Website', 
      description: 'A project built using React and Vite, fetching data from an API. Styled with Chakra UI and formatted with ESLint.', 
      detail_description: 'This project was a great opportunity to dive deep into React and Vite. I focused on creating a responsive and user-friendly interface. The API integration was challenging but rewarding, and I learned a lot about handling asynchronous data fetching. Chakra UI was chosen for its simplicity and ease of use, which allowed me to quickly style the application. ESLint helped maintain code quality and consistency throughout the project.', 
      image: '/public/images/Recipe_checker.png',
      image_1: '/public/images/recipe_screenshot_1.png',
      image_2: '/public/images/recipe_Screenshot_3.png',
      demoLink: 'https://simonsrecipechecker.netlify.app/', 
      code: 'https://github.com/SimonBates3568/react-basics-project.git' 
    },
    { 
      id: 2, 
      title: 'Events Website', 
      description: 'A comprehensive events management website.', 
      detail_description: 'This project involved creating a full-featured events management system. I focused on building a robust backend with Node.js and Express, and a dynamic frontend with React. The project required careful planning and implementation of various features such as user authentication, event creation, and management. I also integrated a calendar API to display events in a user-friendly manner.', 
      image: '/images/my-portfolio-website.jpg', 
      image_1: '/images/event_screenshot_1.png',
      image_2: '/images/event_screenshot_2.png',
      demoLink: 'https://example.com/my-portfolio-website',
      code: 'https://github.com/SimonBates3568/events-website.git'
    },
    { 
      id: 3, 
      title: 'E-commerce Website', 
      description: 'An online store built with modern web technologies.', 
      detail_description: 'In this project, I built a fully functional e-commerce website. The frontend was developed using React and Redux for state management, while the backend was powered by Node.js and MongoDB. I implemented features such as product listings, shopping cart, and checkout process. Payment integration was done using Stripe. This project helped me understand the complexities of building a scalable and secure e-commerce platform.', 
      image: '/images/my-ecommerce-website.jpg', 
      image_1: '/images/ecommerce_screenshot_1.png',
      image_2: '/images/ecommerce_screenshot_2.png',
      demoLink: 'https://example.com/my-ecommerce-website',
      code: 'https://github.com/SimonBates3568/ecommerce-website.git'
    },
    { 
      id: 4, 
      title: 'Portfolio Website', 
      description: 'A personal portfolio website to showcase my projects and skills.', 
      detail_description: 'This project was aimed at creating a personal portfolio to showcase my work and skills. I used React for the frontend and styled-components for styling. The website is fully responsive and includes sections for my projects, skills, and contact information. I also implemented a blog section where I can share my thoughts and experiences. This project helped me improve my design and frontend development skills.', 
      image: '/images/my-portfolio-website.jpg', 
      image_1: '/images/portfolio_screenshot_1.png',
      image_2: '/images/portfolio_screenshot_2.png',
      demoLink: 'https://example.com/my-portfolio-website',
      code: 'https://github.com/SimonBates3568/portfolio-website.git'
    },
    // Add more projects as needed
  ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const openModal = (project) => {
      setSelectedProject(project);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      setSelectedProject(null);
    };
  
    return (
      <Box 
        p={5} 
        maxW="1200px" 
        mx="auto" 
        backgroundImage="url('/public/images/background_image.jpg')" 
        backgroundSize="cover" 
        backgroundPosition="center"
      >
        <Heading textAlign="center">Explore My Projects</Heading>
        <Image src="/public/images/create-a-doodle-of-my-name-simon-bates-for-my-web- (2).jpg" alt="Simon Bates" borderRadius="full" width={100} height={100}/>
        <Text mt={2} textAlign="center">
          Welcome to my portfolio! Here are some of the projects I've worked on:
        </Text>
        
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} mt={4}>
          {projects.map(project => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <Tilt options={{ max: 25, scale: 1.05 }}>
            <Card>
              <Image src={project.image} alt={project.title} />
              <CardBody>
                <Text mt={2} fontWeight="bold">{project.title}</Text>
                <Text mt={2}>{project.description}</Text>
                <Button mt={2} mr={2} as="a" href={project.code} target="_blank" rel="noopener noreferrer">View Code</Button>
                <Button mt={2} mr={2} as="a" href={project.demoLink} target="_blank" rel="noopener noreferrer">View Live</Button>
                <Button mt={2} onClick={() => openModal(project)}>More Details</Button>
              </CardBody>
            </Card>
            </Tilt>
          </motion.div>
          ))}
        </Grid>
        {selectedProject && (
          <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Image src={selectedProject.image} alt={selectedProject.title} />
            {selectedProject.image_1 && <Image src={selectedProject.image_1} alt={`${selectedProject.title} screenshot 1`} mt={4} />}
            {selectedProject.image_2 && <Image src={selectedProject.image_2} alt={`${selectedProject.title} screenshot 2`} mt={4} />}
            <Text mt={4}>{selectedProject.detail_description}</Text>
            <Button mt={2} mr={2} as="a" href={selectedProject.code} target="_blank" rel="noopener noreferrer">View Code</Button>
            <Button mt={2} mr={2} as="a" href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">View Live</Button>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
          </Modal>
        )}
      </Box>
    
    );
};

export default PortfolioPage;
