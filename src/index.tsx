import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";

async function enableMocking() {
	if (process.env.NODE_ENV === "development") {
		const { worker } = await import("./mock/node");
		return worker.start();
	}
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
enableMocking().then(() => {
	root.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
