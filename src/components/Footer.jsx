import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
            <div className='container flex sm:justify-between max-sm:flex-col justify-center items-center gap-10'>
                <p className='ld:block text-n-4 caption'>© {new Date().getFullYear()}. All rights reserved.</p>
                <ul className='flex gap-5 flex-wrap'>
                    {socials.map((item)=>(
                        <a 
                        key={item.id}
                        href={item.url}
                        target='_blank'
                        className='flex bg-n-7 rounded-full transition-colors hover:bg-n-6 w-10 h-10 justify-center items-center' >
                            <img src={item.iconUrl} height={16} width={16} />
                        </a>
                    ))}
                </ul>
            </div>
    </Section>
  )
}

export default Footer