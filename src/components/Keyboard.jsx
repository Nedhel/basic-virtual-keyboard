import React from "react";
import { Key } from "./Key";
import { KeyShift } from "./KeyShift";

export function Keyboard({isUpper, shiftFuncion}){
    return (
        <div>
            <div className="flex justify-center">
                <Key isUpper={isUpper} lowerCase="1" upperCase="!" />
                <Key isUpper={isUpper} lowerCase="2" upperCase="'" />
                <Key isUpper={isUpper} lowerCase="3" upperCase="#" />
                <Key isUpper={isUpper} lowerCase="4" upperCase="$" />
                <Key isUpper={isUpper} lowerCase="5" upperCase="%" />
                <Key isUpper={isUpper} lowerCase="6" upperCase="&" />
                <Key isUpper={isUpper} lowerCase="7" upperCase="/" />
                <Key isUpper={isUpper} lowerCase="8" upperCase="(" />
                <Key isUpper={isUpper} lowerCase="9" upperCase=")" />
                <Key isUpper={isUpper} lowerCase="0" upperCase="=" />
            </div>
            <div className="flex justify-center">
                <Key isUpper={isUpper} lowerCase="q" upperCase="Q" />
                <Key isUpper={isUpper} lowerCase="w" upperCase="W" />
                <Key isUpper={isUpper} lowerCase="e" upperCase="E" />
                <Key isUpper={isUpper} lowerCase="r" upperCase="R" />
                <Key isUpper={isUpper} lowerCase="t" upperCase="T" />
                <Key isUpper={isUpper} lowerCase="y" upperCase="Y" />
                <Key isUpper={isUpper} lowerCase="u" upperCase="U" />
                <Key isUpper={isUpper} lowerCase="i" upperCase="I" />
                <Key isUpper={isUpper} lowerCase="o" upperCase="O" />
                <Key isUpper={isUpper} lowerCase="p" upperCase="P" />
            </div>
            <div className="flex justify-center">
                <Key isUpper={isUpper} lowerCase="a" upperCase="A" />
                <Key isUpper={isUpper} lowerCase="s" upperCase="S" />
                <Key isUpper={isUpper} lowerCase="d" upperCase="D" />
                <Key isUpper={isUpper} lowerCase="f" upperCase="F" />
                <Key isUpper={isUpper} lowerCase="g" upperCase="G" />
                <Key isUpper={isUpper} lowerCase="h" upperCase="H" />
                <Key isUpper={isUpper} lowerCase="j" upperCase="J" />
                <Key isUpper={isUpper} lowerCase="k" upperCase="K" />
                <Key isUpper={isUpper} lowerCase="l" upperCase="L" />
            </div>
            <div className="flex justify-center">
                <KeyShift isUpper={isUpper} shiftFunction={shiftFuncion} />
                <Key isUpper={isUpper} lowerCase="z" upperCase="Z" />
                <Key isUpper={isUpper} lowerCase="x" upperCase="X" />
                <Key isUpper={isUpper} lowerCase="c" upperCase="C" />
                <Key isUpper={isUpper} lowerCase="v" upperCase="V" />
                <Key isUpper={isUpper} lowerCase="b" upperCase="B" />
                <Key isUpper={isUpper} lowerCase="n" upperCase="N" />
                <Key isUpper={isUpper} lowerCase="m" upperCase="M" />
            </div>
        </div>
    )
}