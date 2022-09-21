import React,{ useEffect } from 'react';
import { Routes , Route } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { onAuthStateChangedListner,createUserDocumentFromAuth } from './utils/Firebase';

import Home from './routes/home/Home';
import Authentication from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/Shop';
import Checkout from './routes/checkout/Checkout';

import { setCurrentUser } from './store/user/user.action';

import './style/all.css';

function Profile(){

  return (
    <h2>I am the Profile page</h2>
  )
}

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListner((user)=>{
      if(user){
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  },[])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}  >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<Checkout />} />
      </Route> 
    </Routes>
  );
}

export default App;
