import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct, getProducts } from "../api/firebase";

export default function useProducts() {
	const queryClient = useQueryClient();
	const productsQuery = useQuery(
		['products'],
		getProducts,
		{ staleTime: 1000 * 60 * 10 }
	);
	const addProduct = useMutation(
		({ product }) => addNewProduct(product),
		{
			onSuccess: () => queryClient.invalidateQueries(['products'])
		}
	);
	return { productsQuery, addProduct };
}