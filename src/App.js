import React from 'react';
import './App.scss';
import Navbar from './components/city-tours/Navbar/Navbar';
import TourList from './components/city-tours/TourList';

function App() {
	return (
		<main>
			<Navbar />
			<TourList />
		</main>
	);
}

export default App;
