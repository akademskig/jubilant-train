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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    console.log(snapshot)

    if (!snapshot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log(`error creating user`, error.message)
        }
    }

    return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase