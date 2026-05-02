import React from 'react'
import Container from '../Component/Container'
import Subtitle from '../Component/Subtitle'
import Heading from '../Component/Heading'
import Button from '../Component/Button'
import Wcard from '../Component/Wcard'
import Wimg1 from '../assets/Wimg1.png'
import Wimg2 from '../assets/Wimg2.png'
import Wimg3 from '../assets/Wimg3.png'

const Work = () => {
  return (
    <div>
      <Container>
        <Subtitle className='pt-[120px] pb-[14px]' text='Our works'/>
        <div className='flex justify-between mb-[60px]'>
            <Heading Text='Our case studies'/>
            <Button className='border-c2 text-c2' Text='View all' />
        </div>


        <div className='flex justify-between pb-[120px]'>
<Wcard className='bg-Wimg1 bg-contain bg-cover bg-center' Text='Search marketer' text1='Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.'/>


<Wcard  className='bg-Wimg2 bg-contain bg-cover bg-center' Text='Watching for trends' text1='Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.'/>


<Wcard  className='bg-Wimg3 bg-contain bg-cover bg-center' Text='Cross over benifits' text1='Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.'/>
        </div>
      </Container>
    </div>
  )
}

export default Work
