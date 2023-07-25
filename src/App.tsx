import Home from "./pages/Home/home"
import Navbar from "./components/navbar/navbar";
import Footer from './components/footer/footer.js';
import Product from "./pages/Product/product";
import User from "./pages/Users/user";
import Menu from "./components/menu/menu.js";
import Login from "./pages/Login/login.js";
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const App = () => {

  const Layout = () =>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menucontainer">
            <Menu />
          </div>
          <div className="contentcontainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
 {
  path:"/",
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/user",
      element:<User />
    },
    {
      path:"/product",
      element:<Product />
    }
  ]

 },
 {
  path:"/login",
  element: <Login />
 }
 

]);
  return (
    <RouterProvider router={router} />
  )
}

export default App