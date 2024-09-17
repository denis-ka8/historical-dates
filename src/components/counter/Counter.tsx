import { useRef, useEffect, useState } from "react";

interface CounterProps {
	start: number;
	end: number;
	duration?: number;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration = 0.3 }) => {
	const counterRef = useRef(start);
	const [count, setCount] = useState(start);

	useEffect(() => {
		if (start === end) return;
		let _duration = duration * 1000;
		if (end > start) {
			_duration = _duration / (end - start);
		} else {
			_duration = _duration / (start - end);
		}
		const timerInterval = setInterval(() => {
			if (end >= start) {
				if (counterRef.current < end) {
					counterRef.current = counterRef.current + 1;
					setCount(counterRef.current);
				}
				if (counterRef.current >= end) clearInterval(timerInterval);
			} else {
				if (counterRef.current > end) {
					counterRef.current = counterRef.current - 1;
					setCount(counterRef.current);
				}
				if (counterRef.current <= end) clearInterval(timerInterval);
			}
		}, _duration);
	}, [start, end]);

	return <>{count}</>;
};

export { Counter };
