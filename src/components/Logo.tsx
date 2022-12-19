import { FC } from 'react';
import { useNavigate } from 'react-router';


interface ILogoProps {
    clickable?: boolean;
}

const Logo: FC<ILogoProps> = ({ clickable = true }) => {
    const navigate = useNavigate();

    const onClick = () => {
        if (clickable) {
            navigate('/');
        }
    }

    return (
        <div onClick={onClick} className={`${clickable ? 'cursor-pointer' : ''}`}>
            <h3>Requester</h3>
        </div>
    );
}

export default Logo;