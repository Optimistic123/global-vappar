// components/CourseList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/courseSlice';
import "./CourseList.scss"
import Shimmer from './Shimmer';

const CourseList = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.course.courses);
    const isLoading = useSelector((state) => state.course.isLoading);

    useEffect(() => {
        // Dispatch fetchCourses with a payload (e.g., filter parameters)
        const filterPayload = { category: 'frontend', level: 'beginner' };
        if (courses.length == 0) {
            dispatch(fetchCourses(filterPayload));
        }
    }, [dispatch]);

    return (
        <div className="course-list">
            {isLoading ? (
                <Shimmer type={"courseShimmer"} />
            ) : (
                <div className="video-grid">
                    {courses.map((course) => (
                        <div className='video-card'>
                            <div key={course.id} className="video-image">
                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                    <img src={course.thumbnail} alt={course.title} className="video-thumbnail" />
                                </a>
                            </div>
                            <div key={course.id} className="video-descp">
                               <label>{course.title}</label>
                               <p>{course.descp}</p>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseList;

