import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {wonFormat} from "../util/numberFormat";
import useCart from "../hook/useCart";
import Counter from "./ui/Counter";
import IconButton from "./IconButton";

export default function CartItem({ product }) {
	const {editProductQuantity, removeCartItem} = useCart();
	const numberChange = (id, value) => {
		editProductQuantity.mutate({pid: id, quantity: value});
	}
	const removeItemHandler = (id) => {
		removeCartItem.mutate({pid: id});
	}
	return (
		<li className="flex items-center justify-evenly gap-2">
			<img className="w-1/3 rounded-lg aspect-square md:w-60" src={product.thumbnail} alt={product.title}/>
			<div className="flex-1 ml-2">
				<p className="text-lg font-bold truncate">{product.title}</p>
				<p className="text-lg text-main font-semibold truncate text-sm">{product.option}</p>
				<p>{wonFormat(product.price)}</p>
			</div>
			<Counter number={product.quantity}
					 setNumber={(number) => numberChange(`${product.id}_${product.option}`, number)}/>
			<IconButton className="text-main duration-200 hover:rotate-45 hover:text-sub"
						icon={<FaTrashAlt className="text-xl"/>}
						onClick={() => removeItemHandler(`${product.id}_${product.option}`)}/>
		</li>
	);
}