import React from 'react'
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Logos from '../src/assets/logos.svg'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <img height={70} width={70} src='{logos}' alt='logos'/>
    </div>
  );
}

export default App;
