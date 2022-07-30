import React from "react";

import SignInForm from "../components/item-pages/form-sign/SignInForm";
import SignUpForm from "../components/item-pages/form-sign/SignUpForm";

const Authentication = () => {

  return (
    <div className="authentication">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication


// import { useEffect } from 'react'; // Google - getRedirectResult 用法
// import { getRedirectResult } from 'firebase/auth'; // getRedirectResult 用法
// import { 
//   auth,
//   signInWithGoogleRedirect
// } from '../../utils/Firebase';

  // useEffect(()=>{
  //   const redirect = async() => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if(response){
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   redirect()
  // },[]) // Google - getRedirectResult 用法

        {/* <button onClick={signInWithGoogleRedirect}>Sign in with GoogleRedirect </button> */}