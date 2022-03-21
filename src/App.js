import "./App.css";
import { Navbar } from "./Component/index";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRouters";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
