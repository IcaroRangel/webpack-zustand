import React, { ReactElement } from 'react';

import Pants from './pages/Pants';
import CreatePant from './pages/CreatePant';
import UpdatePant from './pages/UpdatePant';
import DeletePant from './pages/DeletePant';

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
    path: '/pants/update-pant',
    component: <UpdatePant />,
  },
  {
    path: '/delete-pant',
    component: <DeletePant />,
  },
];

export default routes;
