const initialState = {
    projects : [
        {id: 1, title: 'Setup redux in planogram', priority: 'must'},
        {id: 2, title: 'Work on smart contracts repo', priority: 'must'},
        {id: 3, title: 'Apply to job', priority: 'must'}
    ]
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('added new project', action.project)
            return state
        case 'ADD_PROJECT_ERROR':
            console.log('error occured', action.error)
            return state
        default:
            return state
    }
}

export default projectReducer