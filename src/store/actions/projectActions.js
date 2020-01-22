export const addProject = (project) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        //make async call to the db//
        const db = getFirestore()
        db.collection('projects').add({
            ...project,
            authorFirstName: 'Pradhumna',
            authorLastName: 'Pancholi',
            authorID: 123456,
            createdAt: new Date()
        }).then(() => {
            //dispatch the function//
            dispatch({ type: 'ADD_PROJECT', project}) 
        }).catch(error => {
            //logging error//
            dispatch({ type: 'ADD_PROJECT_ERROR', error})
        })
    }
}