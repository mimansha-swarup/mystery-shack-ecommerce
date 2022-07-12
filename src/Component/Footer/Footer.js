import { NavBrandImg } from "../../assets";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer gap-1">
      <div className="footer-brand flex flex-column center">
        <Link to="/">
          <img className="brand-logo" src={NavBrandImg} alt="MysteryShack" />
        </Link>
      <h2 className="headline2mb-0">Mystery Shacks</h2>
        <p className="subtitle2 text-black-01 footer-description">
          Mystery Shack is the ultimate destination for fashion and lifestyle.
           You can shop online at Mystery Shack from the comfort
          of your home and get your favourites delivered right to your doorstep.
        </p>
        <div className="footer-icons mt-1">
          <a href="https://github.com/mimansha-swarup" target="_blank" rel="noopener noreferrer">

          <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/mimansha-swarup/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/n00bcoder/" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
          </a>
          <AiOutlineInstagram />
        </div>

        
      </div>
        {/* 
        <div className="footer-icons">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiOutlineTwitter />
          <AiOutlineInstagram />
        </div> */}

      {/* <div className="footer-actions-container">
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
      </div> */}
    </footer>
  );
};

export default Footer;
