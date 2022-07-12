import React from 'react';
import { Routes, Route } from 'react-router-dom';
//@ts-ignore
import Pants from 'pants/Pants';
//@ts-ignore
import Shirts from 'shirts/Shirts';
//@ts-ignore
import Trolley from 'trolley/Trolley';

const Router = () => {
  return (
    <Routes>
      <Route path="/pants" element={<Pants />}></Route>
      <Route path="/shirts" element={<Shirts />}></Route>
      <Route path="/trolley" element={<Trolley />}></Route>
    </Routes>
  );
};

export default Router;
