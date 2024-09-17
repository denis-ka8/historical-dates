import { useAppSelector } from "../../hook";
import { GradientTitle } from "../gradientTitle/GradientTitle";
import { SwiperSlider } from "../swiperSlider/SwiperSlider";
import {
	DatesSliderWrapper,
	HistoricalDatesPage,
	PositionedTitle,
} from "./HistoricalDates.styles";
import { SpinSlider } from "../spinSlider/SpinSlider";
import useFetchEvents from "../swiperSlider/useFetchEvents";
import useFetchIntervals from "./useFetchIntervals";

const HistoricalDates: React.FC = () => {
	const events = useAppSelector((state) => state.historicalDates.list);

	const { currentInterval } = useFetchEvents();

	const sliderId = "main-slider";
	// const slider2Id = "second-slider";

	useFetchIntervals();

	return (
		<HistoricalDatesPage>
			<PositionedTitle>
				<GradientTitle>
					Исторические
					<br />
					даты
				</GradientTitle>
			</PositionedTitle>

			<SpinSlider sliderId={sliderId} />

			<DatesSliderWrapper>
				<SwiperSlider sliderId={sliderId} events={events} />
			</DatesSliderWrapper>

			{/* <br />
			<br />
			<br />
			<br />
			<SpinSlider sliderId={slider2Id} />
			<SwiperSlider sliderId={slider2Id} events={events} /> */}
		</HistoricalDatesPage>
	);
};

export { HistoricalDates };
