import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {API_KEY} from '../key/api';

const config = {
        apiKey: API_KEY,
        authDomain: "crwn-db-6ea58.firebaseapp.com",
        databaseURL: "https://crwn-db-6ea58.firebaseio.com",
        projectId: "crwn-db-6ea58",
        storageBucket: "crwn-db-6ea58.appspot.com",
        messagingSenderId: "932245464222",
        appId: "1:932245464222:web:d5ac20bd6ccbeb1fde878f",
        measurementId: "G-4XS8N266FM"
}

firebase.initializeApp(config); 


export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        console.log('userRef: ', userRef);
        const collectionRef = firestore.collection('users');
        const snapShot = await userRef.get(); 

        const collectionSnapshot = await collectionRef.get(); 

        if(!snapShot.exists){
                const{displayName, email} = userAuth;
                const createdAt = new Date();
                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        });
                } catch(error) {
                        console.log('error creating user', error.message); 
                }
        }

        return userRef;
}
//objectesToAd is array 
export const addCollectionAndDocuments = async(collectionKey, objectsToAdd)  => {
        const collectionRef = firestore.collection(collectionKey);
        console.log(collectionRef);

        const batch = firestore.batch();
        objectsToAdd.forEach(obj => {
                //generate new documents and randomly generate new id
                // doc() 메소드 안에 obj.title이 들어가면 id(key)가 obj.title이 된다. 
                const newDocRef = collectionRef.doc();     
                batch.set(newDocRef, obj);
        });
        // 중간에 서버가 끊기면 null 반환한다. 
        await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 