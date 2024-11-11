// components/CourseList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/courseSlice';
import "./CourseList.css"

const CourseList = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.course.courses);
    console.log("courses:", courses);
    useEffect(() => {
        // Dispatch fetchCourses with a payload (e.g., filter parameters)
        const filterPayload = { category: 'frontend', level: 'beginner' };
        if(courses.length == 0) {
          dispatch(fetchCourses(filterPayload));
        }
    }, [dispatch]);

    return (
        <div>
            <h1>Course List</h1>
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>
                        {course.title} - {course.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;

