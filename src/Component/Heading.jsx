import React from 'react'

const Heading = ({className , Text}) => {
  return (
    <div>
      <h1 className={`font-pop font-semibold text-c1 text-5xl ${className}`}>{Text}</h1>
    </div>
  )
}

export default Heading
