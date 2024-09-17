export interface DateInterval {
	yearStart: number;
	yearEnd: number;
	category: string;
}
export interface DateCounter {
	segmentStart: DateInterval;
	segmentEnd: DateInterval;
}
export interface DateSegmentCoords extends DateInterval {
	x: number;
	y: number;
	index: number;
}