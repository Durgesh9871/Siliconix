import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/Routes'; 
import { Navbar } from './AllRoutes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    
    </div>
  );
}

export default App;
