import React from 'react';
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full h-28 bg-white flex flex-col justify-center items-center">
      <div className="h-28 text-2xl text-slate-600 flex justify-center items-center">
        <h1>Brikbloom Property Sourcing</h1>      
      </div>
      {/*}
      <div className="flex justify-between w-3/4 h-8 text-slate-400 max-w-2xl">
        <Link href="#services" className="hover:text-slate-800 transition-all">Services</Link>
        <Link href="#about" className="hover:text-slate-800 transition-all">About</Link>  
        <Link href="#testimonials" className="hover:text-slate-800 transition-all">Testimonials</Link>
        <Link href="#how" className="hover:text-slate-800 transition-all">How It Works</Link>
        <Link href="#contact" className="hover:text-slate-800 transition-all">Contact</Link>
      </div>
      */}
    </div>
  )
}

export default Nav;