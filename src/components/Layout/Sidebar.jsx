import React, { useState, useContext } from 'react';
import {
  Box,
  VStack,
  HStack,
  IconButton,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiHome, FiBook, FiUser } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import { ChevronDownIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { LoginlogoutContext } from '../../context/LoginlogoutContext';

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuBg = useColorModeValue('white', 'gray.700');
  const menuColor = useColorModeValue('black', 'white');
  const [notifications, setNotifications] = useState([]); // State for notifications
  const user = JSON.parse(localStorage.getItem("userData"));
  const { toggle } = useContext(LoginlogoutContext);
  const userData = user?.username;
  const roll = user?.role;

  // Function to add notification when a new course is added
  const addNotification = (course) => {
    setNotifications((prevNotifications) => [...prevNotifications, course]);
  };

  // Dummy function to simulate adding a new course
  const handleAddNewCourse = () => {
    const newCourse = {
      title: "New Course Title",
      instructor: "Instructor Name",
      // Add other course details here
    };
    addNotification(newCourse);
  };

  return (
    <Box
      bg="gray.800"
      color="white"
      w={{ base: "100%", md: "250px" }} // Adjust width based on screen size
      h="100vh"
      p="5"
      position="fixed"
    >
      <VStack align="start" spacing="5">
        <HStack>
          <Avatar name="John Doe" src="https://bit.ly/broken-link" />
          <Box>
            <Text fontWeight="bold">{userData}</Text>
            <Text fontSize="sm" color="gray.400">{roll}</Text>
          </Box>
        </HStack>

        <Link href="/" w="100%">
          <HStack>
            <FiHome />
            <Text>Home</Text>
          </HStack>
        </Link>

        <Link href="/courses" w="100%">
          <HStack>
            <FiBook />
            <Text>Courses</Text>
          </HStack>
        </Link>

        <Link href="/profile" w="100%">
          <HStack>
            <FiUser />
            <Text>Profile</Text>
          </HStack>
        </Link>
        <Link href="/profilePage" w="100%">
          <HStack>
            <FiUser />
            <Text>Profile-Page</Text>
          </HStack>
        </Link>
        <Link href="/upload-course" w="100%">
          <HStack>
            <FiUser />
            <Text>AddNew-Course</Text>
          </HStack>
        </Link>

        <Menu>
          <MenuButton as={HStack} w="100%">
            <HStack>
              <MdNotifications />
              <Text>Notifications</Text>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>
          <MenuList bg={menuBg} color={menuColor}>
            {notifications.map((notification, index) => (
              <MenuItem key={index}>{notification.title}</MenuItem>
            ))}
          </MenuList>
        </Menu>

        <HStack w="100%" justify="space-between">
          <Text>Toggle Theme</Text>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="sm"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
