import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HistoricalDate } from "../types/historicalDate";
import { DateInterval } from "../types/dateInterval";

interface HistoricalDateState {
	list: HistoricalDate[];
	loading: boolean;
	error: string | null;
}

const initialState: HistoricalDateState = {
	list: [],
	loading: false,
	error: null,
};

export const fetchEvents = createAsyncThunk<
	HistoricalDate[],
	DateInterval,
	{ rejectValue: string }
>("api/events", async (currentInterval, thunkAPI) => {
	try {
		const response = await axios.get(
			`/api/events?start_date=${currentInterval.yearStart}&end_date=${currentInterval.yearEnd}`
		);
		return response?.data;
	} catch (error) {
		thunkAPI.rejectWithValue("Failed to fetch posts");
	}
});

const historicalDateSlice = createSlice({
	name: "historicalDates",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEvents.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchEvents.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload;
			})
			.addCase(fetchEvents.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Something went wrong";
			});
	},
});

export default historicalDateSlice.reducer;
