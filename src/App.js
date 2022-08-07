import React from 'react';
import { Routes , Route } from "react-router-dom";

import Categories from './routes/Categories';
import Authentication from './routes/Authentication';
import Navigation from './routes/Navigation';
import Shop from './routes/Shop';

import './style/all.css';

function Profile(){
  return (
    <h2>I am the Profile page</h2>
  )
}

function App() {
  return (
    <Routes>
      <Route path="crwn-clothing/" element={<Navigation />}  >
        <Route index element={<Categories />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="profile" element={<Profile />} />
      </Route> 
    </Routes>
  );
}

export default App;
