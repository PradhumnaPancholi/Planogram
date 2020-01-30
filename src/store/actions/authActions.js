export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        
        //initiate firebase //
        const firebase = getFirebase()
        //send sign in req  with credentials supplied//
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'SIGN_IN_SUCCESS'})
        }).catch((error) => {
            dispatch({type: 'SIGN_IN_FAIL', error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGN_OUT_SUCCESS'})
        })
    }
}