'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  IconButton
} from '@chakra-ui/react'
import { useState } from 'react'
import { ArrowBackIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import userAtom from '../atoms/userAtom'
import { useNavigate } from 'react-router-dom'

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  // const showToast = useShowToast();
  const setUser = useSetRecoilState(userAtom);
  const showToast = useToast();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    address: "",
    role: "",
    department: "",
    startDate: "",
    salary: "",
    benefits: "",
    education: "",
    skills: "",
    projectsDone: "",
    projectsOnHold: "",
    achievements: "",
    feedback: "",
    goalsAndObjectives: "",
    satisfactionScore: "",
    attendance: "",
    creativityLevel: "",
    finalPerformanceRating: "",
    profilePic: ""
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      if (data.error) {
        toast("Error", data.error, "error");
        return;
      }

      // localStorage.setItem("mstproject", JSON.stringify(data));
      toast({
        title: "Signed Up Successfully",
        description: "You have successfully registered a new employee.",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      setUser(data);
      navigate('/');
      setInputs({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        phoneNumber: "",
        address: "",
        role: "",
        department: "",
        startDate: "",
        salary: "",
        benefits: "",
        education: "",
        skills: "",
        projectsDone: "",
        projectsOnHold: "",
        achievements: "",
        feedback: "",
        goalsAndObjectives: "",
        satisfactionScore: "",
        attendance: "",
        creativityLevel: "",
        finalPerformanceRating: "",
        profilePic: ""
      })
    } catch (error) {
      toast("Error", error.message || "An error occurred", "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <IconButton
            icon={<ArrowBackIcon />}
            aria-label="Home"
            onClick={() => navigate('/')}
            variant="ghost"
          />
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register a employee
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.dark")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type='text'
                    name='firstName'
                    onChange={handleChange}
                    value={inputs.firstName}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type='text'
                    name='lastName'
                    onChange={handleChange}
                    value={inputs.lastName}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input
                    type='text'
                    name='dob'
                    onChange={handleChange}
                    value={inputs.dob}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Input
                    type='text'
                    name='gender'
                    onChange={handleChange}
                    value={inputs.gender}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                name='email'
                onChange={handleChange}
                value={inputs.email}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Add a Profile Pic URL </FormLabel>
              <Input
                type='text'
                name='profilePic'
                onChange={handleChange}
                value={inputs.profilePic}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type='text'
                name='phoneNumber'
                onChange={handleChange}
                value={inputs.phoneNumber}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type='text'
                name='address'
                onChange={handleChange}
                value={inputs.address}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Role</FormLabel>
                  <Input
                    type='text'
                    name='role'
                    onChange={handleChange}
                    value={inputs.role}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Department</FormLabel>
                  <Input
                    type='text'
                    name='department'
                    onChange={handleChange}
                    value={inputs.department}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type='text'
                    name='startDate'
                    onChange={handleChange}
                    value={inputs.startDate}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Salary</FormLabel>
                  <Input
                    type='text'
                    name='salary'
                    onChange={handleChange}
                    value={inputs.salary}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
              <FormLabel>Benefits</FormLabel>
              <Input
                type='text'
                name='benefits'
                onChange={handleChange}
                value={inputs.benefits}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Education</FormLabel>
              <Input
                type='text'
                name='education'
                onChange={handleChange}
                value={inputs.education}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Skills</FormLabel>
              <Input
                type='text'
                name='skills'
                onChange={handleChange}
                value={inputs.skills}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl>
                  <FormLabel>Projects Done</FormLabel>
                  <Input
                    type='text'
                    name='projectsDone'
                    onChange={handleChange}
                    value={inputs.projectsDone}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Projects On Hold</FormLabel>
                  <Input
                    type='text'
                    name='projectsOnHold'
                    onChange={handleChange}
                    value={inputs.projectsOnHold}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
              <FormLabel>Achievements</FormLabel>
              <Input
                type='text'
                name='achievements'
                onChange={handleChange}
                value={inputs.achievements}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Feedback</FormLabel>
              <Input
                type='text'
                name='feedback'
                onChange={handleChange}
                value={inputs.feedback}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Goals and Objectives</FormLabel>
              <Input
                type='text'
                name='goalsAndObjectives'
                onChange={handleChange}
                value={inputs.goalsAndObjectives}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl>
                  <FormLabel>Satisfaction Score</FormLabel>
                  <Input
                    type='text'
                    name='satisfactionScore'
                    onChange={handleChange}
                    value={inputs.satisfactionScore}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Attendance</FormLabel>
                  <Input
                    type='text'
                    name='attendance'
                    onChange={handleChange}
                    value={inputs.attendance}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl>
                  <FormLabel>Creativity Level</FormLabel>
                  <Input
                    type='text'
                    name='creativityLevel'
                    onChange={handleChange}
                    value={inputs.creativityLevel}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Final Performance Rating</FormLabel>
                  <Input
                    type='text'
                    name='finalPerformanceRating'
                    onChange={handleChange}
                    value={inputs.finalPerformanceRating}
                  />
                </FormControl>
              </Box>

            </HStack>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={useColorModeValue("gray.600", "gray.700")}
                color={"white"}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.800"),
                }}
                onClick={handleSignup}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              {/* <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"} onClick={() => setAuthScreen("login")}>
                  Login
                </Link>
              </Text> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
