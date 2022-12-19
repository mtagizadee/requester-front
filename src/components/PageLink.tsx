import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface IPageLinkProps {
    children: ReactNode;
    className?: string;
    to: string;
}

const PageLink: FC<IPageLinkProps> = ({ children, className, to }) => {

    const onClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <NavLink className={`text-gray-500 ${className}`} onClick={onClick} to={to}>
            {children}
        </NavLink>
    );
}

export default PageLink;