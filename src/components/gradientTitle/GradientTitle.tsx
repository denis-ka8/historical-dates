import React, { ReactNode } from "react";
import { StyledTitle } from "./GradientTitle.styles";

interface GradientTitleProps {
	children: ReactNode;
}

const GradientTitle: React.FC<GradientTitleProps> = ({ children }) => (
	<StyledTitle>{children}</StyledTitle>
);

export { GradientTitle };
