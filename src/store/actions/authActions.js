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

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }, { getFirestore }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

        //create a firebase auth account//
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            //create a firestore 'user' document with provided data corresponding to firebase auth id//
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName
            })
        }).then(()=>{
            //dispactch action if everything goes right//
            dispatch({type: 'SIGN_UP_SUCCESS'})
        }).catch((error) => {
            //catch and dispacth error if occured//
            dispatch({type: 'SIGN_UP_ERROR', error})
        })
    }
}