import React, { ReactNode } from 'react';

import { Routes, Route } from 'react-router-dom';

import Pants from './pages/Pants';
import CreatePant from './pages/CreatePant';
import UpdatePant from './pages/UpdatePant';
import DeletePant from './pages/DeletePant';

type TRoute = {
  path: string;
  component: ReactNode;
  exact?: boolean;
};

const PantsRoutes = () => {
  const routes: TRoute[] = [
    {
      path: '/',
      component: <Pants />,
      exact: true,
    },
    {
      path: '/pants/create-pant',
      component: <CreatePant />,
    },
    {
      path: '/pants/update-pant',
      component: <UpdatePant />,
    },
    {
      path: '/delete-pant',
      component: <DeletePant />,
    },
  ];

  // return routes;

  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        ></Route>
      ))}
    </Routes>
  );
};

export default PantsRoutes;
