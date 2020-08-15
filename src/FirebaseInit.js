import Firebase from 'firebase';
import { FIREBASE_CONFIG as firebaseConfig } from './Components/Config/FirebaseConfig';

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
