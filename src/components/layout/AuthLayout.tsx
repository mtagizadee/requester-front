import { Outlet } from "react-router-dom";
import Logo from "../Logo";

const AuthLayout = () => {
  return (
    <div className="full-screen center-content">
      <div className="bg-white px-6 py-24 rounded-xl w-screen max-w-[400px] flex flex-col items-center">
        <Logo clickable={false} className="mb-6" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
