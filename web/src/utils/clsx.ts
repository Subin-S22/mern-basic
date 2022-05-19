import { clsxType, clsxReturnType } from "../types/clsx";

const clsx = (...classes: clsxType): clsxReturnType => {
	return classes.reduce((acc: string, value: string) => {
		return acc + value + " ";
	}, "");
};

export default clsx;
