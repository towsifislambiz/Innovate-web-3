import React from 'react'
import Container from '../Component/Container'
import Subtitle from '../Component/Subtitle'
import Heading from '../Component/Heading'
import Button from '../Component/Button'
import Wcard from '../Component/Wcard'

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
<Wcard Text='Search marketer' text1='Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.'/>


<Wcard Text='Watching for trends' text1='Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.'/>


<Wcard Text='Cross over benifits' text1='Analyzing negative materials about your brand and addressing them with sentiment analysis and press release distribution.'/>
        </div>
      </Container>
    </div>
  )
}

export default Work
