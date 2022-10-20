import React from "react";

export function KeySpace({handlePressKey}){
    return (
        <button 
            onClick={()=>handlePressKey(' ')}
            className='border w-80 h-16 rounded-lg bg-gray-800 m-0.5 active:bg-gray-600'
        >             
        </button>
    )
}