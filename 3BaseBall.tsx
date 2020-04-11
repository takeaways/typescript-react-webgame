import * as React from 'react';
import { useState, useCallback, useRef } from 'react';

import Try from './3Try';

interface numberCase {
	s: 1;
	b: 0;
	o: -1;
}

export interface TryInfo {
	tryInfo: string;
}

const getNumber = (): number[] => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array: number[] = [];
	for (let i = 0; i < 4; i++) {
		const tmp = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		array.push(tmp);
	}
	return array;
};

const BaseBall = () => {
	const [count, setCount] = useState<number>(0);
	const [answer, setAnswer] = useState<number[]>(getNumber());
	const [result, setResult] = useState<string>('');
	const [value, setValue] = useState<string>('');
	const [info, setInfo] = useState<string[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = useCallback(
		(e) => {
			e.preventDefault();
			const inputValue: numberCase[keyof numberCase][] = value
				.split('')
				.map((t, i) => {
					if (t === answer[i].toString()) {
						return 1;
					} else if (answer.includes(parseInt(t))) {
						return 0;
					} else {
						return -1;
					}
				});

			console.log('>>>> ', inputValue);
			const s = inputValue.filter((s) => s === 1);
			const b = inputValue.filter((b) => b === 0);
			const input = inputRef.current;
			if (s.length === 4) {
				setResult('홈런!!');
				setAnswer(getNumber());
				setValue('');
				setInfo([]);
				if (input) {
					input.focus();
				}
			} else {
				if (count === 10) {
					alert('꽝!!!!!!!!!!');
					setAnswer(getNumber());
					setCount(0);
					setResult('');
					setInfo([]);

					if (input) {
						input.focus();
					}
				} else {
					setInfo((pre) => [`${s.length}S ${b.length}b ${value}`, ...pre]);
					setCount((pre) => pre + 1);
					setValue('');
					if (input) {
						input.focus();
					}
				}
			}

			setValue('');
		},
		[value, count]
	);

	const onChange = useCallback((e) => setValue(e.target.value), []);

	return (
		<>
			<p>{count} play </p>
			<div>{answer}</div>
			<form onSubmit={onSubmit}>
				<input
					ref={inputRef}
					value={value}
					onChange={onChange}
					type={'number'}
					maxLength={4}
				/>
			</form>
			<div>{result}</div>
			<ul>
				{info.map((i) => (
					<Try key={i} tryInfo={i} />
				))}
			</ul>
		</>
	);
};

export default BaseBall;
