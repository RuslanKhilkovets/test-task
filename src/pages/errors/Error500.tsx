import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';


const Error500: React.FC = () => {
    return (
        <div className="error">
            <div className="error__data">
                <div className="error__icon"></div>
                <Typography className='error__text' variant='h3' component='div' gutterBottom>
                    Помилка підключення до сервера
                </Typography>
                <Link to='./authorization'>Перейти на сторінку входу</Link>
            </div>
        </div>
    );
}

export default Error500;