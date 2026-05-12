import React from 'react'
import Image from '../Component/Image'
import Container from '../Component/Container'
import Flogo from '../assets/Flogo.png'
import Parah from '../Component/Parah'

const Footer = () => {
  return (
  <section className='bg-[#f1fbfb80]'>
<Container>
    <div className='flex flex-wrap justify-between pt-[120px]'>
        <div className='lg:w-5/12 flex  flex-col items-center lg:block'>
        <Image src={Flogo}/>
        <Parah className='lg:w-[449px] text-center lg:text-start  mx-5 lg:mx-0 pt-[44px] pb-10 lg:pb-0' Text='Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.'/>
        </div>
        <div className='lg:w-7/12 w-full mx-5 lg:mx-0'>
        <div className='flex justify-between pb-[80px]'>
           <div>
             <p className='font-open font-medium lg:font-semibold text-base lg:text-2xl text-c1 pb-[48px] cursor-pointer'>Features</p>
            <ul className='flex flex-col gap-y-[30px] ' >
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Home</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>About</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Benifit</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Pricing</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Blog</li>
            </ul>
           
           </div>

           <div>
             <p className='font-open ont-medium lg:font-semibold text-base lg:text-2xl text-c1 pb-[48px] cursor-pointer'>Products</p>
            <ul className='flex flex-col gap-y-[30px] ' >
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Task Management</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Company growth</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Time tracking</li>
            </ul>
           </div>

           <div>
             <p className='font-open font-medium lg:font-semibold text-base lg:text-2xl text-c1 pb-[48px] cursor-pointer'>Support</p>
            <ul className='flex flex-col gap-y-[30px] ' >
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Customer service</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Accessibility</li>
                <li className='font-nun font-medium lg:font-semibold text-sm lg:text-xl text-c1 cursor-pointer'>Contact us</li>
              
            </ul>
           </div>
        </div>

     
        </div>

    
    </div>

       <div className='flex justify-between  pb-[57px]'>
          <div className='w-[120px] lg:w-full' >  <span className='font-nun font-normal text-sm lg:text-lg text-c1 cursor-pointer'>@20201 Innovate.All rights reserved.</span></div>
          <div > 
       <span className='font-nun font-normal text-sm lg:text-lg text-c1 cursor-pointer'>Privacy policy</span>
          <span className='font-nun font-normal text-sm lg:text-lg text-c1 ml-[60px] cursor-pointer'>Terms & condition</span>
          </div>
        </div>
</Container>

  </section>
  )
}

export default Footer
