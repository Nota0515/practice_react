import React from 'react'
import Section from './Section';
import Button from "../components/Button"
import { curve, heroBackground, robot } from "../assets";


const Hero = () => {
  return (
    <Section
    className='pt-[12rem] -mt-[5.25rem]'
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
      <div className='container relative '>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-[5rem] lg:mb-[6rem]'>
          <h1 className='h1 mb-5'>
            The next generation glasses for <span className='inline-block relative'>visually <img src={curve} className='absolute top-full left-0 w-full ' 
            width={624}
            height={28}
            alt='Curve'
            /> </span> impare people...
          </h1>
          <p className='body-1 scale-[80%] max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
          "Experience the World Through Sound. Enhance independence with SeeBySound, the revolutionary audio-visual guide for the visually impaired."
          </p>
          <Button href="#pricing" white>
            Try for Free
          </Button>
        </div>
        <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
            <div className='relative bg-n-8 rounded-[1rem]'>
              <div className='h-[1.5rem] bg-n-10 rounded-t-[0.9rem]'/>
               <div className='aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                  <img 
                    src={robot}
                    className='w-full scale-[1.7] -translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]'
                    width={1024}
                    height={490}
                    alt='heroImage'
                  />
               </div>
            </div>
          </div>
          <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%] ' >
            <img 
              className='w-full'
              src={heroBackground}
              width={1440}
              height={1800}
              alt='herobg'
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;