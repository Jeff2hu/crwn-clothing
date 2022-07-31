import React,{useState,useContext} from 'react'

import FormInput from '../../item-components/FormInput';
import Button from '../../item-components/Button';
import { UserContext } from '../../../contexts/user/UserContext';

import { signInAuthWithEmailAndPassword,signInWithGooglePopup,createUserDocumentFromAuth } from '../../../utils/Firebase';

const SignInForm = () => {

  const {setCurrentUser} = useContext(UserContext);

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
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    setCurrentUser(userDocRef)
    alert("Welcome !!!");
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    try {
      const {user} = await signInAuthWithEmailAndPassword(email,password);
      console.log(user)
      setCurrentUser(user)
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
    </form>
  )
}

export default SignInForm