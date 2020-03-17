import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCcM4PsxI4bjebL-Z6LR0MKiFs23FyIWVw",
    authDomain: "crown-clothing-1063c.firebaseapp.com",
    databaseURL: "https://crown-clothing-1063c.firebaseio.com",
    projectId: "crown-clothing-1063c",
    storageBucket: "crown-clothing-1063c.appspot.com",
    messagingSenderId: "954391255733",
    appId: "1:954391255733:web:0bf7113ebfe3c05f747cfc",
    measurementId: "G-5YJEBCTR1Q"
};
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument=async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    console.log(userRef);
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt= new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.messagingSenderId);
        }
    }
    return userRef;
}   

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
