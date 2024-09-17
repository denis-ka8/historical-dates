import { useAppSelector } from "../../hook";
import { useDispatch } from "react-redux";
import {
	SpinSliderNavigationWrapper,
	SpinSliderNavigationText,
	SpinSliderNavigationButton,
	SpinSliderNavigationButtons,
} from "./SpinSlider.styles";
import { setNavigateTo } from "../../store/dateIntervalSlice";

const SpinSliderNavigation: React.FC = () => {
	const dispatch = useDispatch();
	const { segments, currentIndex } = useAppSelector(
		(state) => state.dateInterval
	);
	const formatCurrent = currentIndex.toString().padStart(2, "0");
	const formatTotal = segments.length.toString().padStart(2, "0");

	const navClick = (step: number) => {
		if (step < 0 && currentIndex === 1) return;
		if (step > 0 && currentIndex > segments.length - 1) return;

		dispatch(setNavigateTo(currentIndex + step));
	};

	if (!segments.length) return null;

	return (
		<SpinSliderNavigationWrapper>
			<SpinSliderNavigationText>
				{formatCurrent}/{formatTotal}
			</SpinSliderNavigationText>
			<SpinSliderNavigationButtons>
				<SpinSliderNavigationButton
					$arrowLeft={true}
					$disabled={currentIndex === 1}
					onClick={() => navClick(-1)}
				/>
				<SpinSliderNavigationButton
					$disabled={currentIndex > segments.length - 1}
					onClick={() => navClick(1)}
				/>
			</SpinSliderNavigationButtons>
		</SpinSliderNavigationWrapper>
	);
};

export { SpinSliderNavigation };
