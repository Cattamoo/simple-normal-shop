import React from 'react';
import {Link} from "react-router-dom";
import {AiTwotoneShop} from "react-icons/ai";

export default function Logo() {
	return (
		<Link to="/" className="flex items-center text-brand bg-sub rounded-md px-1 hover:bg-main group">
			<AiTwotoneShop />
			<p className="ml-1 font-semibold">
				S<span className="inline-block w-0 scale-x-0 duration-200 sm:group-hover:w-[2.5rem] sm:group-hover:scale-x-100">imple</span>
				N<span className="inline-block w-0 scale-x-0 duration-200 sm:group-hover:w-[2.7rem] sm:group-hover:scale-x-100">ormal</span>
				S<span className="inline-block w-0 scale-x-0 duration-200 sm:group-hover:w-[1.7rem] sm:group-hover:scale-x-100">hop</span>
			</p>
		</Link>
	);
}