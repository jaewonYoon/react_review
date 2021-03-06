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
        const snapShot = await userRef.get(); 


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
export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs
        .filter((doc,index) => index <5)
        .map((doc) => {
                const{title, items} = doc.data(); 
                return {
                        routeName: encodeURI(title.toLowerCase()), 
                        id:doc.id,
                        title,
                        items
                }
        });
        return transformedCollection.reduce((accumulator, collection) =>{ 
                accumulator[collection.title.toLowerCase()] = collection;
                return accumulator; 
        } ,{})
}

export const getCurretUser = () => {
        return new Promise((resolve, reject) => {
                const unsubscribe = auth.onAuthStateChanged(userAuth => {
                        unsubscribe();
                        resolve(userAuth); 
                },reject)
        })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase; 