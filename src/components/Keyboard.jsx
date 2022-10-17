import React from "react";
import { Key } from "./Key";
import { KeyShift } from "./KeyShift";

export function Keyboard(){
    return (
        <div>
            <div className="flex justify-center">
                <Key isUpper={false} lowerCase="1" upperCase="!" />
                <Key isUpper={false} lowerCase="2" upperCase="'" />
                <Key isUpper={false} lowerCase="3" upperCase="#" />
                <Key isUpper={false} lowerCase="4" upperCase="$" />
                <Key isUpper={false} lowerCase="5" upperCase="%" />
                <Key isUpper={false} lowerCase="6" upperCase="&" />
                <Key isUpper={false} lowerCase="7" upperCase="/" />
                <Key isUpper={false} lowerCase="8" upperCase="(" />
                <Key isUpper={false} lowerCase="9" upperCase=")" />
                <Key isUpper={false} lowerCase="0" upperCase="=" />
            </div>
            <div className="flex justify-center">
                <Key isUpper={false} lowerCase="q" upperCase="Q" />
                <Key isUpper={false} lowerCase="w" upperCase="W" />
                <Key isUpper={false} lowerCase="e" upperCase="E" />
                <Key isUpper={false} lowerCase="r" upperCase="R" />
                <Key isUpper={false} lowerCase="t" upperCase="T" />
                <Key isUpper={false} lowerCase="y" upperCase="Y" />
                <Key isUpper={false} lowerCase="u" upperCase="U" />
                <Key isUpper={false} lowerCase="i" upperCase="I" />
                <Key isUpper={false} lowerCase="o" upperCase="O" />
                <Key isUpper={false} lowerCase="p" upperCase="P" />
            </div>
            <div className="flex justify-center">
                <Key isUpper={false} lowerCase="a" upperCase="A" />
                <Key isUpper={false} lowerCase="s" upperCase="S" />
                <Key isUpper={false} lowerCase="d" upperCase="D" />
                <Key isUpper={false} lowerCase="f" upperCase="F" />
                <Key isUpper={false} lowerCase="g" upperCase="G" />
                <Key isUpper={false} lowerCase="h" upperCase="H" />
                <Key isUpper={false} lowerCase="j" upperCase="J" />
                <Key isUpper={false} lowerCase="k" upperCase="K" />
                <Key isUpper={false} lowerCase="l" upperCase="L" />
            </div>
            <div className="flex justify-center">
                <KeyShift isUpper={false} />
                <Key isUpper={false} lowerCase="z" upperCase="Z" />
                <Key isUpper={false} lowerCase="x" upperCase="X" />
                <Key isUpper={false} lowerCase="c" upperCase="C" />
                <Key isUpper={false} lowerCase="v" upperCase="V" />
                <Key isUpper={false} lowerCase="b" upperCase="B" />
                <Key isUpper={false} lowerCase="n" upperCase="N" />
                <Key isUpper={false} lowerCase="m" upperCase="M" />
            </div>
        </div>
    )
}