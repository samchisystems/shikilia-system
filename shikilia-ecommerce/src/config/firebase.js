import firebase from 'firebase';


 var firebaseConfig = {
  apiKey: "AIzaSyBWXTYH0J_KCJBFDBy_QEXMzC_ba4UmiiU",
  authDomain: "shikilia-backend.firebaseapp.com",
  projectId: "shikilia-backend",
  storageBucket: "shikilia-backend.appspot.com",
  messagingSenderId: "98675150097",
  appId: "1:98675150097:web:979328684f38203e7290b0",
  measurementId: "G-BR5MGBD2LL"
  };


//initialize firebase 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAnalytics = firebase.analytics();
var db = firebaseApp.firestore();
const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();



export  {auth, provider, db };


// import React from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/analytics";
// import "firebase/database";
// import "firebase/firestore";

// /* Context that will be use to inject our firebase 
//  * encapsulation class object to be easily reusable by
//  * our application.
// */
// export const FirebaseContext = React.createContext(null);

// export const AUTHENTICATION_LOADING = "AUTHENTICATION_LOADING";
// export const AUTHENTICATED = "AUTHENTICATED";
// export const AUTHENTICATED_ANONYMOUSLY = "AUTHENTICATED_ANONYMOUSLY";
// export const UNAUTHENTICATED = "UNAUTHENTICATED";
// export const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";

// const supportedPopupSignInMethods = [
//   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   firebase.auth.EmailAuthProvider.PROVIDER_ID
// ];

// export class Firebase {
//   constructor(firebaseKeys) {
//     // Do not initialize the app if this step was already done.
//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: firebaseKeys.API_KEY,
//         authDomain: firebaseKeys.AUTH_DOMAIN,
//         databaseURL: firebaseKeys.DATABASE_URL,
//         projectId: firebaseKeys.PROJECT_ID,
//         storageBucket: firebaseKeys.STORAGE_BUCKET,
//         messagingSenderId: firebaseKeys.MESSASING_SERDER_ID,
//         appId: firebaseKeys.APP_ID,
//         measurementId: firebaseKeys.MEASUREMENT_ID
//       });
//     }
    
//     if(firebase.apps.length) {
//       this.auth = firebase.auth();
//       this.googleLoginProvider = new firebase.auth.GoogleAuthProvider();
//       this.facebookLoginProvider = new firebase.auth.FacebookAuthProvider();
//       this.emailAuthProvider = new firebase.auth.EmailAuthProvider();
//     }
//   }

//   getProvider(providerId) {
//     switch (providerId) {
//       case firebase.auth.GoogleAuthProvider.PROVIDER_ID:
//         return this.googleLoginProvider;
//       case firebase.auth.FacebookAuthProvider.PROVIDER_ID:
//         return this.facebookLoginProvider;
//       case firebase.auth.EmailAuthProvider.PROVIDER_ID:
//         return this.emailAuthProvider;
//       default:
//         throw new Error(`No provider implemented for ${providerId}`);
//     }
//   }

//   /* Updates the authentication everytime a change is received */
//   authState = setAuthState => 
//     this.auth.onAuthStateChanged(async user => {
//       if (user) {
//         const token = await user.getIdToken();
//         setAuthState({
//           status: user.isAnonymous
//             ? AUTHENTICATED_ANONYMOUSLY
//             : AUTHENTICATED,
//           user,
//           token,
//           });
//       } else {
//         await this.signInAnonymously(setAuthState);
//       }
//     });

//   signInWithGoogle = async (setAuthState, callback) => {
//     try {
//       setAuthState({ status: AUTHENTICATION_LOADING });
//       await this.auth.signInWithPopup(this.googleLoginProvider);
//       const user = this.auth.currentUser;
//       callback(user);
//     } catch (error) {
//       setAuthState({ status: UNAUTHENTICATED, error });
//       console.log("signInWithGoogle failed: ", error);
//     }
//   };
//   /*
//   * Returns providers for currently signed in user.
//   */
//   providersForEmail = async (email) => {
//     return this.auth.fetchSignInMethodsForEmail(email);
//   };
//   /*
//   * Returns whether the user is only logged in using password provider.
//   */
//   userHasOnlyEmailProvider = async (email) => {
//     let providers;
//     if(email) {
//       providers = await this.providersForEmail(email);
//     } else {
//       const user = this.auth.currentUser;
//       if(!user) {
//         return false;
//       }
//       providers = await this.providersForEmail(user.email);
//     }
//     return providers.length === 1 && providers[0] === firebase.auth.EmailAuthProvider.PROVIDER_ID;
//   }
//   /**
//    * Links an email with their credential from provider A to already existing provider B.
//    * This is needed when a user uses the same email to login with google and subsequently with
//    * facebook for example.
//    */
//   linkProviders = async (email, credential) => {
//     const providers = await this.auth.fetchSignInMethodsForEmail(email);
//     const firstPopupProviderMethod = providers.find(p =>
//       supportedPopupSignInMethods.includes(p)
//     );
//     if (!firstPopupProviderMethod) {
//       throw new Error(
//         `Your account is linked to a provider that isn't supported.`
//       );
//     }
//     const linkedProvider = this.getProvider(firstPopupProviderMethod);
//     linkedProvider.setCustomParameters({ login_hint: email });
//     try {
//       const result = await this.auth.signInWithPopup(linkedProvider);
//       result.user.linkWithCredential(credential);
//     } catch (error) {
//       console.log("linkWithCredentials failed: ", error);
//     }
//   };
//   signInWithFacebook = async (setAuthState, callback, onError) => {
//     try {
//       setAuthState({ status: AUTHENTICATION_LOADING });
//       await this.auth.signInWithPopup(this.facebookLoginProvider);
//     } catch (error) {
//       if (error.code === "auth/account-exists-with-different-credential") {  
//         const userHasOnlyEmailProvider = await this.userHasOnlyEmailProvider(error.email);
//         // TODO: Handle link facebook with email provider.
//         if(userHasOnlyEmailProvider) {
//           onError && onError(error);
//           setAuthState({ status: UNAUTHENTICATED });
//         } else {
//           await this.linkProviders(error.email, error.credential);
//         }
//       } else {
//         onError && onError(error);
//         setAuthState({ status: UNAUTHENTICATED });
//         console.log("signInWithFacebook failed: ", error);
//       }
//     }
//   };
//   updateEmailAddress = async (email, callback) => {
//     const user = this.auth.currentUser;
//     try {
//       await user.updateEmail(email);
//       callback && callback();
//     } catch (error) {
//       console.log("updateEmail failed: ", error);
//     }
//   };
//   sendPasswordResetEmail = async (email, callback, onError) => {
//     try {
//       await this.auth.sendPasswordResetEmail(email);
//       callback && callback();
//     } catch (error) {
//       onError && onError(error);
//       console.log("sendPasswordResetEmail failed: ", error);
//     }
//   };
//   sendEmailVerification = async (callback, onError) => {
//     const user = this.auth.currentUser;
//     try {
//       await user.sendEmailVerification({
//         url: window.location.href,
//         handleCodeInApp: true
//       });
//       callback && callback();
//     } catch (error) {
//       onError && onError(error);
//       console.log("sendEmailVerification failed: ", error.message);
//     }
//   };
//   updateUserDisplayName = async name => {
//     const user = this.auth.currentUser;
//     try {
//       await user.updateProfile({
//         displayName: name
//       });
//     } catch (error) {
//       console.log("updateUserDisplayName failed: ", error);
//     }
//   };
//   /* Creates a user using email and password. This  method also goes ahead and updates the username */
//   signUpWithEmailAndPassword = async (
//     email,
//     password,
//     name,
//     setAuthState,
//     callback,
//     onError
//   ) => {
//     setAuthState({ status: AUTHENTICATION_LOADING });
//     try {
//       await this.auth.createUserWithEmailAndPassword(email, password);
//       await this.sendEmailVerification();
//       await this.updateUserDisplayName(name);
//       const user = this.auth.currentUser;
//       callback(user);
//     } catch (error) {
//       onError && onError(error);
//       console.log("signUpWithEmailAndPassword failed: ", error);
//     }
//   };
//   signInWithEmailAndPassword = async (
//     email,
//     password,
//     setAuthState,
//     callback,
//     onError
//   ) => {
//     try {
//       setAuthState({ status: AUTHENTICATION_LOADING });
//       await this.auth.signInWithEmailAndPassword(email, password);
//       const user = this.auth.currentUser;
//       callback(user);
//     } catch (error) {
//       if (error.code === "auth/account-exists-with-different-credential") {
//         throw new Error("Email already used for authentication.");
//       } else {
//         if (!onError) {
//           throw new Error("signInWithEmailAndPassword failed: ", error);
//         } else {
//           onError(error);
//         }
//       }
//     }
//   };
//   signInAnonymously = async setAuthState => {
//     try {
//       setAuthState({ status: AUTHENTICATION_LOADING });
//       await this.auth.signInAnonymously();
//     } catch (error) {
//       console.log("signInAnonymously failed: ", error);
//     }
//   };
//   signOut = async setAuthState => {
//     try {
//       setAuthState({ status: AUTHENTICATION_LOADING });
//       await this.auth.signOut();
//       await this.signInAnonymously(setAuthState);
//     } catch (error) {
//       console.log("signOut failed: ", error);
//       setAuthState({ status: UNAUTHENTICATED, error });
//     }
//   };
// }

// export default Firebase;



// The file above shows our main class.
//  It encapsulates and handles much of the logic around authentication, handling errors and providing useful log messages.

// As you can see, a lot of its methods receive a setAuthState function param.
//  This will be introduced in a second, but in a nutshell it is a React Hook state. 
// Calling this method updates this state, ultimately triggering a rendering of every component that is interested in the authentication context.