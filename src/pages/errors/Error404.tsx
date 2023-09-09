import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Error.css"

export const Error404 = () => {
    const { t } = useTranslation()
    return(
        <div className="error">
            <div className="error__data">
                <div className="error__icon"></div>
                <Typography className='error__text' variant='h3' component={"div"} gutterBottom >
                    {t("error_404")}
                </Typography>
                <Link to={'./authorization'}> {t("error_link")}</Link>
            </div>
        </div>
    )
}

export default Error404;