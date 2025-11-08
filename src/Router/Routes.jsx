import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import AddModels from "../Pages/AddModels/AddModels";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('http://localhost:3000/latest-models')
            },
            {
                path: '/all-models',
                element: <AllModels />,
                loader: ()=> fetch('http://localhost:3000/models')
            },
            {
                path: '/add-model',
                element: <AddModels />
            },
            {
                path: '/model-details/:id',
                element:  <ModelDetails/>,
                loader: ({params})=> fetch(`http://localhost:3000/models/${params.id}`)
            },
            {
                path: '/update-model/:id',
                element: <UpdateModel/>,
                loader: ({params})=> fetch(`http://localhost:3000/models/${params.id}`)
            },
            {
                path: '/auth/register',
                element: <Register/>,
            },
            {
                path: '/auth/login',
                element: <Login/>,
            },
            
        ]
    }
])