import React from 'react'
import { NavLi, btn } from '../utils/utils'
import img from '../assets/Group 1 (4).svg'

export default function Navbar() {
  return (
    <div className='container mx-auto flex justify-between items-center mt-20px'>
      <img src={img} alt="" />
       <ul className='flex gap-[50px] pl-500px '>
       {NavLi.map(({name})=>{
          return(
            <li className='text-white mt-10px text-18px '>{name}</li>
          )
        })}
       </ul>
       {btn.map(({name})=>{
          return(
            <button className='text-[white] p-10px  border bg-[#EE8313]'>{name}</button>
          )
        })}
    </div>
  )
}
