import { configureStore } from "@reduxjs/toolkit";
import historicalDatesReducer from "./historicalDatesSlice";
import dateIntervalReducer from "./dateIntervalSlice";
import deviceReducer from "./deviceSlice";

const store = configureStore({
	reducer: {
		historicalDates: historicalDatesReducer,
		dateInterval: dateIntervalReducer,
		device: deviceReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
