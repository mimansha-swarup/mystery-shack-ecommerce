import { NavBrandImg } from "../../assets";
import { AiFillGithub ,AiFillLinkedin,AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer gap-1">
      <div className="footer-brand flex flex-column center">
        <a href="/">
          <img
            className="brand-logo"
            src={NavBrandImg}
            alt="MysteryShack"
          />
        </a>
        
          <h2 className="headline2" >Mystery Shacks</h2>
          <div className="footer-icons ">
            <AiFillGithub/>
            <AiFillLinkedin/>
            <AiOutlineTwitter/>
            <AiOutlineInstagram/>
          </div>
      
      </div>

      <div className="footer-actions-container">

      
      <div className="footer-actions">
       
          <h6 className="headline6">About</h6>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Corporate </a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
          </ul>
        </div>
      <div className="footer-actions">
       
          <h6 className="headline6">Pages</h6>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      <div className="footer-actions">
       
          <h6 className="headline6">Help</h6>
          <ul>
            <li>
              <a href="/">Payments</a>
            </li>
            <li>
              <a href="/">Shipping</a>
            </li>
            <li>
              <a href="/">Cancellation</a>
            </li>
            <li>
              <a href="/">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-actions ">
          <h6 className="headline6">Information</h6>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Security</a>
            </li>
          </ul>
        </div>
   
      </div>
        
  
    </footer>
  );
};

export default Footer;
