import React, { lazy, ReactElement } from 'react';

const Pants = lazy(() => import('./pages/Pants'));
const CreatePant = lazy(() => import('./pages/CreatePant'));
const UpdatePant = lazy(() => import('./pages/UpdatePant'));
const DeletePant = lazy(() => import('./pages/DeletePant'));

type TRoute = {
  path: string;
  component: ReactElement;
};

const routes: TRoute[] = [
  {
    path: '/pants',
    component: <Pants />,
  },
  {
    path: '/pants/create-pant',
    component: <CreatePant />,
  },
  {
    path: '/pants/update-pant/:id',
    component: <UpdatePant />,
  },
  {
    path: '/pants/delete-pant/:id',
    component: <DeletePant />,
  },
];

export default routes;
