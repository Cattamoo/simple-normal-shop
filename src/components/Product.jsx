import React from 'react';
import {useNavigate} from "react-router-dom";
import {wonFormat} from "../util/numberFormat";

export default function Product({ product }) {
	const navigate = useNavigate();
	const { id, thumbnail, title, price, category } = product;
	const productClickHandler = () => {
		navigate(`/products/${id}`, { state: { product } });
	}
	return (
		<li className="rounded-lg bg-white shadow-md p-2 duration-200 cursor-pointer hover:-translate-y-2.5 hover:scale-105" onClick={productClickHandler}>
			<img className="rounded-lg aspect-square" src={thumbnail} alt={title} />
			<div className="text-lg flex justify-between">
				<h3 className="truncate">{ title }</h3>
				<p>{ wonFormat(price) }</p>
			</div>
			<p className="text-zinc-400 text-xs">{ category.toUpperCase() }</p>
		</li>
	);
}