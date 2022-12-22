import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import {LoginUserProvider} from "./context/LoginUserContext";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
			<LoginUserProvider>
			<Header />
			<Outlet />
			</LoginUserProvider>
			</QueryClientProvider>
		</>
	);
}