import React from 'react';
// import {Header, Footer, Blog, Download, Provider, Service, Testimonial, } from './containers';
import {Header, Service, Provider, Download, Testimonial, Blog, Footer} from './containers';
import {Navbar} from './components';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
	return (
        <>
		<Navbar />
        <Header />  
        <Service />
        <Provider />
        <Download />
        <Testimonial />
        <Blog />
        <Footer />
        {/* <Header />
        <button className='button'>
            Click Me
        </button>
        <h1 className="title">
            Hello World 
        </h1>
         */}
        </>
    )
};

export default App;