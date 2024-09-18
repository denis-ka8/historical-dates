import { useAppSelector } from "../../hook";
import { GradientTitle } from "../gradientTitle/GradientTitle";
import { SwiperSlider } from "../swiperSlider/SwiperSlider";
import {
	DatesSliderDivider,
	DatesSliderWrapper,
	HistoricalDatesPage,
	PositionedTitle,
} from "./HistoricalDates.styles";
import { SpinSlider } from "../spinSlider/SpinSlider";
import useFetchEvents from "../swiperSlider/useFetchEvents";
import useFetchIntervals from "./useFetchIntervals";
import useWindowResize from "./useWindowResize";
import { SpinSliderNavigation } from "../spinSlider/SpinSliderNavigation";

const HistoricalDates: React.FC = () => {
	const events = useAppSelector((state) => state.historicalDates.list);
	const { mode } = useAppSelector((state) => state.device);

	useWindowResize();

	useFetchEvents();

	const sliderId = "main-slider";

	useFetchIntervals();

	console.log("mode", mode);

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
				<DatesSliderDivider />
				<SwiperSlider sliderId={sliderId} events={events} />
			</DatesSliderWrapper>

			{mode === "mobile" && <SpinSliderNavigation />}
		</HistoricalDatesPage>
	);
};

export { HistoricalDates };
