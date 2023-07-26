import React from 'react'
import { sec } from '../utils/utils'

export default function Section() {
  return (
    <div className='container mx-auto flex justify-center'>
        {sec.map(({name})=>{
            return(
                <h2 className='text-white text-46px '>{name}</h2>
            )
        })}
        <div>
                
        </div>
    </div>
  )
}
