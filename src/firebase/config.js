import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0aPnBlZysFqHYZT5xvPJ--3P6DIpFv8c",
    authDomain: "olx-clone-bc9ab.firebaseapp.com",
    projectId: "olx-clone-bc9ab",
    storageBucket: "olx-clone-bc9ab.appspot.com",
    messagingSenderId: "547815544606",
    appId: "1:547815544606:web:33865f4b519e9d54399b0f"
};


export default firebase.initializeApp(firebaseConfig);
