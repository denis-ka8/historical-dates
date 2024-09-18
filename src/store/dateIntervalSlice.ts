import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DateInterval } from "../types/dateInterval";

interface DateIntervalState {
	currentIndex: number;
	currentInterval: DateInterval | null;
	segments: DateInterval[];
	navTo: number | null;
	loading: boolean;
	error: string | null;
}

const initialState: DateIntervalState = {
	currentIndex: 1,
	currentInterval: null,
	segments: [],
	navTo: null,
	loading: false,
	error: null,
};

export const fetchIntervals = createAsyncThunk<
	DateInterval[],
	void,
	{ rejectValue: string }
>("api/intervals", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/api/intervals");
		return response?.data;
	} catch (error) {
		thunkAPI.rejectWithValue("Failed to fetch posts");
	}
});

const dateIntervalSlice = createSlice({
	name: "dateInterval",
	initialState,
	reducers: {
		setCurrentIndex: (state, action: PayloadAction<number>) => {
			state.navTo = action.payload;
			state.currentIndex = action.payload;
			state.currentInterval = state.segments[action.payload - 1];
		},
		setNavigateTo: (state, action: PayloadAction<number>) => {
			state.navTo = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchIntervals.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchIntervals.fulfilled, (state, action) => {
				state.loading = false;
				state.segments = action.payload || [];
				state.currentInterval =
					action.payload?.length > 0 ? action.payload[0] : null;
			})
			.addCase(fetchIntervals.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Something went wrong";
			});
	},
});

export const { setCurrentIndex, setNavigateTo } = dateIntervalSlice.actions;

export default dateIntervalSlice.reducer;
