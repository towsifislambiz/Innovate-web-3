import React from 'react'

const Button = ({className , Text}) => {
  return (
   <div>
     <button className={`bg-transparent text-white font-nun text-lg font-semibold rounded-[18px] border border-white py-[16px] px-[32px] ${className}`}>
        {Text}
    </button>
   </div>
  )
}

export default Button
