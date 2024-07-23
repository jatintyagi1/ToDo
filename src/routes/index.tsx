import { Suspense, lazy } from "react";
import {
    createHashRouter,
} from "react-router-dom";

const LandingPage = lazy(() => import('../pages/demo'));
const Main = lazy(() => import('../pages/main'))


export const router = createHashRouter([
    {
        path: "/",
        element: <Suspense>  <LandingPage />  </Suspense>,
    },
    {
        path: "/app",
        element: <Suspense>  <Main />  </Suspense>
    }
]);