import React from 'react'
import Container from '../Component/Container'
import Subtitle from '../Component/Subtitle'
import Heading from '../Component/Heading'
import Image from '../Component/Image'
import Yes from '../assets/Yes.png'
import No from '../assets/No.png'

const Pricing = () => {
  return (
    <div className='bg-[#f1fbfb80]'>
      <Container>
        <div className=' flex flex-col items-center pt-[120px]'>
            <Subtitle text='Our pricing'/>
            <Heading className='mt-[14px] mb-[60px]' Text='Premium optimization plans'/>
        </div>

        <div className="flex">

  {/* CARD */}
  <div className="flex flex-col w-[330px] border-r-[2px] border-[#D7E6F9]">

    <div className="w-full flex justify-center items-center">
      <div className="w-[300px] h-[14px] rounded-[10px] bg-[#D2EAFD] mr-[5px]"></div>
    </div>

    <div className="w-full bg-white">
      <p className="font-normal font-pop text-2xl text-c1 w-[279px] pt-6 pl-4 mb-[73px]">
        Save <span className="font-semibold"> up to 40%</span> by paying annually!
      </p>
    </div>

    <div className="bg-[#EFF4F8] w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] py-7 pl-6">
        keywords result
      </p>
    </div>

    <div className="bg-white w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] py-7 pl-6">
        Territories
      </p>
    </div>

    <div className="bg-[#EFF4F8] w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] py-7 pl-6">
        Search by time
      </p>
    </div>

    <div className="bg-white w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] py-7 pl-6">
        Api access
      </p>
    </div>

    <div className="bg-[#EFF4F8] w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] py-7 pl-6">
        competition metrics
      </p>
    </div>

    <div className="bg-white w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] py-7 pl-6">
        Reports
      </p>
    </div>
   

  </div>


  {/* part 2 start */}
  {/* CARD */}
  <div className="flex flex-col w-[330px] border-r-[2px] border-[#D7E6F9]">

    <div className="w-full flex justify-center items-center">
      <div className="w-[300px] h-[14px] rounded-[10px] bg-[#323232] mr-[5px]"></div>
    </div>

    <div className="w-full bg-white">
   <p className='font-pop font-semibold text-[28px] text-c1 text-center mt-6 mb-[6px]'>personal</p>
   <p className='font-pop font-semibold text-2xl text-[#29313db3] text-center mb-[57px]' >Free</p>
    </div>

    <div className="bg-[#EFF4F8] w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] text-center pt-[28px] pb-[28px] ">
        Top 1,000
      </p>
    </div>

    <div className="bg-white w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] text-center py-[28px]">
     Top 6
      </p>
    </div>

    <div className="bg-[#EFF4F8] w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
  
    </div>

    <div className="bg-white w-full flex justify-center">
      <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={No}/>
       </div>
    </div>

      <div className="bg-[#EFF4F8] w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
  
    </div>

     <div className="bg-white w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
    </div>

  </div>

   
       


  {/* part 2 end */}

  {/* part 3 start */}
 <div className="flex flex-col w-[330px] border-r-[2px] border-[#D7E6F9]">

    <div className="w-full flex justify-center items-center">
      <div className="w-[300px] h-[14px] rounded-[10px] bg-[#43CB83] mr-[5px]"></div>
    </div>

    <div className="w-full bg-white">
   <p className='font-pop font-semibold text-[28px] text-c1 text-center mt-6 mb-[6px]'>professional</p>
   <p className='font-pop font-semibold text-2xl text-[#29313db3] text-center mb-[57px]' >$59/monthly</p>
    </div>

    <div className="bg-[#EFF4F8] w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] text-center pt-[28px] pb-[28px] ">
        5,000
      </p>
    </div>

    <div className="bg-white w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] text-center py-[28px]">
    13

      </p>
    </div>

    <div className="bg-[#EFF4F8] w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
  
    </div>

    <div className="bg-white w-full flex justify-center">
      <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={No}/>
       </div>
    </div>

      <div className="bg-[#EFF4F8] w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
  
    </div>

     <div className="bg-white w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
    </div>

    
  </div>

  {/* part 3 end */}


  {/* part 4 start */}
 <div className="flex flex-col w-[330px] border-r-[2px] border-transparent">

    <div className="w-full flex justify-center items-center">
      <div className="w-[300px] h-[14px] rounded-[10px] bg-[#845A9F] mr-[5px]"></div>
    </div>

    <div className="w-full bg-white">
   <p className='font-pop font-semibold text-[28px] text-c1 text-center mt-6 mb-[6px]'>Enterprice</p>
   <p className='font-pop font-semibold text-2xl text-[#29313db3] text-center mb-[57px]' >$299/monthly</p>
    </div>

    <div className="bg-[#EFF4F8] w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] text-center pt-[28px] pb-[28px] ">
        10,000
      </p>
    </div>

    <div className="bg-white w-full">
      <p className="font-pop font-semibold text-2xl text-[#29313db3] text-center py-[28px]">
   200+

      </p>
    </div>

    <div className="bg-[#EFF4F8] w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
  
    </div>

    <div className="bg-white w-full flex justify-center">
      <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
    </div>

      <div className="bg-[#EFF4F8] w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
  
    </div>

     <div className="bg-white w-full flex justify-center">
       <div className='w-[24px] h-[24px] my-[32px]'>
<Image className='w-full h-full ' src={Yes}/>
       </div>
    </div>

    
  </div>

  {/* part 4 end */}

</div>

<div className='flex mb-[120px]'>
    <div className='bg-transparent w-[332px] h-[95px]'></div>
    <div className='bg-[#323232] w-[332px] h-[95px] flex justify-center items-center cursor-pointer'>
      <p className='text-xl  text-white font-nun font-semibold'>Try for free</p>
    </div>
    <div className='bg-[#43CB83] w-[332px] h-[95px] flex justify-center items-center cursor-pointer'>
      <p className='text-xl  text-white font-nun font-semibold'>Try for free</p>
    </div>
    <div className='bg-[#845A9F] w-[332px] h-[95px] flex justify-center items-center cursor-pointer'>
      <p className='text-xl  text-white font-nun font-semibold'>Try for free</p>
    </div>
</div>


      </Container>
    </div>
  )
}

export default Pricing
