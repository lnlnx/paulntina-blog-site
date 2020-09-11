import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBf1tDMEh_ot8bSIZ-zicUUQi1xqV2ky4A',
  authDomain: 'paul-tina-blog.firebaseapp.com',
  databaseURL: 'https://paul-tina-blog.firebaseio.com',
  projectId: 'paul-tina-blog',
  storageBucket: 'paul-tina-blog.appspot.com',
  messagingSenderId: '462516547044',
  appId: '1:462516547044:web:5d8f183c510f0122e4abf1',
  measurementId: 'G-H34E4XYCKE',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();

export const firestore = firebase.firestore();
