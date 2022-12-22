import React from 'react';
import {Link} from "react-router-dom";

export default function IconButton({ className = '', icon, to, count, onClick = () => {} }) {
	return (
		<Link className="relative flex" to={to}>
			{
				count != null && (
					<span className="block text-xs px-1.5 py-0.5 bg-sub text-white font-bold rounded-full absolute top-0 right-0">
						{ count }
					</span>
				)
			}
			<div className={`text-3xl mt-1 px-1 ${className}`} onClick={() => onClick()}>
				{icon}
			</div>
		</Link>
	);
}