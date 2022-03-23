import "./App.css";
import { Navbar } from "./Component/index";
import AllRoutes from "./Routes/AllRouters";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
