import React from 'react'
import Section from './Section';
import Button from "../components/Button"
import { curve, heroBackground, robot } from "../assets";


const Hero = () => {
  return (
    <Section
    className='pt-[12rem] -mt-[5.25]'
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
      </div>
    </Section>
  );
};

export default Hero;