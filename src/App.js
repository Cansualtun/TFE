import React from 'react'
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Logos from '../src/assets/logos.svg'
import About from './components/About';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/Analytics' element={<Analytics/>} />
        <Route path='/Newsletter' element={<Newsletter/>} />
        <Route path='/Cards' element={<Cards/>} />
        <Route path='/About' element={<About/>} />
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
