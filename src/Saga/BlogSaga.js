// features/courseSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { setBlogs, fetchBlogs, setBlogDetails, fetchBlogDetails } from '../store/blogSlice';

// Mock API call with payload - replace with actual API endpoint
const fetchBlogsApi = (action) => {
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
    const { id } = action.payload
    if (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const blogDetails = {
                    id: 1,
                    title: 'Blog 1',
                    content: "<h1>Blog Title</h1><p>This is a blog paragraph.</p><ul><li>Item 1</li><li>Item 2</li></ul>",
                    thumbnail: 'https://img.youtube.com/vi/ywI0xPabPr4/hqdefault.jpg'
                }
                resolve(blogDetails)
            }, 1000);
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newList = [
                    
                    { id: 1, title: 'Blog 1', summary: 'Blog 1 Summary',  thumbnail: 'https://img.youtube.com/vi/ywI0xPabPr4/hqdefault.jpg'},
                    { id: 2, title: 'Blog 2', summary: 'Blog 2 Summary', thumbnail: 'https://img.youtube.com/vi/ywI0xPabPr4/hqdefault.jpg'},
                ]
                resolve(newList)
            }, 1000);
        });
    }
};

function* fetchBlogsSaga(action) {
    try {
        const blogs = yield call(fetchBlogsApi, action); // Pass payload to API
        yield put(setBlogs(blogs)); // Dispatch to store fetched courses
    } catch (error) {
        console.error('Failed to fetch courses:', error);
    }
}

function* fetchBlogDetail(action) {
    try {
        const blogDetails = yield call(fetchBlogsApi, action); // Pass payload to API
        yield put(setBlogDetails(blogDetails)); // Dispatch to store fetched courses
    } catch (error) {
        console.error('Failed to fetch courses:', error);
    }
}

// Watcher saga
export function* watchCourseSaga() {
    yield takeLatest(fetchBlogs.type, fetchBlogsSaga);
    yield takeLatest(fetchBlogDetails.type, fetchBlogDetail);
}

export default watchCourseSaga;