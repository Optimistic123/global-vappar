// features/courseSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { setCourses, fetchCourses } from '../store/courseSlice';

// Mock API call with payload - replace with actual API endpoint
const fetchCoursesApi = (payload) => {
  // const response = await fetch('https://api.example.com/courses', {
  //     method: 'GET', // or 'GET', depending on your API
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(payload), // Send payload in the request body
  // });

  // if (!response.ok) throw new Error('Failed to fetch courses');
  // const data = await response.json();
  // return data;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newList = [
        { id: '1', title: 'Video Title 1', thumbnail: 'https://img.youtube.com/vi/ywI0xPabPr4/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=ywI0xPabPr4' },
        { id: '2', title: 'Video Title 2', thumbnail: 'https://img.youtube.com/vi/73fvG0b37xY/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=73fvG0b37xY' },
        { id: '3', title: 'Video Title 3', thumbnail: 'https://img.youtube.com/vi/LpmmBRx4OIw/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=LpmmBRx4OIw' },
        { id: '4', title: 'Video Title 4', thumbnail: 'https://img.youtube.com/vi/ywI0xPabPr4/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=ywI0xPabPr4' },
        { id: '5', title: 'Video Title 5', thumbnail: 'https://img.youtube.com/vi/73fvG0b37xY/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=73fvG0b37xY' },
        { id: '6', title: 'Video Title 6', thumbnail: 'https://img.youtube.com/vi/LpmmBRx4OIw/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=LpmmBRx4OIw' },
        { id: '7', title: 'Video Title 7', thumbnail: 'https://img.youtube.com/vi/LpmmBRx4OIw/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=LpmmBRx4OIw' },
        { id: '8', title: 'Video Title 8', thumbnail: 'https://img.youtube.com/vi/LpmmBRx4OIw/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=LpmmBRx4OIw' },
        { id: '9', title: 'Video Title 9', thumbnail: 'https://img.youtube.com/vi/LpmmBRx4OIw/hqdefault.jpg', link: 'https://www.youtube.com/watch?v=LpmmBRx4OIw' },
      ]
      resolve(newList)
    }, 1000);
  });
};

// Saga to handle fetching courses with a payload
function* fetchCoursesSaga(action) {
  try {
    debugger
    const courses = yield call(fetchCoursesApi, action.payload); // Pass payload to API
    yield put(setCourses(courses)); // Dispatch to store fetched courses
  } catch (error) {
    console.error('Failed to fetch courses:', error);
  }
}

// Watcher saga
export function* watchCourseSaga() {
  yield takeLatest(fetchCourses.type, fetchCoursesSaga);
}

export default watchCourseSaga;