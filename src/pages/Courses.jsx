import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import CourseCard from '../components/Course/CourseCard';

const Courses = ({ courses }) => {
   
    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
            {courses?.map(course => (
                <Box key={course.id}>
                    <CourseCard course={course} />
                </Box>
            ))}
        </SimpleGrid>
    );
};

export default Courses;
