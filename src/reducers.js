import { combineReducers } from 'redux'
import login from './Login/login.reducers'
import posts from './Posts/posts.reducers'

export default combineReducers({
    login,
    posts,
})