'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useSetRecoilState } from 'recoil'
import authScreenAtom from '../atoms/authAtom'
import userAtom from '../atoms/userAtom'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const setAuthScreen = useSetRecoilState(authScreenAtom);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const showToast = useToast();
  const setUser = useSetRecoilState(userAtom);
  const handleLogin = async () => {
    setLoading(true);
    try {

      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) {
        showToast({
          title: "Error",
          description: data.error,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
      console.log(data);
      localStorage.setItem("mstproject", JSON.stringify(data));
      setUser(data);
      navigate('/');
      showToast({
        title: "Success",
        description: "Logged in successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
    } catch (err) {
      showToast({
        title: "Error",
        description: err.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false);
    }
  }
  return (
    <Flex
      align={'center'}
      justify={'center'}
      bgImage="url('https://cdn.pixabay.com/photo/2023/06/07/00/18/office-8045898_1280.png')" // Add the background image URL here
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100vw" // Ensures full width
      minHeight="100vh" // Ensures full height
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg="blue.100"
          boxShadow={'lg'}
          p={8}
          w={{
            base: "full",
            sm: "400px"
          }}
        >
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>UserName</FormLabel>
              <Input type="text" color="black" borderColor="black"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} color="black" borderColor="black"
                  value={inputs.password}
                  onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Logging in"
                size="lg"
                bg="blue.500"
                color={'white'}
                _hover={{
                  bg: useColorModeValue("gray.700", "gray.800"),
                }}
                onClick={handleLogin}
                isLoading={loading}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              {/* <Text align={'center'}>
                Dont have an account ? <Link color={'blue.400'}
                  onClick={() => setAuthScreen("signup")}
                >Signup</Link>
              </Text> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login;