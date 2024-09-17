import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HistoricalDate } from "../types/historicalDate";

interface HistoricalDateState {
	list: HistoricalDate[];
	loading: boolean;
	error: string | null;
}

const initialState: HistoricalDateState = {
	list: [
		{
			eventId: "66eab006-df8f-490a-986d-f59acdf32bd8",
			year: 2015,
			description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			category: "Космос"
		},
		{
			eventId: "66eab006-df8f-490a-986d-f59acdf32bd3",
			year: 2016,
			description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			category: "Космос"
		},
		{
			eventId: "66eab006-df8f-490a-986d-f59acdf32bd2",
			year: 2017,
			description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			category: "Космос"
		},
		{
			eventId: "66eab006-df8f-490a-986d-f59acdf321d8",
			year: 2018,
			description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			category: "Космос"
		},
		{
			eventId: "66eab006-df8f-490a-986a-f59acdf32bd2",
			year: 2019,
			description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			category: "Космос"
		},
		{
			eventId: "66eab006-df8f-490a-986d-f59acd2321d8",
			year: 2020,
			description: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
			category: "Космос"
		},
	],
	loading: false,
	error: null,
};

export const fetchTeams = createAsyncThunk<
	HistoricalDate[],
	void,
	{ rejectValue: string }
>("api/events", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/api/events?start_date=&end_date=");
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
			.addCase(fetchTeams.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchTeams.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload;
			})
			.addCase(fetchTeams.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Something went wrong";
			});
	},
});

export default historicalDateSlice.reducer;
