import styled, { createGlobalStyle } from "styled-components";

export const ICONS_URL = `/images/icons/`;

export const BACKGROUND_COLOR = "#F4F5F9";
export const MAIN_COLOR_RGB = "66, 86, 122";
export const MAIN_COLOR = "#42567A";
export const ACCENT_COLOR = "#3877EE";
export const PRIMARY_COLOR = "#3877EE";
export const SECONDARY_COLOR = "#EF5DA8";

export const DEVICE = {
  mobile: `(max-width: 1000px)`,
}

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
  }
  body {
    padding: 0;
    margin: 0;
    background: ${BACKGROUND_COLOR};
    font-family: 'PT Sans', Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${MAIN_COLOR};
  }
  .my-swiper {
    width: 100%;
  }
  .my-swiper .swiper-slide {
    width: 320px;
  }
	@media ${ DEVICE.mobile } {
    .my-swiper .swiper-slide {
      width: 280px;
    }
    .my-swiper .swiper-button-prev,
    .my-swiper .swiper-button-next {
      display: none;
    }
	}
  .my-swiper .swiper-button-disabled {
    display: none;
  }
  .my-swiper .swiper-button-prev,
  .my-swiper .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 0px 15px 0px rgba(56, 119, 238, 0.1);
    background-color: #fff;
    background-image: url(${ICONS_URL}arrow-right.svg);
    background-position: center;
    background-repeat: no-repeat;
  }
  .my-swiper .swiper-button-prev {
    transform: rotate(180deg);
    left: 20px;
  }
  .my-swiper .swiper-button-next {
    right: 20px;
  }
  .my-swiper .swiper-button-prev:after,
  .my-swiper .swiper-button-next:after {
    display: none;
  }
`;

export const Wrapper = styled.div`
	max-width: 1440px;
	margin: 0 auto;
  padding: 15px 0 100px;
	min-height: 100vh;
	border-left: 1px solid rgba(${MAIN_COLOR_RGB},.1);
	border-right: 1px solid rgba(${MAIN_COLOR_RGB},.1);
	display: flex;
	align-items: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    width: 1px;
    background: rgba(${MAIN_COLOR_RGB},.1);
  }
	@media ${ DEVICE.mobile } {
		display: block;
    border: none;
    padding: 20px;
    &:before {
      display: none;
    }
	}
`;
export const Content = styled.div`
	flex-grow: 1;
	max-width: 100%;
`;
