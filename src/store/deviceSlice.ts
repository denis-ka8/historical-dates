import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateIntervalState {
	mode: string;
}

const initialState: DateIntervalState = {
	mode: window.innerWidth <= 1000 ? "mobile" : "desktop",
};

const deviceSlice = createSlice({
	name: "device",
	initialState,
	reducers: {
		setMode: (state, action: PayloadAction<string>) => {
			state.mode = action.payload;
		},
	},
});

export const { setMode } = deviceSlice.actions;

export default deviceSlice.reducer;
