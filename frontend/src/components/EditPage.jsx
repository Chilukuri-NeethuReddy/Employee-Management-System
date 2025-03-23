import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa"; // Updated icon import

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    role: '',
    department: '',
    startDate: '',
    salary: '',
    benefits: '',
    education: '',
    skills: '',
    projectsDone: '',
    projectsOnHold: '',
    achievements: '',
    feedback: '',
    goalsAndObjectives: '',
    satisfactionScore: '',
    attendance: '',
    creativityLevel: '',
    finalPerformanceRating: '',
    profilePic: '',
  });

  const [loading, setLoading] = useState(true);

  // Fetch employee data by ID on mount
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`/api/users/get/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          toast({
            title: "Error",
            description: "Failed to fetch employee data",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error('Error fetching employee data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployeeData();
  }, [id, toast]);

  // Update formData as user modifies the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit updated data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Employee updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate('/all'); // Redirect to AllUsers page
      } else {
        const errorData = await response.json();
        console.error('Error updating employee:', errorData.message);
        toast({
          title: "Error",
          description: "Failed to update employee",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (loading) {
    return <Spinner size="xl" color="teal.500" margin="20px" />;
  }

  return (
    <Box maxWidth="800px" margin="0 auto" padding="20px" fontFamily="Arial, sans-serif">
      <Flex justifyContent="space-between" alignItems="center" borderBottom="2px solid #ddd" pb="10px">
        <Heading fontSize="2xl">Edit Employee Information</Heading>
        <Button variant="ghost" onClick={() => navigate('/all')}>
          <FaEye /> {/* Updated icon */}
        </Button>
      </Flex>

      <Box
        rounded={"lg"}
        bg="orange.200"
        boxShadow={"lg"}
        p={8}
        mt={4}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <HStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  bg="blue.100"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  bg="blue.100"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <FormControl isRequired>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                bg="blue.100"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                bg="blue.100"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                bg="blue.100"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>

            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input
                  type="text"
                  bg="blue.100"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Department</FormLabel>
                <Input
                  type="text"
                  bg="blue.100"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                bg="blue.100"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Salary</FormLabel>
              <Input
                type="number"
                bg="blue.100"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Benefits</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Education</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Skills</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Projects Done</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="projectsDone"
                value={formData.projectsDone}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Projects On Hold</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="projectsOnHold"
                value={formData.projectsOnHold}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Achievements</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Feedback</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Goals and Objectives</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="goalsAndObjectives"
                value={formData.goalsAndObjectives}
                onChange={handleChange}
              />
            </FormControl>

            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Satisfaction Score</FormLabel>
                <Input
                  type="number"
                  bg="blue.100"
                  name="satisfactionScore"
                  value={formData.satisfactionScore}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Attendance</FormLabel>
                <Input
                  type="text"
                  bg="blue.100"
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <FormControl>
              <FormLabel>Creativity Level</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="creativityLevel"
                value={formData.creativityLevel}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Final Performance Rating</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="finalPerformanceRating"
                value={formData.finalPerformanceRating}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Profile Picture</FormLabel>
              <Input
                type="text"
                bg="blue.100"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleChange}
              />
            </FormControl>

            <Stack spacing={10}>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Save Changes
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default EditPage;
