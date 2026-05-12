import React from 'react'
import Image from '../Component/Image'
import Parah from '../Component/Parah'

const Wcard = ({ className, text1 , Text}) => {
  return (
    <div>
      <div className='w-[350px] h-[420px] lg:w-[430px] lg:h-[511px] '>
<div className={`w-[350px] h-[320px] lg:w-[420px] lg:h-[326px] rounded-[20px] bg-[#C4C4C4] cursor-pointer ${className}`}></div>

<div>
    <h1 className='font-pop font-medium text-c1 text-xl lg:text-[28px] pt-[24px]'>{Text}</h1>
    <Parah className='lg:w-[446px] pt-[14px]' Text={text1}/>
</div>

      </div>
    </div>
  )
}

export default Wcard
