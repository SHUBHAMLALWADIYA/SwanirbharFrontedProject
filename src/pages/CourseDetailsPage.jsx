import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const CourseDetailsPage = () => {
    const { id } = useParams(); // Get the course ID from URL parameters
    const [course, setCourse] = useState(null); // State to store the course details

    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem('courses'));
        let [selectedCourse] = storedCourses.filter(course => course.id == id);
        console.log(storedCourses,id)
        console.log(selectedCourse)
        if (!selectedCourse) {
            // Handle case when course data is not found
            console.error(`Course with ID ${id} not found`);
            return;
        }

        setCourse(selectedCourse);
    }, [id]);

    if (!course) {
        // Handle case when course data is still loading or not found
        return <div>Loading...</div>; // Or display an error message
    }

    return (
        <Box textAlign="center" mt="8">
            <Heading as="h1" fontSize="3xl" mb="8">{course.title}</Heading>
            <Box borderWidth="1px" borderRadius="lg" boxShadow="lg" overflow="auto">
                <Table variant="simple" size="md">
                    <Thead>
                        <Tr>
                            <Th>Description</Th>
                            <Td>{course.description}</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Th>Instructor</Th>
                            <Td>{course.instructor}</Td>
                        </Tr>
                        <Tr>
                            <Th>Email</Th>
                            <Td>{course.instructorEmail}</Td>
                        </Tr>
                        <Tr>
                            <Th>Lessons</Th>
                            <Td>
                                <Table size="sm" variant="striped">
                                    <Thead>
                                        <Tr>
                                            <Th>Title</Th>
                                            <Th>Description</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {course.lessons?.map((lesson, index) => (
                                            <Tr key={index}>
                                                <Td>{lesson.title}</Td>
                                                <Td>{lesson.description}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box mt="8">
                <Button colorScheme="teal" size="lg">Enroll Now</Button>
            </Box>
        </Box>
    );
};

export default CourseDetailsPage;
