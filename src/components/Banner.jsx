import React from 'react';

export default function Banner() {
	return (
		<div className="flex flex-col justify-center items-center w-full h-96 bg-[url('https://picsum.photos/1600')]">
			<div className="bg-white/75 px-10 py-4">
				<h2 className="text-2xl font-bold">Simple Normal Shop</h2>
				<p className="text-right group">
					Message
				</p>
			</div>
		</div>
	);
}