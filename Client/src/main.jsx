import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from "./Components/Layout/Layout.jsx";
import About from "./Components/About/About.jsx";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path = "/" element = {<Layout/>}>
            <Route path = "/about" element = {<About/>}/>
        </Route>
    )


)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
