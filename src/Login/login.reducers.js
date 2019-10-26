const initiateState = {
    user: null
}

export default(state = initiateState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, user:action.user}
        default:
            return state
    }
}