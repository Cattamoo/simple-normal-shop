import React from 'react';
import {Navigate} from 'react-router-dom';
import {useLoginUserContext} from "../context/LoginUserContext";

export default function ProtectedRoute({ children, requireAdmin }) {
	const { user } = useLoginUserContext();
	if(!user || (requireAdmin && !user.isAdmin)) {
		return <Navigate to="/" replace />
	}
	return children;
}