import firebase from '../config/firebase'

const socialMediaAuth =(provider)=> {
  return 
    firebase.auth()
    .signInWithPopup()
    .then((res)=> {
        return res.user;
    })
    .catch((er)=>{
        return er;
    })
};

export default socialMediaAuth; 