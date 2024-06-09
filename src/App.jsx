import React, { useState, useContext, useEffect } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
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
import Logout from './components/Auth/Logout';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const { toggle, setToggle } = useContext(LoginlogoutContext);

  useEffect(() => {
    // Retrieve course data from localStorage when component mounts
    const storedCourses = JSON.parse(localStorage.getItem('courses'));
    if (storedCourses) {
      setCourses(storedCourses);
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
        <Box display="flex" minH="100vh">
          <Sidebar />
          <Box ml="250px" w="full">
            <Header notifications={notifications} position="fixed" top="0" width="calc(100% - 250px)" zIndex="1000" />
            <Box mt="60px" mb="40px">
              <Container maxW="container.lg" >
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
            </Box>
            <Footer  bottom="0" width="calc(100% - 250px)" zIndex="1000" />
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
