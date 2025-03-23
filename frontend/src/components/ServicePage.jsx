import React from 'react';
import { Box, Heading, Text, VStack, IconButton, Tooltip, Flex, Image } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const ServicePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const serviceName = location.state?.serviceName;
  const serviceDescription = location.state?.description;

  // Redirect to home if service name is not found
  if (!serviceName) {
    navigate('/');
    return null;
  }

  // Detailed descriptions for services with images
  const detailedDescription = {
    "Training and Development": (
      <>
        <Image src="https://cdn.prod.website-files.com/5e31fbf4c0ead7ec869ea95b/5eb962fcd4d8e9a8ec707f83_training-development.png" alt="Training and Development" mb={4} borderRadius="md" />
        Our Training and Development program is committed to fostering a culture of continuous learning within your organization. We recognize that your workforce is your greatest asset, and investing in their growth is crucial for both individual and organizational success.
        <br /><br />
        Customized Learning Solutions: We offer a variety of training solutions tailored to meet the specific needs of your employees and your organization. Our programs cover a wide range of topics, including leadership development, technical skills enhancement, compliance training, and soft skills improvement. We work closely with your team to identify skill gaps and create customized training plans that align with your strategic objectives.
        <br /><br />
        Diverse Learning Formats: To cater to different learning preferences, our training can be delivered in various formats, including in-person workshops, virtual instructor-led sessions, e-learning modules, and blended learning approaches. This flexibility allows employees to learn at their own pace and ensures that the training is accessible to everyone, regardless of location.
        <br /><br />
        Engaging Training Experiences: Our training programs are designed to be interactive and engaging, using modern methodologies that enhance knowledge retention. We incorporate real-world scenarios, case studies, and practical exercises to ensure that participants can apply what they learn in their day-to-day roles. Additionally, we leverage technology to create immersive learning experiences, such as simulations and gamification.
        <br /><br />
        Ongoing Support and Evaluation: We believe that training does not end with the completion of a course. Our program includes follow-up support to reinforce learning and ensure that employees can effectively implement new skills in the workplace. We also provide tools for measuring training effectiveness, including feedback surveys, assessments, and performance metrics, allowing organizations to track progress and make informed decisions about future training needs.
        <br /><br />
        Empowering Employees: By prioritizing training and development, you empower your employees to take ownership of their professional growth. Our programs not only enhance individual capabilities but also boost team morale and engagement, leading to improved productivity and job satisfaction.
        <br /><br />
        In today’s fast-paced business environment, continuous learning is vital for maintaining a competitive edge. Let us help you build a skilled, motivated workforce that is ready to tackle the challenges of tomorrow.
      </>
    ),
    "Performance Management": (
      <>
        <Image src="https://www.mssbizsolutions.com/wp-content/uploads/2023/12/Performance-Management-System-Training-in-the-Philippines.webp" alt="Performance Management" mb={4} borderRadius="md" />
       

Our Performance Management service is dedicated to fostering a high-performance culture within your organization. We understand that your team’s productivity and engagement drive success, and our performance management tools and practices are designed to help you recognize and nurture talent effectively.

<br /><br />

Goal Setting and Alignment: Our service allows managers and employees to collaboratively set clear, measurable goals aligned with the company's strategic vision. By defining achievable objectives, we ensure employees understand their role in contributing to organizational success. This structured goal alignment fosters accountability and provides a roadmap for success.

<br /><br />

Continuous Feedback and Coaching: Regular feedback is essential for growth. We provide platforms that allow managers to give real-time feedback, acknowledge achievements, and offer constructive insights. This continuous loop supports employee development, enhances engagement, and reinforces a positive performance culture. With a focus on coaching, we ensure that employees feel guided in their professional journey.

<br /><br />

Structured Performance Reviews: Our service includes periodic, data-driven performance evaluations that assess employees on essential competencies, such as problem-solving, communication, collaboration, and adaptability. These structured reviews provide a comprehensive view of each team member’s contributions, helping managers make informed decisions about promotions, role changes, or skill development.

<br /><br />

Individual Development Plans (IDPs): To support career progression, we create personalized development plans tailored to each employee’s strengths and growth areas. IDPs identify skill gaps and provide targeted learning opportunities, such as training sessions, mentorship, and project involvement. This strategic approach to development promotes both individual and organizational advancement.

<br /><br />

Recognition and Rewards: Recognizing and celebrating achievements is vital for morale. Our service includes a reward system that celebrates top performers, enhancing motivation and fostering a culture of appreciation. From monetary rewards to public acknowledgment, we help you reinforce positive performance and inspire continued excellence.

<br /><br />

Data-Driven Insights: Utilizing advanced analytics, our performance management service offers valuable insights into employee performance trends and areas for improvement. By assessing productivity metrics, feedback ratings, and goal completion rates, managers can make strategic decisions to optimize team dynamics and resource allocation.

<br /><br />

Compliance and Documentation: We prioritize accurate documentation of all performance-related activities, from goal setting and feedback sessions to formal evaluations. This ensures compliance with HR policies, provides records for reviews, and upholds transparency in employee development.

<br /><br />

By implementing our Performance Management service, you empower your workforce to reach new levels of success. Our approach not only drives productivity but also enhances employee satisfaction, fostering a resilient and motivated team ready to meet tomorrow's challenges.
      </>
    ),
    "Workforce Planning": (
      <>
        <Image src="https://blog.darwinbox.com/hubfs/How%20Strategic%20Workforce%20Planning%20Can%20Reduce%20Attrition%20in%20the%20Manufacturing%20Sector%20%281%29.jpg" alt="Workforce Planning" mb={4} borderRadius="md" />
       

Our Workforce Planning service is designed to help your organization strategically align your talent needs with your business goals. In a rapidly changing business landscape, effective workforce planning is essential for ensuring that you have the right people in the right roles, both now and in the future.

<br /><br />

Strategic Talent Forecasting: We start with a thorough analysis of your organization’s goals and anticipated workforce requirements. By forecasting future talent needs based on growth projections, industry trends, and internal data, we help you proactively plan for the skills and roles essential to your success.

<br /><br />

Gap Analysis: Understanding current workforce capabilities versus future needs is key to effective planning. Our service includes a comprehensive assessment of your team’s skills, identifying strengths, gaps, and opportunities. This data-driven approach allows us to pinpoint areas where additional training, recruitment, or restructuring may be required.

<br /><br />

Succession Planning: Preparing for leadership transitions and key role changes is crucial for organizational resilience. Our workforce planning service includes a robust succession strategy that identifies potential future leaders within your organization and outlines developmental pathways to prepare them for advanced responsibilities, ensuring continuity in critical roles.

<br /><br />

Talent Acquisition Strategy: Our workforce planning service also covers targeted recruitment planning, ensuring that your hiring strategy aligns with projected workforce needs. From attracting top talent to developing an inclusive recruitment process, we help you build a pipeline of qualified candidates ready to join and contribute to your team.

<br /><br />

Flexible Workforce Solutions: To adapt to fluctuating market demands, we offer flexible workforce solutions that support both permanent and temporary staffing needs. Whether you require project-based consultants, part-time support, or remote talent, we assist in structuring a workforce that aligns with operational requirements and cost considerations.

<br /><br />

Retention and Engagement Planning: Retaining talent is as important as acquiring it. Our workforce planning approach includes strategies for employee engagement, career growth opportunities, and recognition programs, ensuring your organization remains a competitive and attractive employer in the market.

<br /><br />

Data-Driven Workforce Insights: Leveraging workforce analytics, we provide insights into workforce demographics, turnover rates, and productivity metrics. These data points empower you to make informed decisions, optimize staffing levels, and respond swiftly to shifts in market demands or organizational priorities.

<br /><br />

Compliance and Risk Management: Our workforce planning service ensures that all strategies comply with relevant labor laws and industry standards. We work with you to address potential workforce risks, such as skill shortages or compliance challenges, and develop proactive solutions to mitigate them.

<br /><br />

By investing in strategic Workforce Planning, your organization can proactively address talent needs, reduce hiring costs, and enhance employee satisfaction. Our approach ensures that you have a flexible, resilient workforce ready to support long-term growth and adapt to industry changes.
      </>
    )
  };

  return (
    <Box p={6}>
      {/* Navigation Bar */}
      <Flex justify="space-between" align="center" bg="black" p={4} borderRadius="md" mb={4}>
        <Heading size="lg" color="white">Our Services</Heading>
        <Tooltip label="Back to Home" aria-label="Back to Home Tooltip">
          <IconButton
            icon={<FaHome />}
            onClick={() => navigate('/')}
            colorScheme="orange"
            color="orange.300"
            variant="outline"
            aria-label="Go back to home"
          />
        </Tooltip>
      </Flex>

      {/* Service Details */}
      <Flex direction="column" align="center" mb={6}>
        <Box mt={4}>
          <Heading size="md" color="orange.500" fontSize="2xl" 
          textAlign="center">{serviceName}</Heading>
        </Box>
      </Flex>

      {/* Centered Service Description and Detailed Description Box */}
      <Flex justify="center" align="start">
        <VStack spacing={8} width="100%" align="center">
          <Box>
            <Text mt={2} textAlign="center" fontWeight="bold">{serviceDescription}</Text> {/* Center service description text */}
          </Box>

          {/* Detailed Description Box */}
          <Flex justify="center" width="100%">
            <Box 
              border="1px" 
              borderColor="orange.200" 
              borderRadius="md" 
              p={4} 
              bg="orange.50" 
              maxWidth="1200px" // Set a maximum width for the detailed description box
              height="auto" // Automatically adjust height based on content
              textAlign="left" // Ensure text is aligned to the left within the box
            >
              <Text mt={2} fontStyle="-moz-initial" fontWeight="semibold">{detailedDescription[serviceName]}</Text>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ServicePage;
