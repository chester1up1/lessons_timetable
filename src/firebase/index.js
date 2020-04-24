import * as firebase from 'firebase';
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyB-KzzbqtaMcyOWzNfJamRaUgBYggV4OyU",
    authDomain: "lesson-timetable.firebaseapp.com",
    databaseURL: "https://lesson-timetable.firebaseio.com",
    projectId: "lesson-timetable",
    storageBucket: "lesson-timetable.appspot.com",
    messagingSenderId: "712305773161",
    appId: "1:712305773161:web:6e901ab903057b66f170f8"
  };
firebase.initializeApp(firebaseConfig);
export const storage =firebase.storage();
export const database = firebase.firestore();


