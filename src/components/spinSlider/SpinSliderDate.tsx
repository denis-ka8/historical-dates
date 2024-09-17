import { useEffect, useState } from "react";
import {
	SliderDateLeft,
	SliderDateRight,
	SliderDateText,
} from "./SpinSlider.styles";
import { Counter } from "../counter/Counter";
import { useAppSelector } from "../../hook";
import { DateCounter } from "../../types/dateInterval";

const SpinSliderDate: React.FC = () => {
	const { currentInterval } = useAppSelector((state) => state.dateInterval);

	const [date, setDate] = useState<DateCounter | null>(null);

	useEffect(() => {
		if (currentInterval)
			setDate((prev) => ({
				segmentStart: prev?.segmentEnd || currentInterval,
				segmentEnd: currentInterval,
			}));
	}, [currentInterval]);

	if (!date) return null;

	return (
		<SliderDateText>
			<SliderDateLeft>
				<Counter
					start={date?.segmentStart.yearStart}
					end={date?.segmentEnd.yearStart}
				/>
			</SliderDateLeft>
			<SliderDateRight>
				<Counter
					start={date?.segmentStart.yearEnd}
					end={date?.segmentEnd.yearEnd}
				/>
			</SliderDateRight>
		</SliderDateText>
	);
};

export { SpinSliderDate };
