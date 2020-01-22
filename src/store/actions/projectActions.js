export const addProject = (project) => {
    return (dispatch, getState) => {
        //make async call to the db//
        //dispatch the function//
        dispatch({ type: 'ADD_PROJECT', project}) 
    }
}