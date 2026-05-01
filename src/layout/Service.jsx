import React from 'react'
import Container from '../Component/Container'
import Subtitle from '../Component/Subtitle'
import Heading from '../Component/Heading'
import Parah from '../Component/Parah'
import Image from '../Component/Image'
import Simg from '../assets/service.png'
import Scard from '../Component/Scard'
import Group from '../assets/Group.png'
import Group1 from '../assets/Group1.png'
import Group2 from '../assets/Group2.png'

const Service = () => {
  return (
   <section className='mt-[50px]'>
    <Container>
       <div className='flex items-center flex-col'>
        <Subtitle text='Core feature'/>
        <Heading className='w-[676px] text-center mt-[10px] mb-[60px]'  Text='Provide awsome service with our tools'/>
       </div>

       <div className='flex items-center mb-[100px]'> 
        <div className='w-1/2'>
        <Parah Text='With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.'/>
       
       <div className='w-[650px] h-[403px] mt-[80px]' >
        <Image className='w-full h-full' src={Simg}/>
       </div>
       
        </div>
        <div className='w-1/2'>
        <div>
            <Scard className2='bg-[#7968EF]' className='bg-[#F0EDFF]'  src1={Group} Text='SEO Consultancy' Text2='Nam libero tempore, cum soluta nobis est eligendi optio cumque '/>
            <Scard className='bg-[#FEF6EC] mt-[36px] mb-[36px] ' className2='bg-[#F8A64C]' src1={Group1} Text='Competitor analysis' Text2='Nam libero tempore, cum soluta nobis est eligendi optio cumque '/>
            <Scard className='bg-[#E8FCF2]' className2='bg-[#63DE9D]' src1={Group2} Text='Social media marketing' Text2='Nam libero tempore, cum soluta nobis est eligendi optio cumque '/>
        </div>
        </div>
       </div>
    </Container>
   </section>
  )
}

export default Service
