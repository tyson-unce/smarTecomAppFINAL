import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Products from './components/Products';
import AppComponent from './components/AppComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='body'>
			<Router>
				<Navbar id='nav' />
				<Routes>
					<Route path='/' element={<AppComponent />} />
					<Route path='/products' element={<Products />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
			<main></main>
			<Footer />
		</div>
	);
}

export default App;
