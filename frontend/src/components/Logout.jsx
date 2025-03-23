import { Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'
// import userAtom from '../../atoms/userAtom'
// import useShowToast from '../hooks/useShowToast'
import { HiOutlineLogout } from "react-icons/hi";
// import { useNavigate } from 'react-router-dom'
import userAtom from '../atoms/userAtom';

const Logout = () => {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useToast();
  // const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json();
      //console.log(data);

      if (data.error) {
        showToast({
          title: "Error",
          description: data.error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
          variant: "solid",
          bgColor: "red.500",
          color: "white"
        });
      }

      localStorage.removeItem('mstproject');
      setUser(null);
      showToast({
        title: "Logged Out",
        description: "You have successfully logged out.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        variant: "solid",
        bgColor: "green.500",
        color: "white"
      })
      navigate('/');
    } catch (err) {
      showToast("Error", err, "error");
      // Show an error message or take appropriate action here.
    }
  }
  return (
    <>
      <Button
        // top={"30px"}
        h={10}
        ml={5}
        right={"30px"}
        size={"sm"}
        onClick={handleLogOut}
        leftIcon={
          <HiOutlineLogout size={20} />}
        border={"1px"}
        borderColor={"orange.200"}
        bg={"transparent"}
        color={"orange.200"}
        _hover={{
          bg: 'orange.300',
          color: 'black'
        }}
      >
        Logout
      </Button>
    </>
  )
}

export default Logout
