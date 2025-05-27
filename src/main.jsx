import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import './index.css'
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";
import {BlogContextProvider} from "./context/Context";
import NotFound from "./components/NotFound";
import ErrorBlog from "./components/ErrorBlog";

const router = createBrowserRouter([
    { path: '/', element: <App />},
    {path: '/add-blog' , element: <AddBlog /> },
    {path: '/all-blogs/:id' , element: <BlogDetail  /> ,  errorElement: <ErrorBlog />},
    {path : "*" , element: <NotFound />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BlogContextProvider>
            <RouterProvider router={router} />
        </BlogContextProvider>

    </React.StrictMode>
)