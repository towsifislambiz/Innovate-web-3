import React from 'react'
import Image from '../Component/Image'
import Parah from '../Component/Parah'

const Wcard = ({ className, text1 , Text}) => {
  return (
    <div>
      <div className='w-[430px] h-[511px] '>
<div className={`w-[430px] h-[326px] rounded-[20px] bg-[#C4C4C4] cursor-pointer ${className}`}></div>

<div>
    <h1 className='font-pop font-medium text-c1 text-[28px] pt-[24px]'>{Text}</h1>
    <Parah className='w-[446px] pt-[14px]' Text={text1}/>
</div>

      </div>
    </div>
  )
}

export default Wcard
