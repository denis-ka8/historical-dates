import styled from "styled-components";
import {
	BACKGROUND_COLOR,
	ICONS_URL,
	MAIN_COLOR,
	MAIN_COLOR_RGB,
	PRIMARY_COLOR,
	SECONDARY_COLOR,
} from "../../styles";

const transitionTime = ".5s";

export const SpinSliderWrapper = styled.div`
	position: relative;
	&:before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		height: 1px;
		background: rgba(${MAIN_COLOR_RGB},.1);
	}
`;
export const SpinSliderCircleWrapper = styled.div`
	position: relative;
`;

/**
 * SpinSliderCircle styles
 */
interface SliderCircleProps {
	rotate: number;
}

export const SliderCircle = styled.div<SliderCircleProps>`
	position: relative;
	width: 530px;
	height: 530px;
	margin: 0 auto;
	border: 1px solid rgba(${MAIN_COLOR_RGB},.1);
	border-radius: 50%;
	transition: transform ${transitionTime} ease-out;
	transform: rotate(${(props) => props.rotate}deg);
	z-index: 1;
`;

/**
 * SpinSliderItem styles
 */
interface SliderItemProps {
	x: number;
	y: number;
	rotate: number;
}
interface SliderIndexProps {
	$active: boolean;
}
interface SliderActiveTitleProps {
	$active: boolean;
}

const ACTIVE_SIZE = 56;
const DOT_SIZE = 6;
const ACTIVE_TRANSITION_TIME = "0.3s";
export const SliderIndex = styled.div<SliderIndexProps>`
	width: ${ACTIVE_SIZE}px;
	height: ${ACTIVE_SIZE}px;
	font-weight: 400;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(48, 62, 88, 0.5);
	border-radius: 50%;
	background: ${BACKGROUND_COLOR};
	transform: scale(1);
	transition: all ${ACTIVE_TRANSITION_TIME} ease-out;
	${(props) =>
		!props.$active &&
		`
    transform: scale(0);
    background: ${MAIN_COLOR};
  `}
`;
export const SpinSliderActive = styled.div<SliderItemProps>`
	display: flex;
	gap: 20px;
	align-items: center;
	position: absolute;
	top: ${(props) => props.y}px;
	left: ${(props) => props.x}px;
	transform: rotate(${(props) => props.rotate}deg)
		translateX(-${ACTIVE_SIZE / 2}px) translateY(-${ACTIVE_SIZE / 2}px);
	transform-origin: top left;
	transition: transform ${transitionTime} ease-out;
	white-space: nowrap;
	cursor: pointer;
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;

	&:before {
		content: "";
		position: absolute;
		top: ${ACTIVE_SIZE / 2 - DOT_SIZE / 2}px;
		left: ${ACTIVE_SIZE / 2 - DOT_SIZE / 2}px;
		width: ${DOT_SIZE}px;
		height: ${DOT_SIZE}px;
		border-radius: 50%;
		background: ${MAIN_COLOR};
		z-index: -1;
	}

	&:hover ${SliderIndex} {
		background: ${BACKGROUND_COLOR};
		transform: scale(1);
	}
`;
export const SliderActiveTitle = styled.div<SliderActiveTitleProps>`
	transition: all ${ACTIVE_TRANSITION_TIME} ease-out;
	opacity: 1;
	${(props) =>
		!props.$active &&
		`
    opacity: 0;
  `}
`;

/**
 * SpinSliderDate styles
 */
export const SliderDateText = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-80px);
	display: flex;
	justify-content: center;
	gap: 100px;
	font-size: 200px;
	font-weight: 700;
	line-height: 160px;
	letter-spacing: -0.02em;
`;
export const SliderDateLeft = styled.div`
	text-align: right;
	color: ${PRIMARY_COLOR};
`;
export const SliderDateRight = styled.div`
	color: ${SECONDARY_COLOR};
`;

/**
 * SpinSliderNavigation
 */
interface SpinSliderNavigationButtonProps {
	$arrowLeft?: boolean;
	$disabled?: boolean;
}
export const SpinSliderNavigationWrapper = styled.div`
	padding-left: 80px;
`;
export const SpinSliderNavigationText = styled.div`
	margin-bottom: 20px;
`;
export const SpinSliderNavigationButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
export const SpinSliderNavigationButton = styled.div<SpinSliderNavigationButtonProps>`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 1px solid rgba(${MAIN_COLOR_RGB}, 0.5);
	background-image: url(${ICONS_URL}arrow-right-main.svg);
	background-position: center;
	background-repeat: no-repeat;
	transition: background-color 0.3s ease-out;
	${(props) =>
		props.$disabled
			? `
		opacity: 0.5;
	`
			: `
		opacity: 1;
		cursor: pointer;
		&:hover {
			background-color: #fff;
		}
	`}
	${(props) => props.$arrowLeft && `transform: rotate(180deg);`}
`;
