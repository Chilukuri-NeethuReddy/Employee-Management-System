import { Container, Table, Tbody, Tr, Th, Td, Image, Box, Heading, Spinner, IconButton, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import userAtom from '../atoms/userAtom';

const EmployeePerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [performance, setPerformance] = useState(null);
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const response = await fetch(`/api/users/performance/${id}`);
        if (!response.ok) throw new Error('Failed to fetch performance details');
        const data = await response.json();
        setPerformance(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPerformance();
  }, [id]);

  if (!performance) return <Spinner size="xl" color="orange.500" margin="20px" />;

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-around" mb="20px" mt={10}>
        <Heading as="h2" size="lg">Performance Analysis</Heading>
        <Box>
          {user.firstName === 'Neethu' && user.lastName === 'Doe' && (
            <Button variant="ghost" fontSize="24px" onClick={() => navigate(`/edit/${id}`)}><FaUserEdit /></Button>
          )}
          <IconButton
            icon={<ArrowBackIcon />}
            aria-label="Back to Personal"
            onClick={() => navigate(`/personal/${id}`)}
            mr="2"
            bg="whiteAlpha.300"
            _hover={{ bg: "whiteAlpha.500" }}
          />
          <IconButton
            icon={<FaHome />}
            aria-label="Home"
            onClick={() => navigate('/')}
            bg="whiteAlpha.300"
            _hover={{ bg: "whiteAlpha.500" }}
          />
        </Box>
      </Box>
      <Container maxWidth="1000px" bg="orange.400" color="white" padding="20px" borderRadius="8px">
        {/* Title and Navigation Icons Section */}


        {/* Performance Details Table */}
        <Table variant="unstyled" colorScheme="whiteAlpha">
          <Tbody>
            {/* Header Row with Profile Picture and Full Name */}
            <Tr>
              <Td width="30%">
                <Image
                  src={performance.profilePic}
                  alt="Profile"
                  boxSize="100px"
                  borderRadius="full"    //////////////////// {{{  for round image  }}} /////////////////////////////
                  objectFit="cover"
                  marginRight="15px"
                />
              </Td>
              <Td>
                <Heading as="h2" size="lg" color="black">{`${performance.firstName} ${performance.lastName}`}</Heading>
              </Td>
            </Tr>

            {/* Performance Details Rows */}
            <PerformanceRow label="Skills" value={performance.skills} />
            <PerformanceRow label="Projects Done" value={performance.projectsDone} />
            <PerformanceRow label="Projects on Hold" value={performance.projectsOnHold} />
            <PerformanceRow label="Achievements" value={performance.achievements} />
            <PerformanceRow label="Feedback" value={performance.feedback} />
            <PerformanceRow label="Goals and Objectives" value={performance.goalsAndObjectives} />
            <PerformanceRow label="Satisfaction Score" value={performance.satisfactionScore} />
            <PerformanceRow label="Attendance" value={performance.attendance} />
            <PerformanceRow label="Creativity Level" value={performance.creativityLevel} />
            <PerformanceRow label="Final Performance Rating" value={performance.finalPerformanceRating} />
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

// Row component with styling adjustments
const PerformanceRow = ({ label, value }) => (
  <Tr mb="10px">
    <Th
      textAlign="left"
      fontWeight="bold"
      fontSize="md"
      padding="10px"
      borderBottom="1px solid black"
      color="black"
      width="30%"  // Narrower width for label column
    >
      {label}
    </Th>
    <Td padding="10px" width="70%" color="black" fontWeight="bold"> {/* Wider width for content column */}
      {value}
    </Td>
  </Tr>
);

export default EmployeePerPage;
