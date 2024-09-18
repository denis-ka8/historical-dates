import styled from "styled-components";
import { ACCENT_COLOR, DEVICE } from "../../styles";

export const SliderItemTitle = styled.div`
  color: ${ACCENT_COLOR};
  font-family: BebasNeue;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 15px;
	@media ${DEVICE.mobile} {
    font-size: 16px;
  }
`;
export const SliderItemInfo = styled.div`
  font-size: 20px;
  line-height: 30px;
	@media ${DEVICE.mobile} {
    font-size: 14px;
    line-height: 20px;
  }
`;
