import React from 'react'
import Image from '../Component/Image'
import Parah from '../Component/Parah'

const Scard = ({ Text, Text2, src1, className = "", className2 = "" }) => {
  return (
    <div>
      <div className={`w-[695px] h-[195px] rounded-[15px] flex items-center pl-[36px] ${className}`}>

        <div className={`w-[120px] h-[120px] rounded-full flex justify-center items-center cursor-pointer  ${className2}`}>
          <div className='w-[68px] h-[68px]'>
            <Image className='w-full h-full' src={src1} />
          </div>
        </div>

        <div className='pl-10'>
          <h1 className='font-pop font-semibold text-[28px] text-c1'>
            {Text}
          </h1>
          <Parah className='w-[374px] pt-4' Text={Text2} />
        </div>

      </div>
    </div>
  )
}

export default Scard
