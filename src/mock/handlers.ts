import { http, HttpResponse } from "msw";
import { historicalDates } from "./historicalDates";
import { dateIntervals } from "./dateIntervals";

export const handlers = [
	http.get(`/api/events`, ({ request }) => {
		const url = new URL(request.url);
		const start_date = url.searchParams.get("start_date");

		if (!start_date) {
			return HttpResponse.json(historicalDates["2015"]);
		}
		return HttpResponse.json(historicalDates[start_date] || []);
	}),
	http.get(`/api/intervals`, () => HttpResponse.json(dateIntervals)),
];
