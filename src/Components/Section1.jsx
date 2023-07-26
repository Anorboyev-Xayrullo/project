import React from 'react'
import { chart, other, speed } from '../utils/utils'
import imh from'../assets/Mask.svg'
import img from '../assets/Mask (1).svg'
import image from '../assets/Mask (2).svg'
export default function Section1() {
  return (
    <div className='container mx-auto mt-100px'>
        {other.map(({name})=>{
            return(
                <p className='text-white text-46px'>{name}</p>
            )
        })}
       <div className='flex mt-100px justify-between'>
       <div>
          <img src={imh} alt="" />
          {chart.map(({name})=>{
            return(
              <p className='text-white text-36px pt-50px mb-10px'>{name}</p>
            )
          })}
          {speed.map(({name})=>{
            return(
              <p className='text-white text-16px  pt-10px'>{name}</p>
            )
          })}
        </div>
        <div>
          <img src={img} alt="" />
          {chart.map(({name1})=>{
            return(
              <p className='text-white text-36px pt-50px mb-10px'>{name1}</p>
            )
          })}
          {speed.map(({name1})=>{
            return(
              <p className='text-white text-16px  pt-10px'>{name1}</p>
            )
          })}
        </div>
        <div>
          <img src={image} alt="" />
          {chart.map(({name2})=>{
            return(
              <p className='text-white text-36px pt-50px mb-10px'>{name2}</p>
            )
          })}
          {speed.map(({name2})=>{
            return(
              <p className='text-white text-16px  pt-10px'>{name2}</p>
            )
          })}
        </div>
       </div>
    </div>
  )
}
