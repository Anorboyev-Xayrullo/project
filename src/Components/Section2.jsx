import React from 'react'
import { form } from '../utils/utils'

export default function Section2() {
  return (
    <div className='container mx-auto mt-100px'>
        {form.map(({name})=>{
            return(
                <h3 className='text-white text-46px flex justify-center'>{name}</h3>
            )
        })}
        <div className="card">
            
        </div>
    </div>
  )
}
