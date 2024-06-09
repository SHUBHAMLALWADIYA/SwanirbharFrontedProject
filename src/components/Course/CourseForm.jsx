import { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Textarea, Stack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CourseForm = ({ onCourseUpload }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [instructor, setInstructor] = useState('');
    const [instructorEmail, setInstructorEmail] = useState('');
    const [numLessons, setNumLessons] = useState(0);
    const [lessons, setLessons] = useState([]); // State to store lessons
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        // Validate form fields
        if (title.trim() === '' || description.trim() === '' || duration.trim() === '' || issueDate.trim() === '' || instructor.trim() === '' || instructorEmail.trim() === '' || numLessons === 0 || lessons.some(lesson => lesson.title.trim() === '' || lesson.description.trim() === '')) {
            setError('All fields are required');
            return;
        }

        // Call the onCourseUpload function passed as prop
        onCourseUpload({ id: Date.now(), title, description, duration, issueDate, instructor, instructorEmail, numLessons, lessons });

        // Clear form fields
        setTitle('');
        setDescription('');
        setDuration('');
        setIssueDate('');
        setInstructor('');
        setInstructorEmail('');
        setNumLessons(0);
        setLessons([]);
        setError('');
        navigate("/courses");
    };

    // Function to handle adding a new lesson
    const handleAddLesson = () => {
        setLessons(prevLessons => [...prevLessons, { title: '', description: '' }]);
    };

    // Function to handle updating lesson title or description
    const handleLessonChange = (index, field, value) => {
        setLessons(prevLessons => {
            const updatedLessons = [...prevLessons];
            updatedLessons[index][field] = value;
            return updatedLessons;
        });
    };

    return (
        <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" maxW="md" mx="auto" mt={10}>
            <Heading as="h2" size="lg" mb={6} textAlign="center">Upload Course</Heading>
            <Stack spacing={4}>
                <FormControl id="title" isRequired>
                    <FormLabel>Course Title</FormLabel>
                    <Input
                        placeholder="Enter course title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>
                <FormControl id="description" isRequired>
                    <FormLabel>Course Description</FormLabel>
                    <Textarea
                        placeholder="Enter course description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl id="duration" isRequired>
                    <FormLabel>Duration</FormLabel>
                    <Input
                        placeholder="Enter course duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />
                </FormControl>
                <FormControl id="issueDate" isRequired>
                    <FormLabel>Issue Date</FormLabel>
                    <Input
                        type="date"
                        placeholder="Enter issue date"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                    />
                </FormControl>
                <FormControl id="instructor" isRequired>
                    <FormLabel>Instructor</FormLabel>
                    <Input
                        placeholder="Enter instructor name"
                        value={instructor}
                        onChange={(e) => setInstructor(e.target.value)}
                    />
                </FormControl>
                <FormControl id="instructorEmail" isRequired>
                    <FormLabel>Instructor Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter instructor email"
                        value={instructorEmail}
                        onChange={(e) => setInstructorEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="numLessons" isRequired>
                    <FormLabel>Number of Lessons</FormLabel>
                    <Input
                        type="number"
                        placeholder="Enter number of lessons"
                        value={numLessons}
                        onChange={(e) => setNumLessons(parseInt(e.target.value))}
                    />
                </FormControl>
                {/* Loop through lessons and render input fields for each */}
                {lessons.map((lesson, index) => (
                    <Box key={index}>
                        <FormControl id={`lessonTitle${index}`} isRequired>
                            <FormLabel>{`Lesson ${index + 1} Title`}</FormLabel>
                            <Input
                                placeholder={`Enter title for Lesson ${index + 1}`}
                                value={lesson.title}
                                onChange={(e) => handleLessonChange(index, 'title', e.target.value)}
                            />
                        </FormControl>
                        <FormControl id={`lessonDescription${index}`} isRequired>
                            <FormLabel>{`Lesson ${index + 1} Description`}</FormLabel>
                            <Textarea
                                placeholder={`Enter description for Lesson ${index + 1}`}
                                value={lesson.description}
                                onChange={(e) => handleLessonChange(index, 'description', e.target.value)}
                            />
                        </FormControl>
                    </Box>
                ))}
                {/* Button to add a new lesson */}
                <Button colorScheme="teal" onClick={handleAddLesson} mt={4}>Add Lesson</Button>
                {/* Error message */}
                {error && (
                    <Box color="red.500" mt={2}>
                        {error}
                    </Box>
                )}
                {/* Submit button */}
                <Button colorScheme="teal" onClick={handleSubmit} mt={4}>Upload Course</Button>
                <Button colorScheme="blue" onClick={handleSubmit} mt={4} position="absolute" bottom="10px" right="10px">
                    Start
                </Button>
            </Stack>
        </Box>
    );
};

export default CourseForm;
