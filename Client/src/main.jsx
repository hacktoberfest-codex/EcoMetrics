import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import Layout from "./Components/Layout/Layout.jsx";
import About from "./Components/About/About.jsx";
import Login from "../src/Auth/Login.jsx";
import {SignUp} from "./Auth/SignUp.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "About",
                element: <About />,
            }

        ],
    },
    {
        path: '*',
        element: <div>Not Found</div>,
    },
    {
        path: "/SignUp",
        element: <SignUp/>,
    },

    {
        path:'Login',
        element: <Login/>
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
