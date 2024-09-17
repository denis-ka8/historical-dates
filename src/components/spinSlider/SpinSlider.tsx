import {
	SpinSliderCircleWrapper,
	SpinSliderWrapper,
} from "./SpinSlider.styles";
import { SpinSliderCircle } from "./SpinSliderCircle";
import { SpinSliderDate } from "./SpinSliderDate";
import { SpinSliderNavigation } from "./SpinSliderNavigation";

interface SpinSliderProps {
	sliderId: string;
}

const SpinSlider: React.FC<SpinSliderProps> = () => {
	return (
		<>
			<SpinSliderWrapper>
				<SpinSliderCircleWrapper>
					<SpinSliderCircle />
					<SpinSliderDate />
				</SpinSliderCircleWrapper>
			</SpinSliderWrapper>
			<SpinSliderNavigation />
		</>
	);
};

export { SpinSlider };
