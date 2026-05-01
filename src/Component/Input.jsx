import React from 'react'

const Input = () => {
  return (
    <div>
   
      
<div className='flex'>

  <input 
    className= 'text-base bg-white py-[30px] pl-[30px] pr-[227px] rounded-l-[20px] font-xl' 
    type="url" 
    placeholder= "paste your website links"
  />
  
  <button className='bg-[#6A55EA] text-white font-nun !cursor-pointer font-semibold text-lg p-[30px] rounded-r-[20px] hover:bg-[#5943e9] duration-300'>
    Analyze website
  </button>
</div>

 
    </div>
  )
}

export default Input
