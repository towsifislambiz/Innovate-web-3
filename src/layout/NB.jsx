import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Button from '../Component/Button'
import ListItem from '../Component/ListItem'
import Logo from '../assets/Logo.png'
import BB from '../Component/BB'
import Input from '../Component/Input'
import Brand from '../Component/Brand'
import Aicon1 from '../assets/Aicon1.png'
import Aicon2 from '../assets/Aicon2.png'
import Aicon3 from '../assets/Aicon3.png'
import Aicon4 from '../assets/Aicon4.png'

const NB = () => {
  return (
    <div className='bg-NB bg-cover bg-center relative overflow-hidden min-h-screen'>

      {/* 🔥 Background animation */}
<div className='bg-Cimg bg-cover bg-center absolute bottom-0 left-0 w-full h-[700px] origin-bottom scale-y-0 animate-BT z-0'></div>

      {/* 🚀 Rocket */}
      <div className='w-[503.82px] h-[480.39px] absolute bg-NBimg1 top-[600px] right-[-300px] rotate-[-5deg] animate-moveBox'></div>

      {/* 🔥 Main Content */}
      <div className='relative z-20'>

        {/* NAV */}
        <nav>
          <Container>
            <div className='flex justify-between items-center pt-[30px] pb-[114px]'>

              <div>
                <Image src={Logo} alt='logo' />
              </div>

              <ul className='flex gap-x-[48px]'>
                <ListItem Text='Home' />
                <ListItem Text='About' />
                <ListItem Text='Service' />
                <ListItem Text='Portfolio' />
                <ListItem Text='Price' />
                <ListItem Text='Blog' />
              </ul>

              <Button className='border-white text-white' Text='Contact Us' />

            </div>
          </Container>
        </nav>

        {/* HERO */}
        <section>
          <Container>

            <div className='flex gap-x-[20px] justify-center'>
              <BB Text='SEO' />
              <BB Text='SMM' />
              <BB Text='CRO' />
            </div>

            <h1 className='font-pop font-bold text-white text-[64px] w-[997px] text-center mx-auto pt-[30px] pb-[20px]'>
              Guaranteed increase of your website sales
            </h1>

            <p className='font-nun text-white text-lg w-[780px] text-center mx-auto pb-[48px]'>
              With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.
            </p>

            <div className='flex justify-center pb-[520px]'>
              <Input />
            </div>

            <div className='flex justify-between w-[1320px] mb-[100px]'>
              <Brand icon={Aicon1} Text='Wapkiu' />
              <Brand icon={Aicon2} Text='Creone' />
              <Brand icon={Aicon3} Text='Rinfall' />
              <Brand icon={Aicon4} Text='ulabs' />
            </div>

          </Container>
        </section>

      </div>

    </div>
  )
}

export default NB
