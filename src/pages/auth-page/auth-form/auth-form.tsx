import React, { useState, useContext, useEffect } from 'react';
import './auth-form.css';
import { Button, TextField, Typography, Link as MuiLink } from '@mui/material';
import { useForm, SubmitHandler, Controller, useFormState } from 'react-hook-form';
import { emailValidation, passwordValidation } from './validation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";

interface ISignInForm {
    emailField: string;
    passwordField: string;
}

export const AuthForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm<ISignInForm>({ mode: "onBlur" });
    const { errors } = useFormState({
        control
    });

    const [showPassword, setShowPassword] = useState(false);
    const [passwordField, setPasswordField] = useState(true);
    const [validCaptcha, setValidCaptcha] = useState(false)

    const context = useContext(AuthContext);
    const changeIsAuth = context?.changeIsAuth;
    const isAuth = context?.isAuth;

    useEffect(() => {
        console.log("useEffect triggered");
        const isUserAuthenticated = localStorage.getItem("isAuth") === "true";
        console.log("isUserAuthenticated:", isUserAuthenticated);
    
        if (isUserAuthenticated) {
            changeIsAuth()
            navigate('/sorting-form');
        }
    }, []);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        setPasswordField(!passwordField);
    };

    const password = import.meta.env.VITE_REACT_API_PASSWORD;
    const email = import.meta.env.VITE_REACT_API_EMAIL;

    const onSubmit: SubmitHandler<ISignInForm> = (data) => {
        if (data.emailField === email && data.passwordField === password && validCaptcha) {
            changeIsAuth();
            localStorage.setItem("isAuth", "true");
            navigate('/sorting-form');
        } else {
            return;
        }
    }

    const onCaptchaValidate = () => {
        setValidCaptcha(!validCaptcha)
    }

    return (
        <div className='auth-form'>
            <div className="auth-form__container">
                <Typography variant='h3' component={"div"} gutterBottom >
                    {t("auth")}
                </Typography>
                <Typography variant='h6' component={"div"} gutterBottom className='auth-form__subtitle1'>
                    {t("logInTitle")}
                </Typography>
                <form className='auth-form__form' onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name='emailField'
                        render={({ field }) => (
                            <TextField
                                label={"Email"}
                                size={"medium"}
                                className='auth-form__input'
                                margin='normal'
                                fullWidth
                                {...field}
                                error={!!errors.emailField?.message}
                                helperText={errors.emailField?.message}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="passwordField"
                        render={({ field }) =>
                            <TextField
                                label={"Пароль"}
                                type={passwordField ? "password" : "text"}
                                size={"medium"}
                                className='auth-form__input'
                                margin='normal'
                                fullWidth
                                {...field}
                                error={!!errors.passwordField?.message}
                                helperText={errors.passwordField?.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={togglePasswordVisibility}
                                                edge="end"
                                                aria-label="toggle password visibility"
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    startAdornment: (
                                        <IconButton
                                            edge="start"
                                        >
                                            <LockOutlinedIcon/>
                                        </IconButton>
                                    )
                                }}
                            />
                        }
                    />
                    <Typography variant='h4'>{}</Typography>
                    <Typography variant="body1" sx={{
                        display: 'flex', justifyContent: 'flex-end', width: "100%"
                    }}>
                        <MuiLink href="#" rel="noopener noreferrer" sx={{
                            fontSize: 14,
                            textAlign: "right",
                        }}>{t("forgetPassword")}</MuiLink>
                    </Typography>
                    <ReCAPTCHA sitekey="6Lda9gsoAAAAAApk1qQAT_rmEQBy5miE7QX4o-_B" onChange={() => onCaptchaValidate()}/>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size='large'
                        disableElevation
                        sx={{
                            marginTop: 3,
                            textTransform: "capitalize",
                        }}
                    >
                        {t("logInButtonText")}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default AuthForm;
