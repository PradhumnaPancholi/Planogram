export const addProject = (project) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        // initiate the firestore db//
        const db = getFirestore()
        //get user data//
        const profile = getState().firebase.profile
        const userID = getState().firebase.auth.uid
        //make async call to the db//
        db.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName ,
            authorID: userID,
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

export const deleteProject = (id) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        //initiate the firestore db//
        const db = getFirestore()
        //making the async call to the db//
        db.collection('projects').doc(id).delete().then(() => {
            //dispatch the the function//
            dispatch({ type: 'DELETE_PROJECT' })
        }).catch(error => {
            //logging error//
            dispatch({ type: 'DELETE_PROJECT_ERROR', error})
        })
    }
}