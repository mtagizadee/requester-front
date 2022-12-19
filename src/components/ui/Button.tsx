import { FC, ReactNode } from 'react';

type TButtonType = "button" | "submit" | "reset" | undefined

interface IButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: TButtonType;
    className?: string;
}

const Button: FC<IButtonProps> = ({ children, onClick, type = "button", className }) => {
    return (
        <button className={`bg-gray-200 py-1 px-6 rounded-xl ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;