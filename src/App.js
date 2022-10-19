import React, { useState } from "react";
import { Keyboard } from "./components/Keyboard";

function App() {
    const [shift, setShift] = useState(false);

    function handleShift() {
        setShift(!shift);
    }

    return (
        <>
            <div className="flex flex-col justify-around items-center h-screen bg-stone-800">
                <h1 className="font-bold text-xl text-white">
                    Teclado en Pantalla
                </h1>

                <input
                    type="text"
                    className="border w-60 h-8 rounded-md"
                ></input>
                <Keyboard isUpper={shift} shiftFuncion={handleShift} />
            </div>
        </>
    );
}

export default App;
