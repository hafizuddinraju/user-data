import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Layout/Main";
import Team from "../components/Team/Team";

export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,
children:[
    {path:'/team', element:<Team></Team>},
    {path:'/', element:<Home></Home>},
]
}
])