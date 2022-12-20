import { Outlet, Navigate } from "react-router-dom";
import { FC } from "react";

interface IValidateRouteProps {
  condition: boolean;
  navigate: string;
}

const ValidateRoute: FC<IValidateRouteProps> = ({ condition, navigate }) => {
  return condition ? <Outlet /> : <Navigate to={navigate} replace={true} />;
};

export default ValidateRoute;
