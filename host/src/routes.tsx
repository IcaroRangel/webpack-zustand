import React, {
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { pantsModule } from './modules/pantsModule';
import { shirtsModule } from './modules/shirtsModule';

type TRoute = {
  path: string;
  component: ReactElement;
};

const Router = () => {
  const [routes, setRoutes] = useState<TRoute[]>([]);

  const loadRoutes = useCallback(async () => {
    const pantsRoutes: any = await pantsModule.getRoutes();
    const shirtsRoutes: any = await shirtsModule.getRoutes();
    setRoutes([...pantsRoutes, ...shirtsRoutes]);
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
      </Routes>
    </Suspense>
  );
};

export default Router;
