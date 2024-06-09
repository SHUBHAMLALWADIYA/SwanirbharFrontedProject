import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import SearchBar from './SearchBar';

const CourseList = ({ courses }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const handleSearch = (query) => {
    if (query.trim() === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
        {filteredCourses.map(course => (
          <Box key={course.id}>
            <CourseCard course={course} />
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default CourseList;
