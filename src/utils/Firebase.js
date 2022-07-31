import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  // signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
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
export const createUserDocumentFromAuth = async(userAuth,extendInformation) => {
  
  if(!userAuth) return;

  console.log(userAuth); // userAuth 是還放在驗證區的帳號
  const userDocRef = doc(db,"users",userAuth.uid);
  console.log(userDocRef); // userDocRef 是要把驗證裡面的帳號用uid這個唯一的id放去users這個collection裡面

  const userSnapShot = await getDoc(userDocRef); // 抓取Doc裡面這個id
  console.log(userSnapShot);
  console.log(userSnapShot.exists()); // 辨識是否存在

  if(!userSnapShot.exists()){
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