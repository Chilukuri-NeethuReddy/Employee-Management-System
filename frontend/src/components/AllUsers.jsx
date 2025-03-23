import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Spinner,
  VStack,
  Alert,
  AlertIcon,
  List,
  ListItem,
  Avatar,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { FaHome, FaTrash } from 'react-icons/fa'; // Import the home and trash icons
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/users/all');
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Function to handle deletion of an employee
  const handleDelete = async (employeeId) => {
    try {
      const response = await fetch(`/api/users/delete/${employeeId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete employee');
      }

      // Remove the deleted employee from the state
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== employeeId)
      );

      toast({
        title: "Employee deleted",
        description: "Employee has been successfully deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to delete employee:', error);
      toast({
        title: "Error",
        description: "Failed to delete employee",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" py={10} >
        <Spinner size="xl" />
        <Text mt={4} fontWeight="bold">Loading...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error" mb={4}>
        <AlertIcon />
        {error}
      </Alert>
    );
  }

  return (
    <Container maxW="lg" mt={5}>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h2" size="lg">
          All Employees
        </Heading>
        <IconButton
          icon={<FaHome />}
          aria-label="Go to Home"
          variant="outline"
          onClick={() => navigate('/')}
        />
      </Flex>
      <List spacing={4}>
        {employees.length > 0 ? (
          employees.map((employee) => (
            <ListItem
              key={employee._id}
              p={4}
              border="2px solid"
              borderColor="gray.200"
              borderRadius="md"
              _hover={{ boxShadow: "md", borderColor: "gray.400", cursor: "pointer" }}
            >
              <Flex alignItems="center" justify="space-between">
                <Flex alignItems="center" onClick={() => navigate(`/personal/${employee._id}`)}>
                  <Avatar size="md" src={employee.profilePic} name={`${employee.firstName} ${employee.lastName}`} mr={4} />
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">
                      {employee.firstName} {employee.lastName}
                    </Text>
                    <Text fontSize="md" color="gray.600">Role: <strong>{employee.role}</strong></Text>
                    <Text fontSize="md" color="gray.600">Rating: <strong>{employee.finalPerformanceRating}</strong></Text>
                  </Box>
                </Flex>
                <IconButton
                  icon={<FaTrash />}
                  aria-label="Delete Employee"
                  colorScheme="red"
                  onClick={() => handleDelete(employee._id)}
                />
              </Flex>
            </ListItem>
          ))
        ) : (
          <Text>No employees found</Text>
        )}
      </List>
    </Container>
  );
};

export default AllUsers;
