import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Enroll from './Enroll';
import Navbar from './Navbar';
import Footer from './Footer';
import Homecontact from './Homecontact';
import Freqasked from './Freqasked';
import Choose from './Choose';
import Knowmore from './Knowmore';
import { Routes, Route, Navigate } from 'react-router-dom';





const App = () => {
    return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" element = {<Home/>} />
    <Route exact path="/about" element = {<About/>} />
    <Route exact path="/service" element = {<Service/>} />
    <Route exact path="/contact" element = {<Contact/>} />
    <Route exact path="/enroll" element = {<Enroll/>} />
    <Route exact path="/homecontact" element = {<Homecontact/>} />
    <Route exact path="/freqasked" element = {<Freqasked/>} />
    <Route exact path="/choose" element = {<Choose/>} />
    <Route exact path="/knowmore" element = {<Knowmore/>} />
<Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer/>
     </>
    );

};
export default App;

