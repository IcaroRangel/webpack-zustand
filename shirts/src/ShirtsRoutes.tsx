import React, { lazy, ReactElement } from 'react';

const Shirts = lazy(() => import('./pages/Shirts'));
const CreateShirt = lazy(() => import('./pages/CreateShirt'));
const UpdateShirt = lazy(() => import('./pages/UpdateShirt'));
const DeleteShirt = lazy(() => import('./pages/DeleteShirt'));

type TRoute = {
  path: string;
  component: ReactElement;
};

const routes: TRoute[] = [
  {
    path: '/shirts',
    component: <Shirts />,
  },
  {
    path: '/shirts/create-shirt',
    component: <CreateShirt />,
  },
  {
    path: '/shirts/update-shirt/:id',
    component: <UpdateShirt />,
  },
  {
    path: '/shirts/delete-shirt/:id',
    component: <DeleteShirt />,
  },
];

export default routes;
