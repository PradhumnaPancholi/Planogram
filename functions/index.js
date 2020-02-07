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

// dummy function
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
