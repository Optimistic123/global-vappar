import React from 'react';

const courses = [
  { id: 1, title: 'React for Beginners', price: '$99' },
  { id: 2, title: 'Advanced JavaScript', price: '$149' },
];

const CourseList = () => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>Price: {course.price}</p>
            <button>Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
