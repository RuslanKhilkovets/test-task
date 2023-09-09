import React, { FunctionComponent } from "react";
import './auth-page.css'
import { Typography } from "@mui/material";
import AuthForm from "./auth-form/auth-form";
interface AuthPageProps {
    
}
 
const AuthPage : FunctionComponent<AuthPageProps> = () => {
    return ( 
        <div className="auth-page">
            <AuthForm/>
        </div>
    );
}
 
export default AuthPage;