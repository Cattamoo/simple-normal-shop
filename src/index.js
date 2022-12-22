import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import EditProduct from "./pages/EditProduct";
import ProtectedRoute from "./pages/ProtectedRoute";
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/products', element: <AllProducts /> },
			{ path: '/products/:productId', element: <ProductDetail /> },
			{ path: '/cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
			{ path: '/edit', element: <ProtectedRoute requireAdmin><EditProduct /></ProtectedRoute> },
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
