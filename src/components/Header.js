import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
    // let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg p-4 sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo">
                <img alt="logo" src={LOGO_URL} className="w-56"/>
            </div>
            <div className="flex items-center">
             <ul className="flex p-2 m-2 ">
                <li className="px-2">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-2"> <Link to="/">Home</Link></li>
                <li className="px-2"> 
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-2"> Sign In</li>
                <li> 
                 <Link to="/contact" className="px-2">Contact Us </Link> 
                </li>
                <li> 
                 <Link to="/grocery" className="px-2">Grocery</Link> 
                </li>
                <li> 
                 <Link to="/cart" className="px-2">Cart({cartItems.length})</Link> 
                </li>
                <button className="login" 
                onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                    }}>
                {btnName}
            </button>
            <li>{loggedInUser}</li>
             </ul>
            </div>
        </div>
    )
};

export default Header;