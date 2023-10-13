import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"
import { useSelector } from "react-redux";
// import useOnlineStatus from "../utility/useOnlineStatus";
// import { useSelector } from "react-redux";
const Header = () => {
  const [button, setButton] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
 
  return (
    <div className="header">
      
            <img
            id="imghead"
            alt="sorry"
            src="https://www.indianbodybuilding.co.in/products/wp-content/uploads/2015/08/Flipkart-Logo.png"
            />
    
      <ul className="niveitem">
    
      
        <li>
         
        <Link className="text-link" to="/Cart">
        
          
          🛒({Object.keys(cartItems).length})
        </Link>
        </li>
        <li >
        <Link className="text-link" to="/">
            Home
            </Link>
        </li>

        <button
          className="btn-login"
          onClick={() => {
            button === "Login" ? setButton("LogOut") : setButton("Login");
          }}
        >
          {button}
        </button>
      </ul>
    </div>
  );
};
export default Header;
