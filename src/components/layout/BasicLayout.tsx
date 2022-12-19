import { ReactNode, FC } from 'react';
import Sidebar from './Sidebar';

type ILayoutProps = {
    children: ReactNode;
}

const BasicLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    );
}

export default BasicLayout;