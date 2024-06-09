import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const CourseDetails = ({ course }) => {
  return (
    <Box p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" maxW="md" mx="auto" mt={10}>
      <Heading as="h2" size="xl" mb="4">{course.title}</Heading>
      <Stack spacing={4}>
        <Text fontSize="lg" mb="2"><strong>Description:</strong> {course.description}</Text>
        <Text fontSize="lg" mb="2"><strong>Duration:</strong> {course.duration}</Text>
        <Text fontSize="lg" mb="2"><strong>Issue Date:</strong> {course.issueDate}</Text>
      </Stack>
    </Box>
  );
};

export default CourseDetails;
