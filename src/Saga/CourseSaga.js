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
          { id: 1, title: 'React for Beginners api', price: '$99' },
          { id: 2, title: 'Advanced JavaScript api', price: '$149' },
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