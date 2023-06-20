import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Slideshow from './Landing/Slideshow';
import Feature from './Landing/Feature';
import CTA from './Landing/CTA';
import Technical from './Landing/Technical';
import Testinomial from './Landing/Testinomial';
import Footer from './Footer';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          {/* Slideshow section */}
          <div className='relative overflow-hidden' style={{width: "100vw", height: "100vh"}}>
            <Slideshow />
            <div className='absolute w-1/2 text-5xl text-white bg-black bg-opacity-50 fadeInLeft top-1/3 left-1/4 _sm:text-4xl _sm:w-full _sm:left-0 _sm:top-1/3'>
              <div className='font-bold'>ExPAY: Revolutionizing Payment Logistics in the Cargo Transportation Industry</div><br></br>
              <span className='text-3xl mt-7 _sm:text-xl'>For More Information Call </span>
              <span className='text-3xl text-yellow-200 mt-7 _sm:text-xl'>(123) 456‐7890</span>
            </div>
          </div>

          {/* Feature */}
          <Feature />

          {/* Technical */}
          <Technical />

          {/* CTA */}
          <CTA />

          {/* Testinomail */}
          <Testinomial />

          {/* Navbar */}
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
}

export default Landing;
