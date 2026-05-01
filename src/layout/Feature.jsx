import React from 'react'
import Container from '../Component/Container'
import Subtitle from '../Component/Subtitle'
import Heading from '../Component/Heading'
import Parah from '../Component/Parah'
import Routateborder from '../Component/Routateborder'
import Image from '../Component/Image'
import FL from '../assets/FL.png'

const Feature = () => {
const cardData = [
    { id: 1, target: 10 },
    { id: 2,  target: 14 },
    { id: 3,  target: 12 },

  ]

  return (
    <div>
      <Container>
        <div className='flex mb-[100px]'>
            <div className='w-1/2'>
            <Subtitle text='Core feature'/>
<Heading className='mt-[10px] mb-6' Text='Get more traffic'/>
 <Parah className='w-[550px] ' Text='With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process'/>


<div className='flex  '>

            {cardData.map((item) => (
              <Routateborder className='border-b-transparent border-l-transparent '
                key={item.id}
                Text={item.text}
                target={item.target}
              />
            ))}

          </div>
            </div>


            <div className='w-1/2'>
            <div className='w-[704px] h-[441px] '>
<Image className='w-full h-full' src={FL}/>
            </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Feature
