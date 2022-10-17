import React from "react";


export function Key({isUpper,lowerCase, upperCase}){
    const styleActive='text-sky-600 font-bold', styleInactive='text-slate-400 font-normal';
    return(
        <button className="border w-16 h-16 rounded-lg bg-gray-800 m-0.5">
            <span className={isUpper?styleActive:styleInactive}>{upperCase}</span>
            <span className={isUpper?styleInactive:styleActive}>{lowerCase}</span>
        </button>
        
        
    )
}