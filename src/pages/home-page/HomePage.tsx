import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"
interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {
    return ( 
        <div className="home-page">
            <Typography variant='h2' component={"div"} gutterBottom className=''>
                Вітання
            </Typography>
            <Link to={'/authorization'} className="home-page__link">Вхід</Link>
        </div>
    );
}
 
export default HomePage;