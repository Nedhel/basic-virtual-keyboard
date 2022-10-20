import React from "react";
import { BsShift } from "react-icons/bs";

export function KeyShift({isUpper, shiftFunction}){
    return (
        <button 
            onClick={shiftFunction}
            className={isUpper?'border w-20 h-16 rounded-lg bg-gray-600 m-0.5':'border w-20 h-16 rounded-lg bg-gray-800 m-0.5'} 
        >
            <span className={isUpper?'text-sky-600 text-xl':'text-slate-400 text-xl'}><BsShift /></span> 
        </button>
    )
}