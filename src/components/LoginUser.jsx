import React from 'react';

export default function LoginUser({ user }) {
	return (
		<div className="flex items-center shrink-0">
			<img className="h-7 w-7 rounded-full" src={user.photoURL} alt={user.displayName} referrerPolicy="no-referrer" />
			<span className="ml-1 hidden md:block">{ user.displayName }</span>
		</div>
	);
}