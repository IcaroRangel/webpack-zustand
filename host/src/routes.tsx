import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Shirts from 'shirts/Shirts';

const Router = () => {
  const PantsRoutes = lazy(() => import('pants/PantsRoutes'));

  return (
    <Routes>
      <Route
        path="/pants"
        element={
          <Suspense fallback={<div>carregando...</div>}>
            <PantsRoutes />
          </Suspense>
        }
      ></Route>

      <Route path="/shirts" element={<Shirts />}></Route>
    </Routes>
  );
};

export default Router;
