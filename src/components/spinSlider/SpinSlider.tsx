import { useAppSelector } from "../../hook";
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
	const { mode } = useAppSelector((state) => state.device);
	return (
		<>
			<SpinSliderWrapper>
				<SpinSliderCircleWrapper>
					<SpinSliderCircle />
					<SpinSliderDate />
				</SpinSliderCircleWrapper>
			</SpinSliderWrapper>
			{mode === "desktop" && <SpinSliderNavigation />}
		</>
	);
};

export { SpinSlider };
