import "./LoginPage.css";
import { BiLogIn, BiShow, BiHide } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context";
const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisbility = () =>
    setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);

  const { Login } = useAuth();

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    const emailDetails = event.target.email.value;
    const passwordDetails = event.target.password.value;

    Login(emailDetails, passwordDetails);
  };
  return (
    <main className="authentication-body flex center">
      <div className="card authentication-container ">
        <h3 className="headline3 bold text-center">
          Login <BiLogIn className="react-icons " />
        </h3>

        <form className="form-group" onSubmit={handleLoginFormSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              title="your email for eg: neog@neog.com"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$"
            />
          </div>
          <div className="input-group">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            {isPasswordVisible ? (
              <BiHide
                onClick={handleTogglePasswordVisbility}
                className="react-icons password-icon"
              />
            ) : (
              <BiShow
                onClick={handleTogglePasswordVisbility}
                className="react-icons password-icon"
              />
            )}
          </div>
          <div className=" flex  space-between">
            <span className="flex ">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </span>
            <Link to="./forgot-password" className="btn btn-text teal">
              Forgot Your Password?
            </Link>
          </div>

          <button type="submit" className="btn btn-contained purple">
            LOG IN
          </button>

          <Link to="/signup" className="subtitle1 text-center">
            Create New Account <IoIosArrowDropright className="react-icons " />
          </Link>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
