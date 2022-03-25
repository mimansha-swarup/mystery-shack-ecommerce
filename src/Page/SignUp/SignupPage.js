import "../Login/LoginPage.css";                                                                                          
import { BiUserPlus, BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignupPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState({password:false,confirmPassword:false});
  const [credential, setCredential] = useState({});
  const handleTogglePasswordVisbility = (key) => setIsPasswordVisible({...isPasswordVisible,[key]:!isPasswordVisible[key]});
  const handleLoginFormSubmit = (event) =>{
    event.preventDefault();
    console.log("event")
    const emailDetails =  event.target.email
    const passwordDetails =  event.target.password
    const confirmPasswordDetails =  event.target.confirmPassword
    
    setCredential({email:emailDetails,password:passwordDetails,confirmPassword:confirmPasswordDetails})
    
    // TODO: - Authentiaction Part
  }
  return (
    <main className="authentication-body flex center">
      <div className="card authentication-container ">
        <h3 className="headline3 bold text-center">
          Signup <BiUserPlus className="react-icons " />
        </h3>
        <form className="form-group">
          <div className="input-group">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              title="your email for eg: neog@neog.com"
              pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$"
            />
          </div>
          <div className="input-group">
            <input
              required
              type={isPasswordVisible.password ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              title="must contains one digit, Lower-case and Upper-case characters, one special character, minimum  length of 8 characters"
              pattern="abc"
            />
            {isPasswordVisible.password ? (
              <BiHide
                onClick={()=>handleTogglePasswordVisbility("password")}
                className="react-icons password-icon"
              />
            ) : (
              <BiShow
                onClick={()=>handleTogglePasswordVisbility("password")}
                className="react-icons password-icon"
              />
            )}
          </div>
          <div className="input-group">
            <input
              required
              type={isPasswordVisible.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              title="must simmilar to password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20}"
            />
            {isPasswordVisible.confirmPassword ? (
              <BiHide
                onClick={()=>handleTogglePasswordVisbility("confirmPassword")}
                className="react-icons password-icon"
              />
            ) : (
              <BiShow
                onClick={()=>handleTogglePasswordVisbility("confirmPassword")}
                className="react-icons password-icon"
              />
            )}
          </div>
     

          <button type="submit" className="btn btn-contained purple">
            LOG IN
          </button>
          <Link to="/Login" className="subtitle1 text-center">
            Already Have Account ?
          </Link>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
