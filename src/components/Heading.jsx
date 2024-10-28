import React from 'react'

const Heading = ({className, title}) => {
  return <div>
    { title && <h2 className={`${className} h2 text-center font-light mt-5 md:mt-7 md:m-auto lg:m-auto`}>{title}</h2>}
  </div>
}

export default Heading