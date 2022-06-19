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

  const { emailDetails, passwordDetails } = {
    emailDetails: "mactavish@gmail.com",
    passwordDetails: "mactavishsoap",
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

          <button type="submit" className="btn btn-contained purple">
            LOG IN
          </button>

          <div className=" flex  center">
            <button
              className="btn btn-text purple text-on-button"
              onClick={() => Login(emailDetails, passwordDetails)}
            >
              Login as Guest
            </button>
          </div>
          <hr className="line-horz mt-0 mb-0" />
          <Link to="/signup" className="subtitle1 text-center">
            Create New Account <IoIosArrowDropright className="react-icons " />
          </Link>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
