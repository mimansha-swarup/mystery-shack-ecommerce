import { Link } from "react-router-dom";
import { NavBrandImg } from "../../assets";
import "./Navbar.css";
import { BsHeart, BsBag, BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  const toggleDrawer= () => setIsDrawerOpen(prevIsDrawerOpen=>isDrawerOpen?false:true)
  return (
    <header className="navbar">
      {/* <Link className="navbar-brand text-purple-00 ">Mystery Shacks</Link> */}
      <div className="navbar-brand text-purple-00 ">
        <img src={NavBrandImg} alt="navbrand" />
      </div>

      <div className="drawer">


        <AiOutlineMenu className="drawer nav-icons" onClick={toggleDrawer} />
        {
          isDrawerOpen? (
            
        <ul>
          <li className="headline4" >
            Login
          </li>
          <li className="headline4" >
            Cart
          </li>
          <li className="headline4" >
            Wishlist
          </li>
        </ul>

          ):null
        }
      </div>
     

      <div className="search-box mr-3">
        <input type="text" name="search-box" id="search" placeholder="search" />
        <BsSearch className="nav-icons" />
      </div>
      <nav className="flex ">
        <div className=" mr-1 grey-color flex flex-column center">
          <div className="badge-wrapper">
            <BsHeart className="nav-icons" />
            <div className="badge top-right red">0</div>
          </div>
          <span className=" small-text">Wishlist</span>
        </div>

        <div className="grey-color flex flex-column center">
          <div className=" grey-color badge-wrapper">
            <BsBag className="nav-icons" />
            <div className="badge top-right red">0</div>
          </div>
          <span className=" small-text">Cart</span>
        </div>

        <button className="btn btn-outline purple ml-2">Login</button>
      </nav>
    </header>
  );
};

export default Navbar;
