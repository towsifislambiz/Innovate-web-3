import React, { useEffect, useState } from 'react'

const Routateborder = ({ className, Text, target }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)

    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 1
        } else {
          clearInterval(interval)
          return prev
        }
      })
    }, 35)

    return () => clearInterval(interval)
  }, [target])

  return (
<div>
  <div className='w-[150px] h-[170px]  flex items-center justify-center flex-col'>
    
    <span className='w-[100px] h-[100px] rounded-full bg-[#E4F0FF] inline-block relative'>
      
      {/* rotating border */}
      <span className={`w-[100px] h-[100px] rounded-full inline-block absolute border-[6px] border-c2 border-r-transparent animate-rotateBorder ${className}`}></span>

      {/* white circle + number */}
      <span className='bg-white w-[85px] h-[85px] inline-block rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
           
        <span className='text-[18px] font-medium  font-nun text-c1'>
          {count} %
        </span>

      </span>

    </span>

 

  </div>
</div>

  )
}

export default Routateborder


