import { Outlet } from "react-router-dom";
import Logo from "../Logo";

const AuthLayout = () => {
    return (
        <div className="full-screen center-content">
            <div className="bg-white p-6 rounded-xl">
                <Logo />
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;