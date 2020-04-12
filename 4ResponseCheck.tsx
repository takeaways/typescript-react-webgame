import * as React from 'react';
import { useState, useRef } from 'react';

const ResponseCheck = () => {
	const [state, setState] = useState('waiting');
	const [message, setMessage] = useState('클릭해서 시작하세요.');
	const [result, setResult] = useState<number[]>([]);
	const timeout = useRef<number | null>(null);
	const startTime = useRef(0);
	const endTime = useRef(0);

	const onClickScreen = () => {
		if (state === 'waiting') {
			timeout.current = (window.setTimeout(() => {
				setState('now');
				setMessage('지금 클릭');
				startTime.current = new Date().getTime();
			}, Math.floor(Math.random() * 1000) + 2000) as unknown) as number; // 2초~3초 랜덤
			setState('ready');
			setMessage('초록색이 되면 클릭하세요.');
		} else if (state === 'ready') {
			// 성급하게 클릭
			clearTimeout(timeout.current!);
		}

		const renderAverage = () => {
			return result.length === 0 ? null : (
				<>
					<div>
						평균 시간: {result.reduce((a, c) => a + c) / result.length}ms
					</div>
					{/* <button onClick={onReset}>리셋</button> */}
				</>
			);
		};

		return (
			<>
				<div id="screen" className={state} onClick={onClickScreen}>
					{message}
				</div>
				{renderAverage()}
			</>
		);
	};
};

export default ResponseCheck;
