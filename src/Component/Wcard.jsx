import React from 'react'
import Image from '../Component/Image'
import Parah from '../Component/Parah'

const Wcard = ({src1 , text1 , Text}) => {
  return (
    <div>
      <div className='w-[450px] h-[511px] '>
<div className='w-[450px] h-[326px] rounded-[20px] bg-[#C4C4C4]'>
<div className='w-full h-full'>
    <Image src={src1}/>
</div>
</div>

<div>
    <h1 className='font-pop font-medium text-c1 text-[28px] pt-[24px]'>{Text}</h1>
    <Parah className='w-[446px] pt-[14px]' Text={text1}/>
</div>

      </div>
    </div>
  )
}

export default Wcard
