import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../LayOut/MainLayout";

const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:"",
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])
export default Route