import React from "react";
import { ImArrowLeft } from "react-icons/im";

export function KeyErase({handlePressKey}){
    return (
        <button 
            onClick={()=>handlePressKey('backspace')}
            className='border w-24 h-16 rounded-lg bg-gray-800 m-0.5 active:bg-gray-600 text-orange-500'
        >
            <ImArrowLeft/>         
        </button>
    )
}