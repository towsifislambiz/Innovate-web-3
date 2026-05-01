import React from 'react'
import Image from "../Component/Image"


const Brand = ({Text , icon}) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <Image src={icon}/> <p className='pl-[15px] text-xl font-pop font-semibold text-[#29313dcc]'>{Text}</p>
    </div>
  )
}

export default Brand
