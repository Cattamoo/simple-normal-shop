import React from 'react';

export default function Input({ className = '', type, placeholder }) {
	return (
		<input className={`border-2 border-zinc-100 rounded w-96 p-1.5 outline-none transition-500 focus:border-brand ${className}`} type={type} placeholder={placeholder} />
	);
}