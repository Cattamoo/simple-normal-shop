import React from 'react';

export default function Button({ className = '', name, onClick, disabled }) {
	return (
		<button className={`bg-brand py-2 px-4 rounded ${className}`} onClick={onClick} disabled={disabled}>
			{name}
		</button>
	);
}