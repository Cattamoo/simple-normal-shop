import React from 'react';
import {wonFormat} from "../util/numberFormat";

export default function PriceCard({ price, title, bgColor = "bg-brand/50" }) {
	return (
		<div className={`flex flex-col items-center justify-center rounded-xl ${bgColor} w-24 py-4 sm:w-32 sm:py-8`}>
			<p className="text-xs">{title}</p>
			<p className="font-semibold">{wonFormat(price)}</p>
		</div>
	);
}