import { FC, ReactNode } from "react";
import { FiAlertTriangle } from "react-icons/fi";

interface IInputErrorProps {
  children: ReactNode;
  className?: string;
}

const InputError: FC<IInputErrorProps> = ({ children, className }) => {
  return (
    <div className={`flex items-center gap-1 p-1 text-red-500 text-sm ${className}`}>
      <FiAlertTriangle />
      <p>{children}</p>
    </div>
  );
};

export default InputError;
