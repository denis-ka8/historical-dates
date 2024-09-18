import { useEffect } from "react";
import { useAppDispatch } from "../../hook";
import { setMode } from "../../store/deviceSlice";

const useWindowResize = () => {
	const dispatch = useAppDispatch();

	const resizeDelta = 100;
	let resizeTime = new Date();
	let resizeTimeout = false;

	useEffect(() => {
		window.addEventListener("resize", windowResize);
		return () => {
			window.removeEventListener("resize", windowResize);
		};
	}, []);

	const windowResize = () => {
		resizeTime = new Date();
		if (!resizeTimeout) {
			resizeTimeout = true;
			setTimeout(resizeEnd, resizeDelta);
		}
	};

	const resizeEnd = () => {
		if (new Date().getTime() - resizeTime.getTime() < resizeDelta) {
			setTimeout(resizeEnd, resizeDelta);
		} else {
			resizeTimeout = false;

			dispatch(setMode(window.innerWidth <= 1000 ? "mobile" : "desktop"));
		}
	};
};

export default useWindowResize;
