import React from 'react';
import { Routes , Route } from "react-router-dom";

import Categories from './routes/Categories';
import Authentication from './routes/Authentication';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';
import Checkout from './routes/Checkout';

import './style/all.css';

function Profile(){
  return (
    <h2>I am the Profile page</h2>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}  >
        <Route index element={<Categories />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="profile" element={<Profile />} />
        <Route path="checkout" element={<Checkout />} />
      </Route> 
    </Routes>
  );
}

export default App;
