import {
	SliderActiveTitle,
	SliderIndex,
	SpinSliderActive,
} from "./SpinSlider.styles";
import { SpinSliderItemProps } from "./SpinSlider.types";

const SpinSliderItem: React.FC<SpinSliderItemProps> = ({
	index,
	activeIndex,
	segment,
	onItemSelect,
	rotate,
}) => {
	return (
		<SpinSliderActive
			x={segment.x}
			y={segment.y}
			rotate={rotate}
			onClick={() => onItemSelect(index)}
		>
			<SliderIndex $active={index === activeIndex}>{index}</SliderIndex>
			<SliderActiveTitle $active={index === activeIndex}>
				{segment.category}
			</SliderActiveTitle>
		</SpinSliderActive>
	);
};

export { SpinSliderItem };
