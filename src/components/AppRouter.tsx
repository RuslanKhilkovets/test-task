import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/routes";
import AuthContext from "../context/AuthContext";
import { AuthContextProvider } from "../context/AuthContextProvider";
import { useContext } from "react";


const AppRouter = () => {
    const context = useContext(AuthContext)
    return (
        <>
            {
                context.isAuth 
                ?
                <Routes>
                    {privateRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={<route.component />}
                            path={route.path}
                        />
                ))}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map((route) => (
                        <Route
                            key={route.path}
                            element={<route.component />}
                            path={route.path}
                        />
                    ))}
                </Routes>
            }
        </>
        
    );
};

export default AppRouter;