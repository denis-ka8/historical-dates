import { DateSegmentCoords } from "../../types/dateInterval";

export interface SpinSliderItemProps {
	index: number;
	activeIndex: number;
	segment: DateSegmentCoords;
	rotate: number;
	onItemSelect: (index: number) => void;
}
