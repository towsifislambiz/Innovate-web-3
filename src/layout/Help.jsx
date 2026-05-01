import React from 'react'
import Container from '../Component/Container'
import Subtitle from '../Component/Subtitle'
import Heading from '../Component/Heading'
import Hcard from '../Component/Hcard'
import Himg from '../assets/Himg.png'
import Himg1 from '../assets/Himg1.png'
import Himg2 from '../assets/Himg2.png'
import Image from '../Component/Image'
import HB from '../assets/HB.png'
import Parah from '../Component/Parah'
import Button from '../Component/Button'


const Help = () => {
  return (
  <section className='bg-[#F1FBFB] pt-[120px] '>
<Container>
   <div className='flex flex-col items-center '>
     <Subtitle text='Our process'/>
     <Heading className='pt-[14px] pb-[60px]' Text='How can we help?'/>
   </div>


   <div className='pb-[100px] flex gap-6'>
    <Hcard className2=' bg-[#F8A64C] ' className='border-t-[#F8A64C]' src1={Himg} Text='Real time analytics'/>
    <Hcard className3='text-c1' className2=' bg-[#F0EDFF] ' className='border-t-[#F0EDFF]' src1={Himg1} Text='Real time analytics'/>
    <Hcard className3='text-c1'  className2=' bg-[#E8FCF2] ' className='border-t-[#E8FCF2]' src1={Himg2} Text='Real time analytics'/>
    <Hcard className3='text-c1' className2=' bg-[#FEF6EC] ' className='border-t-[#FEF6EC]' src1={Himg} Text='Real time analytics'/>
   
   
   </div>

   <div className='w-full flex  pb-[125px]'>
<div className='w-5/12 '>
<div className='w-[340px] h-[340px]'>
<Image className='w-full h-full cursor-pointer' src={HB}/>
</div>
</div>
<div className='w-7/12'>
<Heading Text='Real time analytics'/>
<Parah className='w-[596px] leading-[200%] pt-6 pb-12' Text="Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.Turn your visitors into customers with our team of experts. We'll analyze your website and develop a suitable conversion-rate strategy."/>

<Button className='bg-c2 py-[25px] px-[30px] text-white border-none' Text='Analyze website'/>
</div>
   </div>
</Container>
  </section>
  )
}

export default Help
