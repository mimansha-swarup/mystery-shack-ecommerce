import { error404 } from "../../assets";
import { Link } from "react-router-dom";

import "./ErrorPage.css";
import { Footer } from "../../Component";

const Error404Page = () => {
  return (
    <>
    <main className="error-body">
      <h1 className="headline1 text-center mb-0 mt-2 bold ">Oops!!! You Found Me</h1>
      <h3 className="headline3 text-center mb-0 ">You have came too far</h3>
      <div className="flex flex-column center">
        <Link to="/">
          <button className="btn btn-contained purple">Go Back</button>
        </Link>
      <img src={error404} className="width-half" alt="eror404image" />
      </div>
    </main>
      <Footer/>
    </>
  );
};

export default Error404Page;
