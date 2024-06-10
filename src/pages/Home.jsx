import React from "react";
import { Box, Heading, Text, Button, Link } from "@chakra-ui/react";


const Home = () => {
  return (

      <Box textAlign="center">
        <Heading as="h1" fontSize="3xl" mt="8">
          Welcome to the LMS Dashboard!
        </Heading>
        <Text fontSize="lg" mt="4">
          This is the home page of our Learning Management System. Explore
          courses, track your progress, and manage your profile.
        </Text>
        <Box mt="8">
          <Link href="/courses" mr="4" color="blue.500" fontWeight="bold">
            Browse Courses
          </Link>
          <Link href="/profile" color="blue.500" fontWeight="bold">
            Manage Profile
          </Link>
        </Box>
        <Box mt="12">
          <Text fontSize="xl" fontWeight="bold">
            Name : Shubham Lalwadiya
          </Text>
          <Text fontSize="lg" mt="4">
            Batch : Cap05_155 
          </Text>
          <Text fontSize="lg">
            
          </Text>
          <Text fontSize="lg">
            Vestibulum rutrum nisl eu orci sodales, in lobortis tortor pulvinar.
          </Text>
        </Box>
        <Box mt="12">
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>
      </Box>
    
  );
};

export default Home;
