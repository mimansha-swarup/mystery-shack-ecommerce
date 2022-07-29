import "./App.css";
import { Navbar, ToastContainer } from "./Component";
import ScrollToTop from "./Helper/ScrollToTop";
import AllRoutes from "./Routes/AllRouters";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
