import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestraunantMenu from "./components/RestraunantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestraunantCart from "./components/RestraunantCart";
import UserContext from "./utils/UserContext";
import Grocery from "./components/Grocery";
import { useEffect, useState } from "react";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout = () => {
    const [userInfo ,setUserInfo] = useState();

    // const handleClick = () => {
    //     return(
    //         <div className="flex ">
    //             <h3>Compnents</h3>
    //             <h3>utils</h3>
    //         </div>
    //     )
    // };
    useEffect(()=>{
       const data ={
            name:"Prabha Kiran",
       }
         setUserInfo(data.name);
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userInfo, setUserInfo}}>
                <div id="applayout" className="app">   
                  <Header />
                  <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    
    // <div>
    //     <div className="flex cursor-pointer" >
    //         <span onClick={handleClick}>+</span>
    //         <h3>src</h3>
    //     </div> 
          
    // </div>
    )


}



// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />,
//         errorElement:<Error />
//     },
//     {
//       path: "/about",
//       element: <About />
//     }
// ]);
 const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/cart",
                element:<Cart />,
            },
            
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:<Grocery />,
            },   
            {
                path:"/restaurants/:resId",
                element:<RestraunantMenu />,
            }
            
        ],
        errorElement:<Error />
    },

 ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);