import React, {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import Shirts from 'shirts/Shirts';
import { pantsModule } from './modules/pantsModule';

type TRoute = {
  path: string;
  component: ReactElement;
};

const Router = () => {
  const [routes, setRoutes] = useState<TRoute[]>([]);

  const loadRoutes = useCallback(async () => {
    const pantsRoutes: any = await pantsModule.getRoutes();

    setRoutes([...pantsRoutes]);
  }, []);

  useEffect(() => {
    loadRoutes();
  }, [loadRoutes]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routes.map((route: TRoute) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
        <Route path="/shirts" element={<Shirts />}></Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
