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
                src={gifSrc}
                alt='HoverGif'
                className='absolute left-0 top-full mt-2 w-22 h-auto'
                />
            )}
        </span>
    );
};

export default HoverGif;