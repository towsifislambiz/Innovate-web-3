import React from 'react'

const Input = () => {
  return (
    <div>
   
      
<div className='flex'>

  <input 
    className= 'text-sm lg:text-base bg-white lg:py-[30px] pl-5  lg:pl-[30px] lg:pr-[227px] rounded-l-[20px] font-xl' 
    type="url" 
    placeholder= "paste your website links"
  />
  
  <button className='bg-[#6A55EA] text-white font-nun !cursor-pointer font-semibold text-sm lg:text-lg p-[20px] lg:p-[30px] rounded-r-[20px] lg:hover:bg-[#5943e9] duration-300'>
    Analyze website
  </button>
</div>

 
    </div>
  )
}

export default Input
