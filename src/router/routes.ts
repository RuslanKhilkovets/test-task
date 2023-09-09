import AuthPage from "../pages/auth-page/auth-page";
import Error404 from "../pages/errors/Error404";
import Error500 from "../pages/errors/Error500";

import HomePage from "../pages/home-page/HomePage";
import PDFreader from "../pages/pdf-reader/PDFViewer";
import PDFreaderPage from "../pages/pdf-reader/PDFreaderPage";
import SortingForm from "../pages/sorting-page/SortingForm";

interface IRoutes {
    path: string;
    component: React.FunctionComponent;
}

export const privateRoutes: IRoutes[] = [
    { path: '/', component: HomePage },
    { path: '/pdf-reader', component: PDFreaderPage },
    { path: '/sorting-form', component: SortingForm },
    { path: '/server-error', component: Error500 },
    { path: '*', component: Error404 },
];

export const publicRoutes: IRoutes[] = [
    { path: '/', component: HomePage },
    { path: '/authorization', component: AuthPage },
    { path: '*', component: Error404 },
]
