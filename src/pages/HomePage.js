import React, { useEffect, useState } from 'react';
import API from '../api/axios';

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get('/courses')
      .then(res => setCourses(res.data))
      .catch(err => {
        console.error('Failed to fetch courses:', err);
        if (err.response?.status === 401) {
          alert('Unauthorized, please login again');
        }
      });
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title} - {course.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;