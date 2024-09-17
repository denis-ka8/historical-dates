import { SliderCircle } from "./SpinSlider.styles";
import { useEffect, useRef, useState } from "react";
import { SpinSliderItem } from "./SpinSliderItem";
import { useAppDispatch, useAppSelector } from "../../hook";
import { setCurrentIndex } from "../../store/dateIntervalSlice";
import { DateSegmentCoords } from "../../types/dateInterval";

const SpinSliderCircle: React.FC = () => {
	const circleRef = useRef<HTMLDivElement>(null);
	const [rotateDeg, setRotateDeg] = useState(0);

	const dispatch = useAppDispatch();
	const { segments, currentIndex, navTo } = useAppSelector(
		(state) => state.dateInterval
	);
	const [segmentCoords, setSegmentCoords] = useState<DateSegmentCoords[]>([]);

	let startAngle = !segmentCoords.length
		? 90
		: 90 - 360 / segmentCoords.length / 2;

	useEffect(() => {
		setSegmentCoords(
			segments.map((item, index) => ({
				...item,
				x: 0,
				y: 0,
				index: index + 1,
			}))
		);
	}, [segments]);

	const setActive = (index: number) => {
		const deg = -1 * (index - 1) * (360 / segmentCoords.length);
		setRotateDeg(deg);
		dispatch(setCurrentIndex(index));
	};

	const renderDots = () => {
		if (!circleRef.current) return;

		let circle = circleRef.current.getBoundingClientRect();
		let radius = circle.width / 2;
		var x = radius * Math.cos(Math.PI / 2);
		var y = radius * Math.sin(Math.PI / 2);

		const diffAngle = !segmentCoords.length ? 0 : 360 / segmentCoords.length;

		let _segmentCoords = segmentCoords.map((item, index) => {
			let angle = startAngle - diffAngle * index;
			return {
				...item,
				x: circle.width / 2 + radius * Math.cos((-angle * Math.PI) / 180),
				y: circle.width / 2 + radius * Math.sin((-angle * Math.PI) / 180),
			};
		});
		setSegmentCoords(_segmentCoords);
	};

	useEffect(() => {
		if (segmentCoords.length) renderDots();
	}, [segmentCoords.length]);

	useEffect(() => {
		if (!navTo) return;

		setActive(navTo);
	}, [navTo]);

	return (
		<SliderCircle ref={circleRef} rotate={rotateDeg}>
			{segmentCoords.map((item) => (
				<SpinSliderItem
					key={item.yearStart}
					index={item.index}
					activeIndex={currentIndex}
					segment={item}
					rotate={-1 * rotateDeg}
					onItemSelect={(selectedIndex) => setActive(selectedIndex)}
				/>
			))}
		</SliderCircle>
	);
};

export { SpinSliderCircle };
