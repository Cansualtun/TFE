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
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp' ;
import LogIn from './components/LogIn' ;  
import Blog from './components/Blog' ; 
import PrivacyPolicy  from './components/PrivacyPolicy';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Hero/>} />
        <Route path='/Analytics' element={<Analytics/> } />
        <Route path='/Newsletter' element={<Newsletter/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Liste' element={<Liste/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route exact path='/SignUp' element={<SignUp/>} />
        <Route exact path='/LogIn' element={<LogIn/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />

      </Routes>
      <Footer/>
      </AuthContextProvider>
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
