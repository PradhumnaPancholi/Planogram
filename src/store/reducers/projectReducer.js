const initialState = {}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('added new project', action.project)
            return state
        case 'ADD_PROJECT_ERROR':
            console.log('error occured', action.error)
            return state
        case 'DELETE_PROJECT':
            console.log('deleted project')
            return state
        case 'DELETE_PROJECT_ERROR':
            console.log('error occured', action.error)
            return state
        default:
            return state
    }
}

export default projectReducer