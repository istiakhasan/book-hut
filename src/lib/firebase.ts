import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvJNa2QBNm6ZuK-UN9gLaSs473Op4aWbg",
    authDomain: "book-fair-84042.firebaseapp.com",
    projectId: "book-fair-84042",
    storageBucket: "book-fair-84042.appspot.com",
    messagingSenderId: "189244168538",
    appId: "1:189244168538:web:95b50ef9c2f11121b7fb63"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
