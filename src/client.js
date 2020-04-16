import * as sapper from '@sapper/app';
import firebase from 'firebase/app';
import 'firebase/database';

sapper.start({
	target: document.querySelector('#sapper')
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxbsCq2sgdrTLjozWrAlpDESK8qqyA9bY",
    authDomain: "svelte-js-2581a.firebaseapp.com",
    databaseURL: "https://svelte-js-2581a.firebaseio.com",
    projectId: "svelte-js-2581a",
    storageBucket: "svelte-js-2581a.appspot.com",
    messagingSenderId: "334670005785",
    appId: "1:334670005785:web:112248beafa859c10b4c88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);