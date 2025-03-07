import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Info from './pages/Info'
import Calculator from './pages/Calculator'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/Info' element={<Info />} />
				<Route path='/Calculator' element={<Calculator />} />
			</Routes>
		</Router>
	);
}

export default App;