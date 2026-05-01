import React from 'react'
import Image from '../Component/Image'
import Group from '../assets/Group.png'

const Hcard = ({ className, className2, src1, Text, className3 }) => {
  return (
    <div>
      <div
        className={`group w-[330px] h-[210px] rounded-[14px] cursor-pointer flex flex-col items-center pt-[38px] relative ${className2}`}
      >
        
        {/* triangle */}
        <div
          className={`
          w-0 h-0 absolute bottom-0 left-1/2 -translate-x-1/2
          border-l-[30px] border-r-[30px] border-t-[50px]
          border-l-transparent border-r-transparent
          group-hover:-bottom-8 duration-300
          ${className}
          `}
        ></div>

        {/* image */}
        <div className="w-[68px] h-[68px] mb-[30px]">
          <Image className="w-full h-full" src={src1 || Group} />
        </div>

        {/* text */}
        <h1 className={`font-pop font-medium text-2xl text-[#FDFDFD] ${className3}`}>
          {Text}
        </h1>

      </div>
    </div>
  )
}

export default Hcard

