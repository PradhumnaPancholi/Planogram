const initialState = {
    projects : [
        {id: 1, title: 'Setup redux in palnogram', priority: 'must'},
        {id: 2, title: 'Work on smart contracts repo', priority: 'must'},
        {id: 3, title: 'Apply to job', priority: 'must'}
    ]
}

const projectReducer = (state = initialState, action) => {
    return state
}

export default projectReducer