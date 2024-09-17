import { SliderItemInfo, SliderItemTitle } from "./SwiperSliderItem.styles";
import { HistoricalDate } from "../../types/historicalDate";

interface SwiperSliderItemProps {
	event: HistoricalDate;
}

const SwiperSliderItem: React.FC<SwiperSliderItemProps> = ({ event }) => {
	return (
		<>
			<SliderItemTitle>{event.year}</SliderItemTitle>
			<SliderItemInfo>{event.description}</SliderItemInfo>
		</>
	);
};

export { SwiperSliderItem };
