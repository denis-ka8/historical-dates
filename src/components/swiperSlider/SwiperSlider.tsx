import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import { SwiperSliderItem } from "./SwiperSliderItem";
import { HistoricalDate } from "../../types/historicalDate";

interface SwiperSliderProps {
	sliderId: string;
	events: HistoricalDate[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ events }) => {
	return (
		<Swiper
      slidesPerView={'auto'}
			spaceBetween={80}
      slidesOffsetBefore={80}
      slidesOffsetAfter={80}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Mousewheel, Keyboard]}
			className="my-swiper"
		>
			{events.map((event) => (
				<SwiperSlide key={event.eventId}>
					<SwiperSliderItem event={event} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export { SwiperSlider };
