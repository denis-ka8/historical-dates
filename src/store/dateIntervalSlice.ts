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
	currentInterval: {
		yearStart: 1990,
		yearEnd: 1995,
		category: "Космос",
	},
	segments: [
		{
			yearStart: 1990,
			yearEnd: 1995,
			category: "Космос",
		},
		{
			yearStart: 1995,
			yearEnd: 2000,
			category: "Наука",
		},
		{
			yearStart: 2000,
			yearEnd: 2010,
			category: "Образование",
		},
		{
			yearStart: 2010,
			yearEnd: 2015,
			category: "Авто",
		},
		{
			yearStart: 2015,
			yearEnd: 2020,
			category: "Спорт",
		},
		{
			yearStart: 2020,
			yearEnd: 2024,
			category: "Литература",
		},
	],
  navTo: null,
	loading: false,
	error: null,
};

export const fetchTeams = createAsyncThunk<
	DateInterval[],
	void,
	{ rejectValue: string }
>("api/dates", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/api/events?start_date=&end_date=");
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
			state.currentInterval = state.segments[action.payload-1];
		},
		setNavigateTo: (state, action: PayloadAction<number>) => {
			state.navTo = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTeams.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.segments = action.payload;
			})
			.addCase(fetchTeams.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Something went wrong";
			});
	},
});

export const { setCurrentIndex, setNavigateTo } = dateIntervalSlice.actions;

export default dateIntervalSlice.reducer;
