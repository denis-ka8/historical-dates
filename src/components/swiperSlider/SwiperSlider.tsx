import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperSliderItem } from "./SwiperSliderItem";
import { HistoricalDate } from "../../types/historicalDate";
import { useEffect, useRef } from "react";

interface SwiperSliderProps {
	sliderId: string;
	events: HistoricalDate[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ events }) => {
	const swiperRef = useRef<SwiperRef>(null);

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current?.swiper?.slideTo(0, 0);
			swiperRef.current?.swiper?.update();
		}
	}, [events]);

	return (
		<Swiper
			ref={swiperRef}
			slidesPerView={"auto"}
			spaceBetween={25}
			navigation={true}
			mousewheel={true}
			keyboard={true}
			modules={[Navigation, Mousewheel, Keyboard]}
			className="my-swiper"
			breakpoints={{
				1000: {
					slidesOffsetBefore: 80,
					slidesOffsetAfter: 80,
					spaceBetween: 80
				}
			}}
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
