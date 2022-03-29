import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { loginPostApi, signupPostApi } from "../Helper/Api/api";
import { authReducer } from "../Reducer/authReducer";
import { authActions } from "../Reducer/contant";
import { useNavigate } from "react-router-dom";

const initialState = {
  token: JSON.parse(localStorage.getItem("jwtToken"))?.token || "",
  isAuth: JSON.parse(localStorage.getItem("jwtToken"))?.isAuth || false,
};

const authContext = createContext("test");

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  console.log("authState", authState);
  const navigate = useNavigate();

  const Login = async (email, password) => {
    try {
      const response = await axios.post(loginPostApi, { email, password });
      console.log(response);
      if (response.status === 200) {
        const { encodedToken } = response.data;

        localStorage.setItem(
          "jwtAuth",
          JSON.stringify({ token: encodedToken, isAuth: true })
        );
        authDispatch({
          type: authActions.LOGIN,
          payload: {
            token: encodedToken,
            isAuth: true,
          },
        });
        navigate("/");
      }
    } catch (error) {
      console.log("its error", error.message);
      console.log(" error in details", error);
    }
  };
  const Signup = async (email, password, firstName, lastName) => {
    try {
      const response = await axios.post(signupPostApi, {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response);

      if (response.status === 201) {
        const { encodedToken } = response.data;
        console.log(encodedToken);

        localStorage.setItem(
          "jwtAuth",
          JSON.stringify({ token: encodedToken, isAuth: true })
        );
        authDispatch({
          type: authActions.LOGIN,
          payload: {
            token: encodedToken,
            isAuth: true,
          },
        });
        navigate("/");
      }
    } catch (error) {
      console.log("its error", error.message);
    }
  };
  const Logout = () => {
    authDispatch({
      type: authActions.Logout,
    });

    localStorage.removeItem("jwtAuth");
  };

  return (
    <authContext.Provider
      value={{ authState, authDispatch, Login, Logout, Signup }}
    >
      {children}
    </authContext.Provider>
  );
};
