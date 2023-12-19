import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDispatch,useSelector } from "react-redux";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Explore from "./Pages/Explore/Explore";
import Categories from './Pages/Categories/Categories';
import About from "./Pages/About/About";
import CompanyRegister from "./Pages/CompanyRegister/CompanyRegister";
import "./App.css";
import { useEffect } from "react";
import saveUserInfoIntoLocalStorag, { getUserInfoFromLocalStorage } from "./Store/userInfo-actions";
let isFirstTime = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "explore", element: <Explore /> },
      { path: "categories", element: <Categories /> },
      { path: "login", element: <Login /> },
      { path: "user-register", element: <Register /> },
      { path: "company-register", element: <CompanyRegister />},
    ],
  },
]);



function App() {
  const dispatch=useDispatch();
  const userInfo=useSelector((state)=>state.userInfo)


  //send & recieve data from localStorage
  useEffect(()=>{
    if (isFirstTime) {
      isFirstTime = false;
      return;
    }
    dispatch(saveUserInfoIntoLocalStorag(userInfo))
    
  },[dispatch,userInfo]);

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("userInfo"))){
      dispatch(getUserInfoFromLocalStorage());
    } 
  },[dispatch]);




    const queryClient= new QueryClient();
    return <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>;
  }

export default App;
