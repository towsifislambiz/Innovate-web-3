import React from 'react'

const Button = ({ className, Text }) => {
  return (
    <button
      className={`bg-transparent font-nun text-lg font-semibold rounded-[18px] border py-[16px] px-[32px] ${className}`}
    >
      {Text}
    </button>
  )
}

export default Button
