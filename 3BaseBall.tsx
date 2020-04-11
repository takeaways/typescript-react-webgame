import * as React from "react";
import { useState, useCallback, useRef } from "react"


import Try from "./3Try";


const getNumber = (): number[] => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const array: number[] = [];
    for (let i = 0; i < 4; i++) {
        const tmp = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(tmp);
    }
    return array
}

const BaseBall = () => {

    const [result, setResult] = useState<string>("Hello");
    const [value, setValue] = useState<string>("World");

    const onSubmit = useCallback((e) => {
        e.preventDefault();

    }, [value])

    const onChange = useCallback(e => setValue(e.target.value), []);



    return (
        <>
            <div>{result}</div>
            <form onSubmit={onSubmit}>
                <input

                    value={value}
                    onChange={onChange}
                />
            </form>
        </>
    )
}

export default BaseBall