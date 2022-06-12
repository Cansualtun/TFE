import React from 'react'
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import Services from './components/Services' ; 
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Logos from '../src/assets/logos.svg'
import About from './components/About';
import Liste from './components/Liste';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/Analytics' element={<Analytics/> } />
        <Route path='/Newsletter' element={<Newsletter/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Liste' element={<Liste/>} />
      </Routes>
      {/*<Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <About/>*/}

      <img height={70} width={70} src='{logos}' alt='logos'/>
    </>
  );
}

export default App;
