import styled from "styled-components";
import { DEVICE, MAIN_COLOR_RGB } from "../../styles";

export const HistoricalDatesPage = styled.div`
	position: relative;
	padding-top: 75px;
	@media ${DEVICE.mobile} {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 75px;
		height: calc(100vh - 40px);
	}
`;
export const DatesSliderWrapper = styled.div`
	margin-top: 56px;
	@media ${DEVICE.mobile} {
		margin: 0;
	}
`;
export const DatesSliderDivider = styled.div`
	@media ${DEVICE.mobile} {
		padding-top: 20px;
		border-top: 1px solid rgba(${MAIN_COLOR_RGB}, 0.1);
	}
`;
export const PositionedTitle = styled.div`
	position: absolute;
	top: 35px;
	@media ${DEVICE.mobile} {
		position: static;
	}
`;
