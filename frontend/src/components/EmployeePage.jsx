import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Flex, Image, Text, Button, Spinner } from '@chakra-ui/react';
import { FaHome, FaUserEdit } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';

const EmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`/api/users/personal/${id}`);
        if (!response.ok) throw new Error('Failed to fetch employee details');
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployee();
  }, [id]);

  if (!employee) return <Spinner size="xl" color="teal.500" margin="20px" />;

  const isUserNeethu = user.firstName === 'Neethu' && user.lastName === 'Doe';

  return (
    <Box maxWidth="800px" margin="0 auto" padding="20px" fontFamily="Arial, sans-serif">
      <Flex justifyContent="space-between" alignItems="center" borderBottom="2px solid #ddd" pb="10px">
        <Flex alignItems="center" gap="10px">
          <Image src={employee.profilePic} alt="Profile" boxSize="80px" borderRadius="full" objectFit="cover" />
          <Text fontSize="2xl" fontWeight="bold">{`${employee.firstName} ${employee.lastName}`}</Text>
        </Flex>

        <Flex alignItems="center" gap={isUserNeethu ? "5px" : "20px"}>
          {isUserNeethu && (
            <Button variant="ghost" fontSize="24px" onClick={() => navigate(`/edit/${id}`)}>
              <FaUserEdit />
            </Button>
          )}
          <Button variant="ghost" fontSize="24px" onClick={() => navigate('/')}>
            <FaHome />
          </Button>
        </Flex>
      </Flex>

      <Box mt="20px">
        <Flex wrap="wrap" gap="10px">
          <DetailItem label="Date of Birth" value={employee.dob} />
          <DetailItem label="Gender" value={employee.gender} />
          <DetailItem label="Email" value={employee.email} />
          <DetailItem label="Phone Number" value={employee.phoneNumber} />
          <DetailItem label="Address" value={employee.address} />
          <DetailItem label="Role" value={employee.role} />
          <DetailItem label="Department" value={employee.department} />
          <DetailItem label="Start Date" value={employee.startDate} />
          <DetailItem label="Salary" value={employee.salary} />
          <DetailItem label="Benefits" value={employee.benefits} />
          <DetailItem label="Education" value={employee.education} />
        </Flex>
      </Box>

      <Button
        mt="20px"
        colorScheme="teal"
        width="full"
        onClick={() => navigate(`/performance/${id}`)}
      >
        View Performance
      </Button>
    </Box>
  );
};

const DetailItem = ({ label, value }) => (
  <Box
    flex="1"
    minWidth="45%"
    bg="#f9f9f9"
    p="10px"
    borderRadius="8px"
    boxShadow="0 1px 4px rgba(0, 0, 0, 0.1)"
  >
    <Text fontWeight="bold" color="black">{label}:</Text>
    <Text color="black">{value}</Text>
  </Box>
);

export default EmployeePage;
