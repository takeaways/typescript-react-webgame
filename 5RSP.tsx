import * as React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';

const rspCoords = {
	ROCK: '0',
	SCISSIORS: '-142px',
	PAPER: '-284px',
} as const;

const scores = {
	ROCK: 0,
	SCISSIORS: 1,
	PAPER: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];

const computerChoice = (imgCoords: ImgCoords) => {
	return (Object.keys(rspCoords) as ['ROCK', 'SCISSIORS', 'PAPER']).find(
		(k) => {
			return rspCoords[k] === imgCoords;
		}
	)!;
};

const RSP = () => {
	const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.ROCK);
	const [result, setResult] = useState('');
	const [score, setScore] = useState(0);
	const interval = useRef<number>();

	const changeHand = () => {
		if (imgCoord === rspCoords.ROCK) setImgCoord(rspCoords.SCISSIORS);
		else if (imgCoord === rspCoords.SCISSIORS) setImgCoord(rspCoords.ROCK);
		else if (imgCoord === rspCoords.PAPER) setImgCoord(rspCoords.PAPER);
	};

	const onClickBtn = (my: keyof typeof rspCoords) => {
		clearInterval(interval.current);
		const myScore = scores[my];
		const computerScore = scores[computerChoice(imgCoord)];
		switch (myScore - computerScore) {
			case 1: {
				setResult('WIN');
				break;
			}
			case -1:
			case 2: {
				setResult('Both');
				break;
			}
			default: {
				setResult('Loose');
				break;
			}
		}
		setTimeout(() => {
			interval.current = window.setInterval(changeHand, 100);
		}, 1000);
	};

	useEffect(() => {
		interval.current = window.setInterval(changeHand, 100);
		return () => {
			clearInterval(interval.current);
		};
	}, [imgCoord]);

	return (
		<>
			<div
				id="computer"
				style={{
					background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
				}}
			/>
			<div>
				<button
					id="rock"
					className="btn"
					onClick={() => {
						onClickBtn('ROCK');
					}}
				>
					ROCK
				</button>
				<button
					id="scissor"
					className="btn"
					onClick={() => {
						onClickBtn('SCISSIORS');
					}}
				>
					SCISSORS
				</button>
				<button
					id="paper"
					className="btn"
					onClick={() => {
						onClickBtn('PAPER');
					}}
				>
					PAPER
				</button>
			</div>
			<div>{result}</div>
			<div>현재 {score}점</div>
		</>
	);
};

export default RSP;
