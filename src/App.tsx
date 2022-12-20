import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { PublicRoutes, PrivateRoutes } from "./components/route-validators";
import routes from "./constants/routes";
import AuthLayout from "./components/layout/AuthLayout";
import RegistrationPage from "./pages/RegistrationPage";

// TODO: remove this
export const auth = false;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={routes.authRoute} element={<AuthLayout />}>
            <Route path={routes.loginRout()} element={<LoginPage />} />
            <Route path={routes.registerRoute()} element={<RegistrationPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to={routes.notFoundRoute} />} />
        <Route path={routes.notFoundRoute} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
