import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import FormInput from '../../../item-components/formInput/FormInput';
import Button , { button_class_type } from '../../../item-components/button/Button';
import { Container,Buttons,Alert } from './SignInForm.style';

import { signInAuthWithEmailAndPassword,signInWithGooglePopup } from '../../../../utils/Firebase';

const SignInForm = () => {

  const initSignIn = {
    email:"",
    password:""
  }
  
  const navigate = useNavigate()
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
    setTimeout(() => {
      navigate("/")
    }, 1000); 
  }

  const submitHandler = async(e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPassword(email,password);
      alert("Welcome !!!");
      setSignInInput(initSignIn)
      setTimeout(() => {
        navigate("/")
      }, 1000); 
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
    <Container onSubmit={submitHandler}>
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

      <Buttons>
        <Button
          buttonType={button_class_type.base}
          buttonOptions={{
            type:"submit"
          }}
        >
          sign in
        </Button>
        <Button
          buttonType={button_class_type.google}
          buttonOptions={{
            type:"button",
            onClick:logGoogleUser
          }}
        >
          sign in with google
        </Button>
      </Buttons>

      <Alert>You can just use the demo account<br/>Email : 123123@gmail.com<br/>Password : 123123</Alert>
    </Container>
  )
}

export default SignInForm