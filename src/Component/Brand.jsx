import React from 'react'
import Image from "../Component/Image"


const Brand = ({Text , icon}) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <Image className='w-[60%] lg:w-[100%]' src={icon}/> <p className='pl-1 lg:pl-[15px] text-[12px] lg:text-xl font-pop font-semibold text-[#29313dcc]'>{Text}</p>
    </div>
  )
}

export default Brand
