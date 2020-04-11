import * as React from 'react';
import { useState, useCallback, useRef } from 'react';
const WordRelay = () => {
    const [word, setWord] = useState<string>('장건일');
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const input = inputRef.current;

            if (word[word.length - 1] === value[0]) {
                setWord(value);
                setValue('');
                setResult('정답');
                if (input) {
                    input.focus();
                }
            } else {
                setResult('땡');
                setValue('');
                if (input) {
                    input.focus();
                }
            }
        },
        [value, word]
    );

    const onChange = useCallback((e) => setValue(e.target.value), []);

    return (
        <>
            <div>
                <div>{word}</div>
                <form onSubmit={onSubmit}>
                    <input ref={inputRef} onChange={onChange} value={value} />
                </form>
                <div>{result}</div>
            </div>
        </>
    );
};

export default WordRelay;
