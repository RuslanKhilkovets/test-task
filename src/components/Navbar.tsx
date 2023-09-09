import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import AuthContext from '../context/AuthContext';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Navbar: React.FunctionComponent = () => {
    const context = useContext(AuthContext)
    const { t, i18n } = useTranslation();
    const { isAuth } = useContext(AuthContext)
    const handlerExit = () => {
        const changeIsAuth = context?.changeIsAuth;
        changeIsAuth();
        localStorage.removeItem("isAuth")
    }
    const changeLanguage = (language: string): void => {
        i18n.changeLanguage(language);
    };
    
    return (
        <div className="navbar">

           {
            isAuth && <Link to={'/'} onClick={() => handlerExit()}>Exit</Link>
           }
           
            <Button onClick={() => changeLanguage("en")}>EN</Button>
            <Button onClick={() => changeLanguage("uk")}>UK</Button>
        </div>
    );
}

export default Navbar;