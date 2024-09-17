import { useAppDispatch } from "../../hook";
import { useEffect } from "react";
import { fetchIntervals } from "../../store/dateIntervalSlice";

const useFetchIntervals = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchIntervals());
	}, []);

	return null;
};

export default useFetchIntervals;
