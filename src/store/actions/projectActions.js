export const addProject = (project) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        // initiate the firestore db//
        const db = getFirestore()
        //get user data//
        const profile = getState()
        //make async call to the db//
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