import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useColorModeValue, Heading, Text, VStack, HStack, Icon, Image } from '@chakra-ui/react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import Confetti from 'react-confetti';
import Tilt from 'react-parallax-tilt'; // Import Tilt

const ContactForm = ({ onFormSubmit = () => {} }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const bg = useColorModeValue('gray.50', 'gray.800');
  const sectionBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setShowConfetti(false);
    onFormSubmit();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('All fields are required.');
      return;
    }
    try {
      const response = await fetch('https://formspree.io/f/xyzknykb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setSuccess('Your message has been sent successfully.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    } catch (error) {
      setError('There was a problem submitting your form.');
    }
  };

  return (
    <Box
      p={[2, 3, 4]}
      bg={bg}
      color={textColor}
      maxW="900px" // Increased the max width
      mx="auto"
      backgroundImage="url('/images/background_image.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      {showConfetti && <Confetti />}
      <Box bg={sectionBg} p={4} borderRadius="md" mb={8} boxShadow="md">
        <Heading as="h1" size="lg" mb={3} textAlign="center">Contact me</Heading>
        <Image src="/images/create-a-doodle-of-my-name-simon-bates-for-my-web- (2).jpg" alt="Simon Bates" borderRadius="full" width={75} height={75} mx="auto" mb={4}/>
        <Text mb={4} textAlign="center">I would love to hear from you! Please fill out the form below to get in touch.</Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={3}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" mb={3}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="phone" mb={3}>
            <FormLabel>Phone</FormLabel>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" mb={3}>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} />
          </FormControl>
          {error && <Box color="red.500" mb={3}>{error}</Box>}
          {success && <Box color="green.500" mb={3}>{success}</Box>}
          <Box textAlign="center">
            <Button type="submit" colorScheme="blue" width="auto" px={8}>Submit</Button>
          </Box>
        </form>
      </Box>

     
        <Box bg={sectionBg} p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="md" mb={3}>Contact Information</Heading>
          <VStack spacing={3} align="start">
            <QRCode value="https://github.com/SimonBates3568" size={64} />
            <HStack>
              <Icon as={FaEnvelope} w={4} h={4} />
              <Text fontSize="sm">simonbates52@gmail.com</Text>
            </HStack>
            <HStack>
              <Icon as={FaPhone} w={4} h={4} />
              <Text fontSize="sm">+31628855680</Text>
              <WhatsAppButton w={4} h={4} colorScheme="green"/>
            </HStack>
          </VStack>
        </Box>
      
    </Box>
  );
};

export default ContactForm;
