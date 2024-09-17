import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../styles";
import styled from "styled-components";

export const StyledTitle = styled.div`
	font-size: 56px;
	line-height: 67px;
	position: relative;
  padding-left: 80px;
	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: -7px;
		bottom: -7px;
		width: 5px;
		background: rgb(56, 119, 238);
		background: -moz-linear-gradient(
			180deg,
			${PRIMARY_COLOR} 0%,
			${SECONDARY_COLOR} 100%
		);
		background: -webkit-linear-gradient(
			180deg,
			${PRIMARY_COLOR} 0%,
			${SECONDARY_COLOR} 100%
		);
		background: linear-gradient(
			180deg,
			${PRIMARY_COLOR} 0%,
			${SECONDARY_COLOR} 100%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="${PRIMARY_COLOR}",endColorstr="${SECONDARY_COLOR}",GradientType=1);
	}
`;
