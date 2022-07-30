import React , {useState} from 'react'

import FormInput from '../../item-components/FormInput';
import Button from '../../item-components/Button';

import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from '../../../utils/Firebase';

const initSignUp = {
  displayName:"",
  email:"",
  password:"",
  confirmPassword:""
}

const SignUpForm = () => {

  const [signUpInput,setSignUpInput] = useState(initSignUp);
  const {displayName,email,password,confirmPassword} = signUpInput
  
  const submitHandler = async(e) => {
    e.preventDefault();

    if(password!==confirmPassword){
      alert("Passwords do not match!")
      return;
    }else if(!email || !displayName || !password || !confirmPassword){
      alert("Please confirm your input!");
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      createUserDocumentFromAuth(user,{displayName})
      alert("Congratulations registration success!");
      setSignUpInput(initSignUp)
    } catch(error){
      switch(error.code){
        case "auth/invalid-email":
          alert("This email is invalid!")
          break;
        case "auth/email-already-in-use":
          alert("Email is already be used")
          break;
        case "auth/weak-password":
          alert("The password should be at least 6 characters")
          break;
        default :
          console.log(error);
      }
    }
  }

  const signUpChangeHandler = (e) => {
    const { name,value } = e.target;
    setSignUpInput((prev)=>{
      return {...prev,[name]:value}
    })
  }

  return (
    <div className='form-signUp'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your mail and password</span>
      <form onSubmit={submitHandler}>

        <FormInput
          label={"Display Name"}
          inputOptions={{
            type:"text",
            name:"displayName",
            onChange:signUpChangeHandler,
            value:displayName,
            required:true
          }}/>

        <FormInput 
          label={"Email"}
          inputOptions={{
            type:"mail" ,
            name:"email",
            onChange:signUpChangeHandler,
            value:email,
            required:true
          }}/>

        <FormInput
          label={"Password"}
          inputOptions={{
            type:"password", 
            name:"password",
            onChange:signUpChangeHandler,
            value:password,
            required:true
          }}/>

        <FormInput
          label={"Confirm Password"}
          inputOptions={{
            type:"password",
            name:"confirmPassword",
            onChange:signUpChangeHandler,
            value:confirmPassword,
            required:true
          }}/>

        <Button
          buttonType={""}
          buttonOptions={{
            type:"submit"
          }}>
          Submit
        </Button>
      
      </form>
    </div>
  )
}

export default SignUpForm