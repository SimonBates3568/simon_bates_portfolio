import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useColorModeValue, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
    } catch (error) {
      setError('There was a problem submitting your form.');
    }
  };

  return (
    <Box p={[2, 3, 4]} bg={bg} color={textColor}>
      <Box bg={sectionBg} p={4} borderRadius="md" mb={8}>
        <Heading as="h1" size="lg" mb={3} textAlign="center">Contact me</Heading>
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
      <Heading as="h2" size="md" mb={3}>Contact Information</Heading>
     
      <VStack spacing={3} align="start">
        <QRCode value="https://github.com/SimonBates3568" size={128} />
        <HStack>
          <Icon as={FaEnvelope} w={5} h={5} />
          <Text>simonbates52@gmail.com</Text>
        
        </HStack>
        <HStack>
          <Icon as={FaPhone} w={5} h={5} />
          <Text>+31628855680</Text>
          <WhatsAppButton w={5} h={5} colorScheme="green"/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ContactForm;
