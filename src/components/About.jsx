import src from 'daisyui';
import React from 'react'
import Meirl from '../assets/meirl.png'
import Mgpp from '../assets/mgpp.png'

const About = () => {
  return (
    <div className='text-white font-[Bilo] '>
        <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-40 py-20 text-center flex flex-col mt-4 '>
          <h1 className='md:text-5xl sm:text-2xl text-size-[40px] font-bilo md:py-6'>
              All About "TradeForEveryone"
          </h1>

          <div className=' grif justify items-center text-left'>
              <p className='md:text-2xl sm:text-1xl text-2xl font-bilo py-4'>
                  The purpose of this website is to publish algorithm trade educational content about trading and market research.  Most of the discussion will be around the Futures trading in both cryptocurrency and legacy markets If you have any further questions about from about us or are considering the purchase of TradeForEveryOne, 
                  You can contact us at info@tradeforeveryone.com
                  If you want to get to know us better please read!</p>
             </div> 
         </div>
    <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-40 py-20 text-center flex'> 
         <div className='max-w-[500px] mt-[-96px] w-full shadow-xl bg-[#3d1673] p-3 my-12 rounded-xs hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-full' src={Meirl} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Kurucu Ortak</h2>
              <p className='text-center text-4xl font-bilo'></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Cansu ALTUN</p>
                  <p className='py-2 border-b mx-8 mt-8'>Eğitim hayatını marmara üniversitesinde mühendislik alanında tamamladıktan sonra ilgi alanı olan finans ve yazılıma yöneldi.</p>
                  <p className='py-2 border-b mx-8 mt-8'>Edindiği tecrübeler sonucu bu siteyi kurmaya karar verdi.</p>
                  <a href="mailto:altuncansu98@gmail.com">
                  <button class="btn btn-outline bg-purple-400 text-white mt-20">Contact Me</button>
                  </a>           
              </div>
            </div>
            <div className='max-w-[500px] mt-[-96px] w-full shadow-xl bg-[#3d1673] p-3 my-12 rounded-xs ml-40 hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-full' src={Mgpp} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Kurucu Ortak</h2>
              <p className='text-center text-4xl font-bilo'></p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Mustafa GENÇTÜRK</p>
                  <p className='py-2 border-b mx-8 mt-8'>Eğitim hayatını marmara üniversitesinde mühendislik alanında tamamladıktan sonra ilgi alanı olan finans ve yazılıma yöneldi.</p>
                  <p className='py-2 border-b mx-8 mt-8'>Finans alanında aldığı eğitimler ve ve tecrübeleri neticesinde bu işi profesyonel olarak yapmaya karar verdi.</p>
                  <a href="mailto:mustafailetisim1@gmail.com">
                  <button class="btn btn-outline bg-purple-400 text-white mt-20">Contact Me</button>
                  </a>
              </div>
          </div>
    </div>
</div>



    ) ; 
} ; 
export default About ; 