import React from 'react'
import Image from '../Component/Image'
import Parah from '../Component/Parah'

const Scard = ({ Text, Text2, src1, className = "", className2 = "" }) => {
  return (
    <div>
      <div className={`w-[350px] h-[120px] lg:w-[695px] lg:h-[195px] rounded-[15px] flex items-center pl-3 lg:pl-[36px] ${className}`}>

        <div  className={`aspect-square w-[75px] h-[75px] lg:w-[120px] lg:h-[120px] rounded-full flex justify-center items-center cursor-pointer ${className2}`}>
          <div className='w-[34px] h-[34px] lg:w-[68px] lg:h-[68px]'>
            <Image className='w-full h-full' src={src1} />
          </div>
        </div>

        <div className='pl-5 lg:pl-10'>
          <h1 className='font-pop font-semibold text-lg lg:text-[28px] text-c1'>
            {Text}
          </h1>
          <Parah className='lg:w-[374px] pt-2 lg:pt-4' Text={Text2} />
        </div>

      </div>
    </div>
  )
}

export default Scard
