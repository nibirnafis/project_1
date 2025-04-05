import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Products from "../Components/Products";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import UserProfile from "../Components/UserProfile";
import MyOrders from "../Components/MyOrders";
import ManageProducts from "../Components/ManageProducts";
import ProductDetail from "../Components/ProductDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
            {
                path: '/product-detail/:id',
                element: <ProductDetail></ProductDetail>,
                loader: ({params}) => fetch(`https://project-1-back-end-7lux.onrender.com/product-detail/${params.id}`)
            },
            {
                path: '/profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/manage-products',
                element: <ManageProducts></ManageProducts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
        ]
    }
])


const Routes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;