import React from "react";
import { Container } from './Authentication.style';

import SignInForm from "../../components/item-pages/form-sign/signIn/SignInForm";
import SignUpForm from "../../components/item-pages/form-sign/signUp/SignUpForm";

const Authentication = () => {

  return (
    <Container>
      <SignInForm />
      <SignUpForm />
    </Container>
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