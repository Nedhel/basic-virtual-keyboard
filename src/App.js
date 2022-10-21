import React, { useState } from "react";
import { Keyboard } from "./components/Keyboard";

function App() {
    const [shift, setShift] = useState(false);
    //const [input1, setInput1] = useState("");
    //const [input2, setInput2] = useState("");
    const [inputs, setInputs] = useState({ input1: "", input2: "" });
    const [current, setCurrent] = useState("");

    function handleShift() {
        setShift(!shift);
    }
    function handlePressKey(letter) {
        if (current === "input1") {
            if (letter === "backspace") {
                setInputs({ ...inputs, input1: handleErase() });
            } else {
                setInputs({ ...inputs, input1: inputs.input1 + letter });
            }
            console.log(4);
            console.log(current);
        } else {
            if (letter === "backspace") {
                setInputs({ ...inputs, input2: handleErase() });
            } else {
                setInputs({ ...inputs, input2: inputs.input2 + letter });
            }
            console.log(5);
            console.log(current);
        }
    }
    function handleonChangeInput(e) {
        if (current === "input1") {
            setInputs({ ...inputs, input1: e.target.value });
            console.log(2);
        } else {
            setInputs({ ...inputs, input2: e.target.value });
            console.log(3);
        }
    }
    function handleInputFocus(e) {
        setCurrent(e.target.id);
        console.log(1);
    }
    function handleErase() {
        let size;
        let input;
        if (current === "input1") {
            console.log(inputs.input1.length);
            size = inputs.input1.length;
            input = inputs.input1.substring(0, size - 1);
        } else {
            size = inputs.input2.length;
            input = inputs.input2.substring(0, size - 1);
        }
        return input;
    }

    return (
        <>
            <div className="flex flex-col justify-around items-center h-screen bg-stone-800">
                <h1 className="font-bold text-xl text-white">
                    Teclado en Pantalla
                </h1>

                <input
                    type="text"
                    id="input1"
                    onChange={handleonChangeInput}
                    onFocus={handleInputFocus}
                    value={inputs.input1}
                    className="border w-60 h-8 rounded-md"
                ></input>
                <input
                    type="text"
                    id="input2"
                    onChange={handleonChangeInput}
                    onFocus={handleInputFocus}
                    value={inputs.input2}
                    className="border w-60 h-8 rounded-md"
                ></input>

                <Keyboard
                    isUpper={shift}
                    shiftFuncion={handleShift}
                    handlePressKey={handlePressKey}
                />
            </div>
        </>
    );
}

export default App;
