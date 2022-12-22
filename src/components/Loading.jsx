import React from 'react';

export default function Loading() {
	return (
		<div className="absolute z-50 left-0 top-0 w-full h-full bg-zinc-800/50 flex items-center justify-center">
			<p className="text-white font-semibold text-xl">Loading...</p>
		</div>
	);
}