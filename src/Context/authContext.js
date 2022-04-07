import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { loginPostApi, signupPostApi } from "../Helper/Api/api";
import { authReducer } from "../Reducer/authReducer";
import { authActions } from "../Reducer/contant";
import { useNavigate } from "react-router-dom";
import { useToast } from "./toastContext";

const initialState = {
  token: JSON.parse(localStorage.getItem("jwtAuth"))?.token || "",
  isAuth: JSON.parse(localStorage.getItem("jwtAuth"))?.isAuth || false,
};

const authContext = createContext("test");

export const useAuth = () => useContext(authContext);

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const navigate = useNavigate();
  const { setToastData } = useToast();

  const Login = async (email, password) => {
    try {
      const response = await axios.post(loginPostApi, { email, password });

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
      console.error("its error", error.message);
      console.error(" error in details", error);
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
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

      if (response.status === 201) {
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
      console.error("its error", error.message);
      setToastData((prevToastData) => [
        ...prevToastData,
        { type: "error", message: error.message },
      ]);
    }
  };
  const Logout = () => {
    localStorage.removeItem("jwtAuth");
    authDispatch({
      type: authActions.Logout,
    });

  };

  return (
    <authContext.Provider
      value={{ authState, authDispatch, Login, Logout, Signup }}
    >
      {children}
    </authContext.Provider>
  );
};
