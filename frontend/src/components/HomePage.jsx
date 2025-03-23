import React, { useState } from 'react';
import { LogOut, Eye, Menu, CheckCircle2 } from 'lucide-react';
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
  Text,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import Logout from './Logout';
import { FaUserPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

const services = [
  {
    name: 'Training and Development',
    description: 'Enhance skills and drive growth with customized training solutions.',
    image: 'https://uknowva.com/images/13297318_5192058.jpg',
  },
  {
    name: 'Performance Management',
    description: 'Optimize employee performance through targeted feedback and goal alignment.',
    image: 'https://www.primeum.com/hubfs/Evaluer%20la%20performance.png',
  },
  {
    name: 'Workforce Planning',
    description: 'Align workforce needs with business objectives through strategic talent forecasting.',
    image: 'https://media.licdn.com/dms/image/D4D12AQEiUSVh0hSx1g/article-cover_image-shrink_720_1280/0/1679677475898?e=2147483647&v=beta&t=zGWGV2lc8Nt55R8rU3ZH9mpUNdsoup5P2PvTYikSmcM',
  },
];

const NavButton = ({ children, icon: Icon, onClick }) => (
  <Button
    onClick={onClick}
    colorScheme="orange"
    variant="outline"
    borderRadius="md"
    leftIcon={<Icon className="w-5 h-5 text-gray-600" aria-hidden="true" />}
    _hover={{ bg: 'orange.200', color: 'white' }}
  >
    {children}
  </Button>
);

const ContactForm = ({ onSubmit, isSubmitting }) => {
  return (
    <Box bg="orange.50" borderRadius="lg" boxShadow="lg" p={6} color="orange.500">
      <Heading as="h2" size="lg" mb={4} color="orange.600">
        Contact Us
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="email" color="orange.700">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="you@example.com"
            borderColor="orange.300"
            focusBorderColor="orange.500"
          />
        </FormControl>
        <FormControl mb={4} isRequired>
          <FormLabel htmlFor="message" color="orange.700">Message</FormLabel>
          <Textarea
            id="message"
            rows="4"
            placeholder="Type your message here..."
            borderColor="orange.300"
            focusBorderColor="orange.500"
          />
        </FormControl>
        <Button
          type="submit"
          width="full"
          colorScheme="orange"
          variant="solid"
          mb={4}
          isLoading={isSubmitting}
          loadingText="Sending..."
          _hover={{ bg: 'orange.600', color: 'white' }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default function HomePage() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form fields
      event.target.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setFormSubmitted(false), 1000);
    }, 1000);
  };

  return (
    <Box minHeight="100vh" bg="gray.50">
      {formSubmitted && (
        <Box 
          position="fixed" 
          top={0} 
          left={0} 
          right={0} 
          bg="green.500" 
          color="white" 
          p={4} 
          textAlign="center" 
          zIndex={50}
        >
          <Container maxW="7xl">
            <Flex alignItems="center" justifyContent="center">
              <CheckCircle2 className="mr-2" size={24} />
              <Text fontWeight="semibold">Message sent successfully!</Text>
            </Flex>
          </Container>
        </Box>
      )}
      
      {/* Navigation */}
      <Box bg="black" color="white" shadow="md">
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3aPvCVNmhUUd_8C1qkDnKHokZnfo0JlUmw&s" alt="Company Logo" boxSize="42px" />
              <Text fontSize="xl" fontWeight="bold" color="white">
                {user?.firstName}
              </Text>
            </HStack>
            <HStack spacing={4} display={{ base: 'none', sm: 'flex' }}>
              {user?.firstName === "Neethu" && user?.lastName === 'Doe' && (
                <>
                  <Button
                    leftIcon={<FaUserPlus />}
                    border="1px solid"
                    borderColor="orange.200"
                    bg="transparent"
                    color="orange.200"
                    onClick={() => navigate('/register')}
                    _hover={{ bg: 'orange.300', color: 'black' }}
                  >Register</Button>

                  <Button
                    leftIcon={<FaEye />}
                    border="1px solid"
                    borderColor="orange.200"
                    bg="transparent"
                    color="orange.200"
                    onClick={() => navigate('/all')}
                    _hover={{ bg: 'orange.300', color: 'black' }}
                  >View</Button>
                </>
              )}

              {user.firstName !== 'Neethu' && user.lastName !== "Doe" && (
                <Button
                  leftIcon={<FaEye />}
                  border="1px solid"
                  borderColor="orange.200"
                  bg="transparent"
                  color="orange.200"
                  onClick={() => navigate(`/personal/${user._id}`)}
                  _hover={{ bg: 'orange.300', color: 'black' }}
                >View</Button>
              )}

              <Logout />
            </HStack>
            <Box display={{ base: 'flex', sm: 'none' }}>
              <Button
                variant="outline"
                colorScheme="orange.300"
                leftIcon={<Menu className="h-6 w-6" aria-hidden="true" />}
                _hover={{ bg: 'orange.300 !important', color: 'black !important' }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box as="main">
        <Container maxW="7xl" py={6}>
          {/* Hero section */}
          <Box p={4}>
            <Box
              p={4}
              border="4px"
              borderStyle="solid"
              borderColor="black"
              borderRadius="lg"
              h="96"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundImage="url('https://www.surveylegend.com/wordpress/wp-content/uploads/2021/02/happy-employees.png')"
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            >
              <VStack spacing={4} textAlign="center" bg="rgba(255, 255, 255, 0.8)" borderRadius="md" p={6}>
                <Heading size="xl" fontWeight="bold" color="orange.500">Welcome to HighRadius</Heading>
                <Text fontSize="xl" fontWeight="bold" color="orange.500">We're dedicated to providing exceptional services and solutions.</Text>
              </VStack>
            </Box>
          </Box>

          <Box mt={10} minHeight="400px">
            <Heading as="h2" size="lg" mb={4} color="orange.600">Our Services</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={15}>
              {services.map((service, index) => (
                <Box 
                  key={index} 
                  bg="white" 
                  boxShadow="lg" 
                  borderRadius="lg" 
                  overflow="hidden" 
                  _hover={{ bg: 'orange.50' }} 
                  minHeight="350px"
                >
                  <Box p={5} display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                    <HStack>
                      <Image src={service.image} alt={service.name} boxSize="250px" />
                      <VStack align="start">
                        <Text fontSize="sm" fontWeight="medium" color="orange.500" noOfLines={1}>
                          {service.name}
                        </Text>
                        <Text fontSize="lg" fontWeight="medium" color="gray.800">{service.description}</Text>
                      </VStack>
                    </HStack>
                    <Box bg="orange.100" p={3}>
                      <Button 
                        variant="link" 
                        colorScheme="orange" 
                        size="sm" 
                        onClick={() => navigate(`/services`, { state: { serviceName: service.name, description: service.description } })}
                      >
                        Learn more
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Contact Us Section */}
          <Box mt={10}>
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="black" color="orange.100" py={12}>
        <Container maxW="7xl">
          <Flex justify="center" align="center" flexDirection={{ base: 'column', md: 'row' }}>
            <HStack spacing={6}>
              {['Facebook', 'Twitter', 'GitHub'].map((item) => (
                <Button key={item} variant="link" colorScheme="orange" _hover={{ color: 'white' }}>
                  <Text fontSize="sm">{item}</Text>
                </Button>
              ))}
            </HStack>
            <Text mt={{ base: 4, md: 0 }} fontSize="sm">&copy; 2023 HighRadius, Inc. All rights reserved.</Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}