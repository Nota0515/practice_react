import React , {useState} from 'react';

const HoverGif = ({children , gifSrc}) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <span 
        className='relative inline-block cursor-pointer ' 
        onMouseEnter={ ()=> setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        >
            {children}
            {isHover && (
                <img  
                className='hidden lg:block md:block absolute left-0 md:-top-[4.5rem] lg:-top-[6.5rem] mt-2 w-auto h-auto'
                src={gifSrc}
                alt='HoverGif'
                />
            )}
        </span>
    );
};

export default HoverGif;