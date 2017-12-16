import {FETCH_POSTS,FETCH_POST, DELETE_POST} from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) 
{
    switch(action.type){
        case FETCH_POST:
        const post=action.payload.data; //fetch a object back
        //const newState = {...State}; 
        //newState[post.id]=post;
        //return newState;  
        console.log(post);
        return {...state, [post.id]:post}
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');   
        case DELETE_POST:
            return _.omit(state,action.payload);
       
        default:
        return state;
    }
    
}