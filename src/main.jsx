import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import './index.css'
import AddBlog from "./pages/AddBlog";
import AllBlogs from "./pages/AllBlogs";
import BlogDetail from "./pages/BlogDetail";
import {BlogContextProvider} from "./context/Context";

const router = createBrowserRouter([
    { path: '/', element: <App />},
    {path: '/add-blog' , element: <AddBlog /> },
    { path: '/all-blogs' , element: <AllBlogs />,},
    {path: '/all-blogs/:id' , element: <BlogDetail  /> ,  errorElement: <div>Naaa</div>},
    {path : "*" , element: <div>Noo</div>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BlogContextProvider>
            <RouterProvider router={router} />
        </BlogContextProvider>

    </React.StrictMode>
)