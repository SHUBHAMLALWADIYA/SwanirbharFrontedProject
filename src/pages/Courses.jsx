import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import CourseCard from '../components/Course/CourseCard';

const Courses = ({ courses }) => {
    useEffect(() => {
        // Dummy course data
        const dummyCourses = [
            {
                id: 1,
                title: 'Introduction to Programming',
                instructor: 'John Doe',
                description: 'Learn the basics of programming.',
                instructorEmail: 'john@example.com',
                lessons: [
                    { title: 'Lesson 1', description: 'Introduction to programming languages.' },
                    { title: 'Lesson 2', description: 'Variables and data types.' },
                ],
            },
            {
                id: 2,
                title: 'Web Development Fundamentals',
                instructor: 'Jane Smith',
                description: 'Explore the fundamentals of web development.',
                instructorEmail: 'jane@example.com',
                lessons: [
                    { title: 'Lesson 1', description: 'HTML basics.' },
                    { title: 'Lesson 2', description: 'CSS basics.' },
                    { title: 'Lesson 3', description: 'Introduction to JavaScript.' },
                ],
            },
            {
                id: 3,
                title: 'Data Science Essentials',
                instructor: 'Alice Johnson',
                description: 'Learn essential concepts and techniques in data science.',
                instructorEmail: 'alice@example.com',
                lessons: [
                    { title: 'Lesson 1', description: 'Introduction to data science.' },
                    { title: 'Lesson 2', description: 'Data preprocessing and cleaning.' },
                    { title: 'Lesson 3', description: 'Exploratory data analysis.' },
                ],
            },
            {
                id: 4,
                title: 'Machine Learning Basics',
                instructor: 'Bob Williams',
                description: 'Get started with machine learning algorithms and techniques.',
                instructorEmail: 'bob@example.com',
                lessons: [
                    { title: 'Lesson 1', description: 'Introduction to machine learning.' },
                    { title: 'Lesson 2', description: 'Supervised learning techniques.' },
                    { title: 'Lesson 3', description: 'Unsupervised learning techniques.' },
                ],
            },
            {
                id: 5,
                title: 'Graphic Design Fundamentals',
                instructor: 'Eva Brown',
                description: 'Learn the basics of graphic design and visual communication.',
                instructorEmail: 'eva@example.com',
                lessons: [
                    { title: 'Lesson 1', description: 'Introduction to graphic design principles.' },
                    { title: 'Lesson 2', description: 'Color theory and typography.' },
                    { title: 'Lesson 3', description: 'Introduction to Adobe Photoshop.' },
                ],
            },
        ];
        

        // Store dummy courses in local storage
        localStorage.setItem('courses', JSON.stringify(dummyCourses));
    }, []);

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
