import React, { useRef } from 'react'
import Section from './Section';
import Button from "../components/Button"
import { curve, heroBackground, robot } from "../assets"; 
import {BackgroundCircles , BottomLine , Gradient } from './design/Hero';
import { heroIcons } from "../constants";
import { ScrollParallax } from 'react-just-parallax';
import HoverGif from '../components/HoverGif';
import { sunglasses } from '../assets';
import Notification from './Notification';


const Hero = () => {
  const parallaxRef = useRef(null)

  return (
    <Section
    className='pt-[12rem] -mt-[5.25rem]'
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >
      <div className='container relative' ref={parallaxRef}>
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-[5rem] lg:mb-[6rem]'>
          <h1 className='h1 mb-6'>
            The next generation&nbsp;<HoverGif gifSrc={sunglasses} className={"bg-clip-text text-transparent bg-text-gradient"}>glasses</HoverGif>&nbsp;for&nbsp;<span className='inline-block relative'>visually <img src={curve} className='absolute top-full left-0 w-full ' 
            width={624}
            height={28}
            alt='Curve'
            /> </span> impare people...
          </h1>
          <p className='body-1 scale-[80%] max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8'>
          "Experience the World Through Sound. Enhance independence with SeeBySound, the revolutionary audio-visual guide for the visually impaired."
          </p>
          <Button href="#pricing" white className="hover:text-n-14">
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
                    className='w-full scale-[1.7] -translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[4%]'
                    width={1024}
                    height={490}
                    alt='heroImage'
                  />
                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>
                      {heroIcons.map((icon , index) => (
                        <li className='p-5' key={index}>
                          <img src={icon} width={24} height={25} alt={icon} />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification   
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="producing stunning glasses"
                    />
                  </ScrollParallax>
               </div>
            </div>
            <Gradient />
          </div>
         <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2  md:-top-[46%] md:w-[138%] lg:-top-[70%] scale-125 ' >
            <img 
              className='w-full'
              src={heroBackground}
              width={1440}
              height={1800}
              alt='herobg'
            />
          </div>

          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;