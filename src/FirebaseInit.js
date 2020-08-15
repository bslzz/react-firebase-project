import Firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

const database = Firebase.firestore();
database
  .collection('posts')
  .get()
  .then((resp) => {
    console.log(resp.docs[0].data());
  })
  .catch((err) => console.log(err));
