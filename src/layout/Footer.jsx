import React from 'react'
import Image from '../Component/Image'
import Container from '../Component/Container'
import Flogo from '../assets/Flogo.png'
import Parah from '../Component/Parah'

const Footer = () => {
  return (
  <section className='bg-[#f1fbfb80]'>
<Container>
    <div className='flex justify-between pt-[120px]'>
        <div className='w-5/12'>
        <Image src={Flogo}/>
        <Parah className='w-[449px] pt-[44px]' Text='Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.'/>
        </div>
        <div className='w-7/12'>
        <div className='flex justify-between pb-[80px]'>
           <div>
             <p className='font-open font-semibold text-2xl text-c1 pb-[48px] cursor-pointer'>Features</p>
            <ul className='flex flex-col gap-y-[30px] ' >
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Home</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>About</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Benifit</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Pricing</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Blog</li>
            </ul>
           
           </div>

           <div>
             <p className='font-open font-semibold text-2xl text-c1 pb-[48px] cursor-pointer'>Products</p>
            <ul className='flex flex-col gap-y-[30px] ' >
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Task Management</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Company growth</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Time tracking</li>
            </ul>
           </div>
           <div>
             <p className='font-open font-semibold text-2xl text-c1 pb-[48px] cursor-pointer'>Support</p>
            <ul className='flex flex-col gap-y-[30px] ' >
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Customer service</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Accessibility</li>
                <li className='font-nun font-semibold text-xl text-c1 cursor-pointer'>Contact us</li>
              
            </ul>
           </div>
        </div>

     
        </div>

    
    </div>

       <div className='flex justify-between pb-[57px]'>
          <div>  <span className='font-nun font-normal text-lg text-c1 cursor-pointer'>@20201 Innovate.All rights reserved.</span></div>
          <div > 
             <span className='font-nun font-normal text-lg text-c1 cursor-pointer'>Privacy policy</span>
          <span className='font-nun font-normal text-lg text-c1 ml-[60px] cursor-pointer'>Terms & condition</span>
          </div>
        </div>
</Container>

  </section>
  )
}

export default Footer
