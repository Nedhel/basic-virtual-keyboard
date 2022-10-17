import React from "react";
import { BsShift } from "react-icons/bs";

export function KeyShift({isUpper}){
    return (
        <button className="border w-20 h-16 rounded-lg bg-gray-800 m-0.5">
            <span className={isUpper?'text-sky-600':'text-slate-400'}><BsShift /></span> 
        </button>
    )
}