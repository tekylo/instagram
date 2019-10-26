const initiateState = {
    posts: []
}

export default(state = initiateState, action) => {
    switch(action.type) {
        case 'SET_POSTS':
            return {...state, posts:action.posts}
        default:
            return state
    }
}