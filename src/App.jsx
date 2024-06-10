import React, { useState, useContext, useEffect } from 'react';
import { ChakraProvider, Box, Container, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetailsPage from './pages/CourseDetailsPage';
import ProfilePage from './pages/ProfilePage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Notifications from './components/Notification/Notifications';
import UserProfile from './components/Profile/UserProfile';
import CourseForm from './components/Course/CourseForm';
import CourseList from './components/Course/CourseList';
import LoginlogoutContextProvider, { LoginlogoutContext } from './context/LoginlogoutContext';
import Footer from './components/Layout/Footer';

// Dummy courses data
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
      issueDate: '2022-06-01',
      numLessons : 2
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
      issueDate: '2022-06-15',
      numLessons : 3
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
      issueDate: '2022-07-01',
      numLessons : 3
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
      issueDate: '2022-07-15',
      numLessons : 3
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
      issueDate: '2022-08-01',
      numLessons : 3
  },
];


const App = () => {
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const { toggle, setToggle } = useContext(LoginlogoutContext);

  useEffect(() => {
    // Retrieve course data from localStorage when component mounts
    const storedCourses = JSON.parse(localStorage.getItem('courses'));
    if (storedCourses && storedCourses.length > 0) {
      setCourses(storedCourses);
    } else {
      // If no courses in local storage, store dummy courses
      localStorage.setItem('courses', JSON.stringify(dummyCourses));
      setCourses(dummyCourses);
    }

    const storedLogin = localStorage.getItem("login");
    if (storedLogin === "true") {
      setToggle(true);
    }
  }, []); // Empty dependency array ensures useEffect only runs once when component mounts

  const handleCourseUpload = (newCourse) => {
    // Update the courses state
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    // Store the updated courses in localStorage
    localStorage.setItem('courses', JSON.stringify(updatedCourses));

    const newNotification = {
      id: Date.now(), // Unique ID for the notification
      message: `New course "${newCourse.title}" added.`,
    };
    setNotifications([newNotification, ...notifications]);
  };

  const data = JSON.parse(localStorage.getItem("userData"));
  const login = localStorage.getItem("login") === "true";

  return (
    <ChakraProvider>
      <Router>
        <Flex direction={{ base: "column", md: "row" }} minH="100vh">
          <Box as="aside" w={{ base: "100%", md: "250px" }} bg="gray.100">
            <Sidebar />
          </Box>
          <Box flex="1" mt={{ base: "60px", md: "0" }}>
            <Container maxW="container.lg" p="0">
              <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/courses" element={<CourseList courses={courses} />} />
                <Route exact path="/upload-course" element={<CourseForm onCourseUpload={handleCourseUpload} />} />
                <Route exact path="/courses/:id" element={<CourseDetailsPage />} />
                <Route exact path="/profilePage" element={<UserProfile />} />
                <Route exact path="/notifications" element={<Notifications notifications={notifications} />} />
                <Route exact path="/profile" element={<ProfilePage />} />
              </Routes>
            </Container>
            <Footer bottom="0" width="full" />
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
