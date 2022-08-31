import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  // signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbwoLKdWFvauanMvVwNiOW2Xyo5cXMUAY",
  authDomain: "crwn-colthing-db-12b54.firebaseapp.com",
  projectId: "crwn-colthing-db-12b54",
  storageBucket: "crwn-colthing-db-12b54.appspot.com",
  messagingSenderId: "28487773359",
  appId: "1:28487773359:web:7f2f2bedab1073c606785a"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);


export const db = getFirestore(); 

export const addCollectionAndDocuments = async(collectionkey,objectsToAdd) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef , object)
  })

  await batch.commit();
  console.log("done");
}

export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db,"categories");
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const { title,items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc
  },{})

  return categoryMap;
}

export const createUserDocumentFromAuth = async(userAuth,extendInformation) => {

  if(!userAuth) return; // userAuth 是還放在驗證區的帳號
  const userDocRef = doc(db,"users",userAuth.uid); // userDocRef 是要把驗證裡面的帳號用uid這個唯一的id放去users這個collection裡面
  const userSnapShot = await getDoc(userDocRef); // 抓取Doc裡面這個id 

  if(!userSnapShot.exists()){ // 辨識是否存在
    const { displayName , email } = userAuth 
    const createTime = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createTime,
        ...extendInformation
      })
    }
    catch(error){
      console.log("error creating",error.message)
    }
  }
  return userDocRef ;
}

export const createAuthUserWithEmailAndPassword = async(email,password) => {
  
  if(!email || !password) return ;

  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthWithEmailAndPassword = async(email,password) => {
  
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutAuth = async() => signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth,callback)