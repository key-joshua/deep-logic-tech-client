import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/Caroursel/Carousel'
import Blogs from './components/blog/Blogs/Blogs';



function App() {
	return (
		<> 
		<Navbar/>
		<Carousel/>
		<Blogs/>
		</>
	);
}

export default App;
