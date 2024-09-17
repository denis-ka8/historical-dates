import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HistoricalDates } from "./components/historicalDates/HistoricalDates";
import { Content, GlobalStyle, Wrapper } from "./styles";

const App: React.FC = () => {
	return (
		<Wrapper>
			<Content>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<HistoricalDates />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Content>
		</Wrapper>
	);
};

export default App;
