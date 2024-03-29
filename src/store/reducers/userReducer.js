const userReducer = (state={isLoggedIn: false}, action) => {
    switch (action.type) {
        case 'userLogIn':
            return {...state, isLoggedIn: true}
        case 'userLogOut':
            return {isLoggedIn: false}
        default:
            return {...state}
    }
};

export default userReducer;