// CourseCard.jsx
import React, { useContext } from 'react';
import { Box, Heading, Text, Flex, Divider, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LoginlogoutContext } from '../../context/LoginlogoutContext';

const CourseCard = ({ course }) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userRole = userData ? userData.role : null;

    const getDurationDisplay = (duration) => {
        const years = Math.floor(duration / 365);
        const months = Math.floor((duration % 365) / 30);
        const days = duration % 30;
        
        let durationDisplay = '';
        if (years > 0) {
            durationDisplay += `${years} year${years > 1 ? 's' : ''} `;
        }
        if (months > 0) {
            durationDisplay += `${months} month${months > 1 ? 's' : ''} `;
        }
        if (days > 0) {
            durationDisplay += `${days} day${days > 1 ? 's' : ''}`;
        }
        
        return durationDisplay.trim();
    };

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" boxShadow="md" _hover={{ boxShadow: "lg" }}>
            <VStack align="start" spacing="2">
                <Heading as="h2" size="md">{course.title}</Heading>
                <Divider />
                <Text fontSize="sm" color="gray.600">{course.description}</Text>
                <Flex justify="space-between" w="full">
                    <Box>
                        <Text fontSize="sm">Duration:</Text>
                        <Text fontSize="sm" fontWeight="bold">{getDurationDisplay(course.duration)}</Text>
                    </Box>
                    <Box>
                        <Text fontSize="sm">Issue Date:</Text>
                        <Text fontSize="sm" fontWeight="bold">{course.issueDate}</Text>
                    </Box>
                </Flex>
                <Flex justify="space-between" w="full">
                    <Text fontSize="sm">Number of Lessons:</Text>
                    <Text fontSize="sm" fontWeight="bold">{course.numLessons}</Text>
                </Flex>
                <Divider />
                <Flex justify="flex-end" w="full">
                    {/* Render delete button only if user is an admin */}
                    {userRole === 'admin' && (
                        <Button colorScheme="red" size="sm">Delete</Button>
                    )}
                    <Link to={`/courses/${course.id}`}>
                        <Button colorScheme="teal" size="sm">Start</Button>
                    </Link>
                </Flex>
            </VStack>
        </Box>
    );
};

export default CourseCard;
