import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./AllRoutes/Routes";
import Navbar from "./Routes/Navbar";
import Footer from "./Routes/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
