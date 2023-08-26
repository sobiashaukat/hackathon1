
"use client"

import React,{useState} from 'react'
const Quantity = () => {
   const[num , setNum]= useState(1);
    return (
        <div className='flex gap-x-2 items-center'>
            <button
             onClick={() => {
                setNum(num <= 1 ? 1 : num-1);
             }}
            


 className='border  rounded-full h-6 w-6 centre'>
    -
    </button>          




            {/*number*/}
            <span className='text-sm'>{num}</span>




            {/*plus*/}
            <button 
            className='h-6 w-6 border rounded-full centre'
             onClick={() => {
                setNum(num+1)
             }}
             >
                +
                </button>
    




        </div>
    )
}

export default Quantity
export const OperationButton = () => {
    <div className='border  rounded-full h-6 w-6 centre'>
    -
    </div>    

};




