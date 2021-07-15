import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD-xwJe109FDqICiVVBBi2AGd63NdmEgjQ",
  authDomain: "shikilia-e-commerce.firebaseapp.com",
  projectId: "shikilia-e-commerce",
  storageBucket: "shikilia-e-commerce.appspot.com",
  messagingSenderId: "792280871913",
  appId: "1:792280871913:web:672d8a3fbc96edfbf95178",
  measurementId: "G-RLTN8KEDSM"
};


//initialize firebase 
const firebaseInit = firebase.initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.analytics();



export default  firebaseAnalytics;

// i have added this line