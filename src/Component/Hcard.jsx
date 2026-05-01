import React from 'react'
import Image from '../Component/Image'
import group from '../assets/Group.png'

const Hcard = ({src1 , Text , className , className1}) => {
  return (
    <div>
      <div className='{className} ' >
   <div className={`w-0 h-0 
  border-l-[34px] border-r-[34px] border-t-[55px] 
  border-l-transparent border-r-transparent border-t-[#F8A64C] -z-10 absolute -bottom-0 opacity-0 group-hover:opacity-100 group-hover:-bottom-10 duration-300 ${className1}`}>
</div>
       
        <div className='w-[68px] h-[68px]  mt-[38px] mb-[30px]'>
            <Image src={src1}/>
        </div>

        <div>
      <h2 className='font-pop font-medium text-2xl text-[#FDFDFD]'>{Text}</h2>
        </div>
      </div>
    </div>
  )
}

export default Hcard
