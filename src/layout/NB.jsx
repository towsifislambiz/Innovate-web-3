import React from 'react'
import Container from '../Component/Container'
import Image from '../Component/Image'
import Button from '../Component/Button'
import ListItem from '../Component/ListItem'
import Logo from '../assets/Logo.png'
import BB from '../Component/BB'
import Input from '../Component/Input'


const NB = () => {
  return (
   <div className='bg-NB bg-cover bg-center bg-contain'>
<nav>
    <Container>

<div className='flex justify-between items-center pt-[30px] pb-[114px]'>
    <div>
        <Image src={Logo} alt='logo image'/>
    </div>
    <div>
        <ul className='flex gap-x-[48px]'>
            <ListItem Text='Home'/>
            <ListItem Text='About'/>
            <ListItem Text='Service'/>
            <ListItem Text='Portfolio'/>
            <ListItem Text='Price'/>
            <ListItem Text='Blog'/>
        </ul>
    </div>
    <div>
        <Button Text='Contact Us'/>
    </div>
</div>

    </Container>
</nav>

<section>
    <Container>
            <div className='flex gap-x-[20px] justify-center'>
                <BB Text='SEO'/>
                <BB Text='SMM'/>
                <BB Text='CRO'/>
        </div>

        <h1 className='font-pop font-bold text-white text-[64px] w-[997px] text-center mx-auto pt-[30px] pb-[20px]' >Guaranteed increase of your website sales</h1>

        <p className='font-nun font-normal text-white text-lg w-[780px] text-center mx-auto pb-[48px]'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</p>

        <div className='flex justify-center pb-[520px]'>
            <Input/>
        </div>
    </Container>
</section>


   </div>
  )
}

export default NB
