import React from 'react' ; 

const Footer = () => {
return (
<div className='p-4 margin-top:-20px'>
    <div className="absolute left-0">
        <div className="mb-10 ml-20">
            <a href="/src/index.html" className="mt-40">
             <span className="self-center text-2xl font-Bilo whitespace-nowrap text-white font-Bilo">TradeForEveryone</span>
            </a>
        </div>
    </div>
    <div className="absolute left-20" style="margin-left:450px">
        <h2 className="mb-6 text-sm font-Bilo uppercase text-white">Resources</h2>
        <ul className="text-gray-600 dark:text-gray-400">
        <li className='mb-4'>
            <a href="https://flowbite.com" className="hover:underline font-Bilo text-gray-500" style="font-size: 20px;">About</a>
        </li>
    <li>
        <a href="https://tailwindcss.com/" className="hover:underline font-Bilo text-gray-500" style="font-size:20px">Blog</a>
    </li>
    </ul>
</div>
    <div className="absolute right-100" style="margin-left:700px">
        <h2 className="mb-6 text-sm uppercase text-white font-Bilo">Servisler</h2>
        <ul className="text-gray-600 dark:text-gray-400">
    <li className="mb-4">
        <a href="https://github.com/themesberg/flowbite" className="hover:underline text-gray-500 font-Bilo" style="font-size:20px">Fiyatlandırma</a>
    </li>
    <li>
        <a href="https://discord.gg/4eeurUVvTy" className="hover:underline text-gray-500 font-Bilo" style="font-size:20px">Mentorluk</a>
    </li>
</ul>
</div>
        <div style="margin-left:1000px">
            <h2 className="mb-6 text-sm font-Bilo  uppercase text-white">Legal</h2>
        <ul className="text-gray-600 dark:text-gray-400">
        <li className="mb-4">
            <a href="#" className="hover:underline text-gray-500 font-Bilo" style="font-size:20px">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline text-gray-500 font-Bilo" style="font-size:20px">Terms &amp; Conditions</a>
        </li>
        </ul>
    </div>
</div>
) ;
} ;
export default Footer;