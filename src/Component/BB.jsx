import React from 'react'

const BB = ({Text , className}) => {
  return (
    <div>
      <button className={`font-nun font-medium text-xl text-[#ffffffb3] border border-[#ffffffb3] rounded-[10px] py-[10px] px-[15px] ${className}`}>
        {Text}
      </button>
    </div>
  )
}

export default BB
