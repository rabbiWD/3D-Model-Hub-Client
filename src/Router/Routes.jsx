import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import AddModels from "../Pages/AddModels/AddModels";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import PrivateRoute from "./PrivateRoute";
import MyModel from "../Pages/MyModel/MyModel";
import MyDownloads from "../Pages/MyDownloads/MyDownloads";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: ()=> fetch('https://3d-model-hub-server-three.vercel.app/latest-models')
            },
            {
                path: '/all-models',
                element: <AllModels />,
                loader: ()=> fetch('https://3d-model-hub-server-three.vercel.app/models')
            },
            {
                path: '/add-model',
                element: (
                    <PrivateRoute>
                        <AddModels />
                    </PrivateRoute>
                )
            },
            {
                path: '/model-details/:id',
                element:  (
                    <PrivateRoute>
                        <ModelDetails/>
                    </PrivateRoute>
                ),
            },
             // loader: ({params})=> fetch(`http://localhost:3000/models/${params.id}`, {
                //     headers: {
                //         authorization: 'hello'
                //     }
                // })
            {
                path: '/my-models',
                element:  (
                    <PrivateRoute>
                        <MyModel/>
                    </PrivateRoute>
                ),
            },
            {
                path: '/my-downloads',
                element:  (
                    <PrivateRoute>
                        <MyDownloads/>
                    </PrivateRoute>
                ),
            },
                
            {
                path: '/update-model/:id',
                element: (
                    <PrivateRoute>
                         <UpdateModel/>
                    </PrivateRoute>
                ),
                loader: ({params})=> fetch(`https://3d-model-hub-server-three.vercel.app/models/${params.id}`)
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