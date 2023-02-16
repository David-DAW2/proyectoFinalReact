import './css/App.css';
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import ErrorPage from "./routerNav/ErrorPage";
import Home from "./routerNav/Home";
import Edicion from "./routerNav/Edicion";
import Listado from "./routerNav/Listado";
import Formalta from "./routerNav/Formalta";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/edicion",
        element: <Edicion />,
        errorElement: <ErrorPage />,
    },
    {
        path: "listado",
        element: <Listado />,
        errorElement: <ErrorPage />,
    },
    {
        path: "Formalta",
        element: <Formalta />,
        errorElement: <ErrorPage />,
    }

]);

function App() {

    return (
        <RouterProvider router={router} />
    );

}


export default App;
