import React from 'react'
import image from '../assets/kisspng-2018-ford-mustang-coupe-2018-ford-mustang-gt-premi-third-generation-ford-mustang-5b1dd219884808.svg'
import { cars, cars1, cars2, cars3, li, now, now1, tex } from '../utils/utils'

export default function Header() {
  return (
    <div className=' flex mt-100px container mx-auto justify-between '>
        <div>
        {tex.map(({name})=>{
            return(
                <h3 className='text-[white] text-52px w-500px'>{name}</h3>
            )
        })}
        <p className='mt-30px '>{li.map(({name})=>{
            return(
                <span className='text-white text-18px '>{name}</span>
            )
        })}</p>
        <div>
            <button className='flex gap-50px mt-30px'>
                {now.map(({name})=>{
                    return(
                        <p className='text-white   px-25px py-10px bg-yellow-500 text-20px'>{name}</p>
                    )
                })}
                {now1.map(({name1})=>{
                    return(
                        <p className=' text-yellow-500 border-yellow-500 border px-25px py-8px fz-24px'>{name1}</p>
                    )
                })}
            </button>
        </div>
        <div className='mt-30px flex gap-50px'>
            {cars.map(({name,name1})=>{
                return(
                    <p className='text-white text-46px'>{name}</p>
                )
            })}
            {cars1.map(({name})=>{
                return(
                    <p className='text-white mt-20px text-16px'>{name}</p>
                )
            })}
            {cars2.map(({name})=>{
                return(
                    <p className='text-white text-46px'>{name}</p>
                )
            })}
            {cars3.map(({name})=>{
                return(
                    <h3 className='text-white mt-20px text-16px'>{name}</h3>
                )
            })}
        </div>
        </div>
        <img className='mt-[-100px]' src={image} alt="" />
    </div>
  )
}
