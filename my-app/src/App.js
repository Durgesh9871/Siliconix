import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './AllRoutes/Routes';
import Navbar from './Routes/Navbar';
import Footer from './Routes/Footer';
//* by Danish Pinjari
import cartStore from './Danish Pinjari/store/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<div className="App">
			<Provider store={cartStore}>
				<Navbar />
			</Provider>
			<AllRoutes />
	<Footer />
			
		</div>
	);
}

export default App;
