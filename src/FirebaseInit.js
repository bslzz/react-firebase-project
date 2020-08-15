import Firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAToqR2uEljtG6Z-RCt6InVC9-4os0PDO8',
  authDomain: 'redux-learning-690c2.firebaseapp.com',
  databaseURL: 'https://redux-learning-690c2.firebaseio.com',
  projectId: 'redux-learning-690c2',
  storageBucket: 'redux-learning-690c2.appspot.com',
  messagingSenderId: '303938333049',
  appId: '1:303938333049:web:4278190d69a311a91be7a8',
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
