import { useContext } from "react";
import "./App.css";
import { Navbar, ToastContainer } from "./Component/index";
import AllRoutes from "./Routes/AllRouters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ToastContainer/>
    </div>
  );
}

export default App;
