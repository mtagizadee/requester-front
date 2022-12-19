import ValidateRoute from "./ValidateRoute";
import { auth } from "../../App";

export const PrivateRoutes = () => {
    // TODO: get isAuth from store or context
    const isAuth = auth;

    return <ValidateRoute condition={isAuth} navigate='/error' />

}