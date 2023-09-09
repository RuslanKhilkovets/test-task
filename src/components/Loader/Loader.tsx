import * as React from 'react';
import "./Loader.css"

 
const Loader: React.FunctionComponent = () => {
    return (
        <div className="loader">
            <span className="loader__item"></span>
            <span className="loader__item"></span>
            <span className="loader__item"></span>
        </div>
    );
}
 
export default Loader;