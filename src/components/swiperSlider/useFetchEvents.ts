import { useAppDispatch, useAppSelector } from "../../hook";
import { useEffect } from "react";
import { fetchEvents } from '../../store/historicalDatesSlice';

const useFetchEvents = () => {
	const { currentInterval } = useAppSelector((state) => state.dateInterval);
	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log("currentInterval", currentInterval);
		if (!currentInterval) return;

    dispatch(fetchEvents(currentInterval))
	}, [currentInterval]);

	return {
		currentInterval,
	};
};

export default useFetchEvents;
