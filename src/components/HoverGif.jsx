import React , {useState} from 'react';

const HoverGif = ({children , gifSrc, className }) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <span 
        className={` relative inline-block cursor-pointer ${className || ''} `}
        onMouseEnter={ ()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        >
            {children}
            {isHover && (
                <img  
                className='hidden lg:block md:block absolute left-2 md:-top-[4rem] lg:-top-[5rem] mt-2 w-auto h-auto'
                src={gifSrc}
                alt='HoverGif'
                />
            )}
        </span>
    );
};

export default HoverGif;