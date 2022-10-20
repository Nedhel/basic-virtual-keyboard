import React from "react";


export function Key({isUpper,lowerCase, upperCase, handlePressKey}){

    const styleActive='text-sky-600', styleInactive='text-orange-500';
    return(
        <button
            onClick={()=>handlePressKey(isUpper?upperCase:lowerCase)} 
            className="border w-16 h-16 rounded-lg bg-gray-800 m-0.5 text-xl active:bg-gray-500 font-bold">
            <span className={isUpper?styleActive:styleInactive}>{isUpper?upperCase:lowerCase}</span>
        </button>        
    )
}