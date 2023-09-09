import React, {useState, useEffect, Suspense} from 'react';
import AuthPage from './pages/auth-page/auth-page';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContextProvider';
import './18n'


function App() {
    return(
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <AuthContextProvider>
                    <BrowserRouter>
                        <Navbar/>
                        <AppRouter/>
                    </BrowserRouter>
                </AuthContextProvider>
            </Suspense>
        </div>
    )
}

export default App;