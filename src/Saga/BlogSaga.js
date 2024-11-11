// features/courseSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { setBlogs, fetchBlogs, fetchBlog } from '../store/blogSlice';

// Mock API call with payload - replace with actual API endpoint
const fetchBlogsApi = (payload) => {
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
          { id: 1, title: 'Blog 1', content: 'Blog 1 descp' },
          { id: 2, title: 'Blog 2', content: 'Blog 2 descp' },
        ]
        resolve(newList)
      }, 1000);
    });
};

function* fetchBlogsSaga(action) {
    try {
        const blogs = yield call(fetchBlogsApi, action.payload); // Pass payload to API
        yield put(setBlogs(blogs)); // Dispatch to store fetched courses
    } catch (error) {
        console.error('Failed to fetch courses:', error);
    }
}

function* fetchBlogSaga(action) {
    try {
        const blogs = yield call(fetchBlogsApi, action.payload); // Pass payload to API
        yield put(setBlogs(blogs)); // Dispatch to store fetched courses
    } catch (error) {
        console.error('Failed to fetch courses:', error);
    }
}

// Watcher saga
export function* watchCourseSaga() {
    yield takeLatest(fetchBlogs.type, fetchBlogsSaga);
    yield takeLatest(fetchBlog.type, fetchBlogSaga);
}

export default watchCourseSaga;