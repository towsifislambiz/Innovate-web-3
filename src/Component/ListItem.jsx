import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const ListItem = ({Text , className , className2}) => {
  return (
    <div className=''>
      <li className={`group flex  font-open font-semibold text-lg text-white cursor-pointer   ${className}`}> {Text}

        <MdKeyboardArrowDown  className={`opacity-0 text-2xl mt-[4px] group-hover:opacity-100 duration-300 group-hover:translate-y-5 ${className2}`}/>
      </li>
    </div>
  )
}

export default ListItem
