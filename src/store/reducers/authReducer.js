const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_SUCCESS':
            console.log('From AuthReducer: Sign In Success')
            return {
                ...state,
                authError: null
            }

        case 'SIGN_IN_FAIL':
            console.log('From AuthReducer: Sign In Fail')
            return {
                ...state,
                authError: 'SIGN IN FAILED'
            }

        case 'SIGN_OUT_SUCCESS': 
            console.log('sign out success')
            return state
        default:
            return state
    }
}

export default authReducer