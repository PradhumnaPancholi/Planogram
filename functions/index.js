const functions = require('firebase-functions');
const firebaseAdmin = require('firebase-admin');

firebaseAdmin.initializeApp(functions.config().firebase)

//function to add notication to firestore collection
const createNotification = (notification) => {
    return firebaseAdmin.firestore().collection('notifications').add(notification)
    .then((notification) => console.log('Added notification', notification))
}
// function to trigger a notificaton when a new project is created//
exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate((doc) => {

    //get project data from doc in response//
    let project = doc.data()
    //create a new notification object//
    let notification = {
        content: 'added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: firebaseAdmin.firestore.FieldValue.serverTimestamp()
    }

    //pass notifcation to create a new document in collection//
    return createNotification(notification)
})
// function to trigger a notification when a new user is created//
exports.userCreated = functions.auth.user().onCreate(user => {

    //get doc data (firestore user collection) from user(firebase auth)
    return firebaseAdmin.firestore().collection('users').doc(user.uid).get().then( doc => {
        
        //get user data from doc in response//
        let newUser = doc.data()

        //create a notification object//
        let notication = {
            content: `joined the team`,
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: firebaseAdmin.firestore.FieldValue.serverTimestamp()
        }

        //pass notifcation to create a new document in collection//
        return createNotification(notication)
    })
})
// dummy function
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
