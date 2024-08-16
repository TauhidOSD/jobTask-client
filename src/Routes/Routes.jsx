import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Registation from "../Components/Pages/Registation/Registation";
import Products from "../Components/Products/Products";
 
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/registration',
            element:<Registation/>
        },

        
        {
          path:'/products',
          element: <Products></Products>,
          loader: () => fetch('http://localhost:5000/productCount')
          
        }
        
      ]
    },
  ]);
  export default router;