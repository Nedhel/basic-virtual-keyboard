import React from "react";
import { Key } from "./Key";
import { KeyShift } from "./KeyShift";
import { KeySpace } from "./KeySpace";
import { KeyErase } from "./KeyErase";

export function Keyboard({isUpper, shiftFuncion, handlePressKey}){
    return (
        <div>
            <div className="flex justify-center">
                <Key isUpper={isUpper} lowerCase="1" upperCase="!" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="2" upperCase="'" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="3" upperCase="#" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="4" upperCase="$" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="5" upperCase="%" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="6" upperCase="&" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="7" upperCase="/" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="8" upperCase="(" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="9" upperCase=")" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="0" upperCase="=" handlePressKey={handlePressKey}/>
                <KeyErase handlePressKey={handlePressKey}/>
            </div>
            <div className="flex justify-center">
                <Key isUpper={isUpper} lowerCase="q" upperCase="Q" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="w" upperCase="W" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="e" upperCase="E" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="r" upperCase="R" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="t" upperCase="T" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="y" upperCase="Y" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="u" upperCase="U" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="i" upperCase="I" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="o" upperCase="O" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="p" upperCase="P" handlePressKey={handlePressKey}/>
            </div>
            <div className="flex justify-center">
                <Key isUpper={isUpper} lowerCase="a" upperCase="A" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="s" upperCase="S" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="d" upperCase="D" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="f" upperCase="F" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="g" upperCase="G" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="h" upperCase="H" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="j" upperCase="J" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="k" upperCase="K" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="l" upperCase="L" handlePressKey={handlePressKey}/>
            </div>
            <div className="flex justify-center">
                <KeyShift isUpper={isUpper} shiftFunction={shiftFuncion} />
                <Key isUpper={isUpper} lowerCase="z" upperCase="Z" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="x" upperCase="X" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="c" upperCase="C" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="v" upperCase="V" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="b" upperCase="B" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="n" upperCase="N" handlePressKey={handlePressKey}/>
                <Key isUpper={isUpper} lowerCase="m" upperCase="M" handlePressKey={handlePressKey}/>
            </div>
            <div className="flex justify-center">
                <KeySpace handlePressKey={handlePressKey} />
            </div>
        </div>
    )
}