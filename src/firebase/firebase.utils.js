import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config =
{
    apiKey: "AIzaSyDVdXhADO8GvuL0HBi71-dDEazuu8KSK6k",
    authDomain: "crwn-db-50424.firebaseapp.com",
    databaseURL: "https://crwn-db-50424.firebaseio.com",
    projectId: "crwn-db-50424",
    storageBucket: "",
    messagingSenderId: "153019202760",
    appId: "1:153019202760:web:83e299d7ec556031dab9fd"
};


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase