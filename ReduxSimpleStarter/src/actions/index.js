import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'ZACHYU1234';
const testID = '172841';
const testUrl = 'http://reduxblog.herokuapp.com/posts/172841?key=ZACHYU1234'
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POSTS';
export const DELETE_POST = 'DELETE_POST';
export function fetchPosts(){
   
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
    console.log('Request', request);
    return {
        type: FETCH_POSTS,
        payload:request
       
    };
}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`,values).then(()=>callback());
    
    return {
        type: CREATE_POST,
        payload:request
       
    };
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`);
    console.log('Request', request);
    return {
        type: FETCH_POST,
        payload:request
       
    };
}

export function deletePost(id,callback)
{
    const request = axios.delete(`${ROOT_URL}/posts/${id}?key=${API_KEY}`).then(()=>callback());
    return {
        type: DELETE_POST,
        payload:id
       
    };
}