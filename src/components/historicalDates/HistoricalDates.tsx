import { useAppSelector } from "../../hook";
import { GradientTitle } from "../gradientTitle/GradientTitle";
import { SwiperSlider } from "../swiperSlider/SwiperSlider";
import {
	DatesSliderWrapper,
	HistoricalDatesPage,
	PositionedTitle,
} from "./HistoricalDates.styles";
import { SpinSlider } from "../spinSlider/SpinSlider";

const HistoricalDates: React.FC = () => {
	const events = useAppSelector((state) => state.historicalDates.list);

	const sliderId = "main-slider";

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
		</HistoricalDatesPage>
	);
};

export { HistoricalDates };
