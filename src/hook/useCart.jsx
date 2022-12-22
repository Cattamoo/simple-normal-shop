import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {addCart as addCartHandler, getCartProducts, removeCartProduct, setCartProductCount} from "../api/firebase";
import {useLoginUserContext} from "../context/LoginUserContext";

export default function useCart() {
	const { uid } = useLoginUserContext();
	const queryClient = useQueryClient();
	const cartQuery = useQuery(
		['cart', uid || ''],
		() => getCartProducts(uid),
		{
			enabled: !!uid
		}
	)
	const addCart = useMutation(
		({ product }) => addCartHandler(uid, product),
		{
			onSuccess: () => queryClient.invalidateQueries(['cart', uid])
		}
	);
	const editProductQuantity = useMutation(
		({ pid, quantity }) => setCartProductCount(uid, pid, quantity),
		{
			onSuccess: () => queryClient.invalidateQueries(['cart', uid])
		}
	);
	const removeCartItem = useMutation(
		({ pid }) => removeCartProduct(uid, pid),
		{
			onSuccess: () => queryClient.invalidateQueries(['cart', uid])
		}
	);
	return { cartQuery, addCart, editProductQuantity, removeCartItem };
}