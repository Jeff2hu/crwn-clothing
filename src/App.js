import React from 'react';
import { Routes , Route } from "react-router-dom";

import Home from './routes/Home';
import Authentication from './routes/Authentication';
import Navigation from './routes/Navigation';

import './style/all.css';

function Shop(){
  return (
    <h2>I am the shop page</h2>
  )
}

function App() {
  return (
    <Routes>
      <Route path="crwn-clothing/" element={<Navigation />}  >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route> 
    </Routes>
  );
}

export default App;
