import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import Parah from '../Component/Parah'

import Input from '../Component/Input'

const Get = () => {
  return (
   <section className='mb-[120px]'>
    <div className='bg-Gimg bg-contain bg-cover bg-center w-[1850px]  rounded-[50px] mx-auto'>
 <Container>
<Heading className='text-white text-center pt-[123px] pb-[10px]' Text='Get your free seo analytics'/>
<Parah className='text-[#ffffff99] w-[580px] text-center mx-auto mt-[10px] pb-[28px]' Text='Paste your website link to get the free 7 days analytics of your website for totaly free'/>
    
    <div className='flex justify-center pb-[122px]'>
        <Input/>
    </div>
    
    </Container>
    </div>
   
   </section>
  )
}

export default Get
