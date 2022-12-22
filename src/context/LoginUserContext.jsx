import {createContext, useContext, useEffect, useState} from "react";
import {login, logout, onUserStateChange} from "../api/firebase";
import {useNavigate} from "react-router-dom";

const LoginUserContext = createContext();

export function LoginUserProvider({ children }) {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const logoutHandler = () => {
		logout();
		navigate('/');
	}
	useEffect(() => {
		onUserStateChange((user) => {
			setUser(user);
		})
	}, [])
	return (
		<LoginUserContext.Provider value={{ user, uid: user && user.uid, login, logout: logoutHandler }}>
			{children}
		</LoginUserContext.Provider>
	)
}

export function useLoginUserContext() {
	return useContext(LoginUserContext);
}