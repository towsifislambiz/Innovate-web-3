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

        {/* title */}
        <div className='flex flex-col items-center pt-[100px] lg:pt-[120px]'>
          <Subtitle text='Our pricing'/>
          <Heading className='mt-[14px] mb-[60px]' Text='Premium optimization plans'/>
        </div>

        {/* TABLE WRAPPER */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 lg:gap-0 scale-[0.92] lg:scale-100 origin-top">

          {/* COLUMN 1 */}
          <div className="flex flex-col w-[350px] lg:w-[330px] border-r border-[#D7E6F9]">

            <div className="flex justify-center">
              <div className="w-[240px] h-[10px] bg-[#D2EAFD] rounded-[10px]"></div>
            </div>

            <div className="bg-white">
              <p className="text-sm lg:text-2xl font-pop text-c1 px-3 py-4">
                Save <span className="font-semibold">up to 40%</span> by paying annually!
              </p>
            </div>

            {["keywords result","Territories","Search time","API access","Competition metrics","Reports"].map((item,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} py-3`}>
                <p className="text-xs lg:text-2xl text-[#29313db3] px-3">
                  {item}
                </p>
              </div>
            ))}

          </div>

          {/* PERSONAL */}
          <div className="flex flex-col w-[350px] lg:w-[330px] border-r border-[#D7E6F9]">

            <div className="flex justify-center">
              <div className="w-[240px] h-[10px] bg-[#323232] rounded-[10px]"></div>
            </div>

            <div className="bg-white text-center py-3 lg:mb-[15px]">
              <p className="text-base lg:text-[28px]">Personal</p>
              <p className="text-xs lg:text-2xl text-[#29313db3]">Free</p>
            </div>

            {["Top 1,000","Top 6"].map((item,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} py-3 text-center`}>
                <p className="text-xs lg:text-2xl text-[#29313db3]">{item}</p>
              </div>
            ))}

            {[Yes,No,Yes,Yes].map((img,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} flex justify-center py-3`}>
                <Image className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" src={img}/>
              </div>
            ))}

          </div>

          {/* PROFESSIONAL */}
          <div className="flex flex-col w-[350px] lg:w-[330px] border-r border-[#D7E6F9]">

            <div className="flex justify-center">
              <div className="w-[240px] h-[10px] bg-[#43CB83] rounded-[10px]"></div>
            </div>

            <div className="bg-white text-center py-3 lg:mb-[15px]">
              <p className="text-base lg:text-[28px]">Professional</p>
              <p className="text-xs lg:text-2xl text-[#29313db3]">$59/month</p>
            </div>

            {["5,000","13"].map((item,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} py-3 text-center`}>
                <p className="text-xs lg:text-2xl text-[#29313db3]">{item}</p>
              </div>
            ))}

            {[Yes,No,Yes,Yes].map((img,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} flex justify-center py-3`}>
                <Image className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" src={img}/>
              </div>
            ))}

          </div>

          {/* ENTERPRISE */}
          <div className="flex flex-col w-[350px] lg:w-[330px]">

            <div className="flex justify-center">
              <div className="w-[240px] h-[10px] bg-[#845A9F] rounded-[10px]"></div>
            </div>

            <div className="bg-white text-center py-3 lg:mb-[15px]">
              <p className="text-base lg:text-[28px]">Enterprise</p>
              <p className="text-xs lg:text-2xl text-[#29313db3]">$299/month</p>
            </div>

            {["10,000","200+"].map((item,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} py-3 text-center`}>
                <p className="text-xs lg:text-2xl text-[#29313db3]">{item}</p>
              </div>
            ))}

            {[Yes,Yes,Yes,Yes].map((img,i)=>(
              <div key={i} className={`${i%2===0 ? "bg-[#EFF4F8]" : "bg-white"} flex justify-center py-3`}>
                <Image className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" src={img}/>
              </div>
            ))}

          </div>

        </div>

        {/* BUTTONS */}
        <div className='flex flex-wrap lg:flex-nowrap mb-[120px] scale-[0.92] lg:scale-100 origin-top'>

          <div className='w-[350px] lg:w-[332px] h-[70px]'></div>

          <div className='w-[350px] lg:w-[332px] h-[70px] bg-[#323232] flex justify-center items-center'>
            <p className='text-sm lg:text-xl text-white font-nun font-semibold'>Try free</p>
          </div>

          <div className='w-[350px] lg:w-[332px] h-[70px] bg-[#43CB83] flex justify-center items-center'>
            <p className='text-sm lg:text-xl text-white font-nun font-semibold'>Try free</p>
          </div>

          <div className='w-[350px] lg:w-[332px] h-[70px] bg-[#845A9F] flex justify-center items-center'>
            <p className='text-sm lg:text-xl text-white font-nun font-semibold'>Try free</p>
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Pricing