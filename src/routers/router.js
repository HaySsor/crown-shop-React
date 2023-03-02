import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/cart/cart.component";
import Home from "../pages/home/home.component";
import LoginPage from "../pages/login-page/login-page.component";
import Shop from "../pages/shop/shop.component";
import CategoriesPreview from "../pages/categories-preview/categories-preview.component";
import Category from '../pages/category/category.component'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'shop/*',
                element: <Shop />,
                props: true,
                children: [
                    {
                        index: true,
                        element: <CategoriesPreview />
                    },
                    {
                        path:':category',
                        element : <Category />
                    }
                ]
            },
            {
                path: 'sing-in',
                element: <LoginPage />
                // mozna dodawac propsy do elementow w ruterze jak do zwyklego componentu np <SingIn kotek="kotek" /> 
                // i wyświetlać to na stronie 
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    }
])


export default router