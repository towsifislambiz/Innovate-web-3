import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Subtitle = ({className2 , className , text}) => {
  return (
    <div className='inline-block'>
     <p className={`group flex items-center font-nun font-medium text-c2 text-2xl cursor-pointer ${className}`}>{text}

        <FaArrowRightLong className={`ml-2 mt-1 opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-x-[30px] ${className2}`} />
     </p>
    </div>
  )
}

export default Subtitle
