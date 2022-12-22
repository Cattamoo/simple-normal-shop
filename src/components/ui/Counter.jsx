import React from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";

const ICON_CLASS = 'outline-0 border-2 border-main rounded-full p-1 text-main text-xs duration-300 hover:border-sub hover:text-white hover:bg-sub';

export default function Counter({ number, setNumber }) {
	const increment = () => {
		setNumber(number + 1);
	}
	const decrement = () => {
		setNumber(number === 1 ? 1 : number - 1);
	}
	return (
		<div className="flex items-center">
			<button className={ICON_CLASS} onClick={decrement}>
				<FaMinus />
			</button>
			<span className="text-lg w-10 text-center">{number}</span>
			<button className={ICON_CLASS} onClick={increment}>
				<FaPlus />
			</button>
		</div>
	);
}