import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pants from 'pants/Pants';
import Shirts from 'shirts/Shirts';
import Home from './Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pants" element={<Pants />}></Route>
      <Route path="/shirts" element={<Shirts />}></Route>
    </Routes>
  );
};

export default Router;
