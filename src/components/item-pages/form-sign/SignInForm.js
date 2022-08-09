import React,{useState} from 'react'

import FormInput from '../../item-components/FormInput';
import Button from '../../item-components/Button';

import { signInAuthWithEmailAndPassword,signInWithGooglePopup } from '../../../utils/Firebase';

const SignInForm = () => {

  const initSignIn = {
    email:"",
    password:""
  }

  const [signInInput,setSignInInput] = useState(initSignIn)
  const { email,password } = signInInput

  const signInChangeHandler = (e) => {
    const {name,value} = e.target

    setSignInInput((prev)=>{
      return {...prev,[name]:value}
    })
  }

  const logGoogleUser = async() => {
    await signInWithGooglePopup();
    alert("Welcome !!!");
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email,password);
      alert("Welcome !!!");
      setSignInInput(initSignIn)
    }catch(error){
      switch(error.code){
        case "auth/wrong-password" :
          alert("Incorrect password for email!");
          break;
        case "auth/user-not-found" :
          alert("Email is not registered !");
          break;
        default :
          console.log(error);
      }
    }
  }

  return (
    <form className='form-signIn' onSubmit={submitHandler}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <FormInput 
        label={"Email"}
        inputOptions={{
          type:"mail",
          name:"email",
          value:email,
          onChange:signInChangeHandler,
          required:true
        }}
      />
      <FormInput 
        label={"Password"}
        inputOptions={{
          type:"password",
          name:"password",
          value:password,
          onChange:signInChangeHandler,
          required:true
        }}
      />

      <div className="form-signIn__btns">
        <Button
          buttonType={""}
          buttonOptions={{
            type:"submit"
          }}
        >
          sign in
        </Button>
        <Button
          buttonType={"google"}
          buttonOptions={{
            type:"button",
            onClick:logGoogleUser
          }}
        >
          sign in with google
        </Button>
      </div>

      <p style={{marginTop:"50px",lineHeight:"30px",color:"red",fontWeight:"600"}}>You can just use the demo account<br/>Email : 123123@gmail.com<br/>Password : 123123</p>
    </form>
  )
}

export default SignInForm