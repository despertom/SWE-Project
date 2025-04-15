import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Info from './pages/Info'
import Calculator from './pages/Calculator'
import Result from './pages/Result'

const App = () => {
	return (
		<Router>
			{/* <Navbar /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/info' element={<Info />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/result' element={<Result />} />
			</Routes>
		</Router>
	);
}

export default App;