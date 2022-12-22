import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {wonFormat} from "../util/numberFormat";
import Button from "../components/ui/Button";
import useCart from "../hook/useCart";

export default function ProductDetail() {
	const { state: { product } } = useLocation();
	const navigate = useNavigate();
	const [selected, setSelected] = useState(product.options && product.options[0]);
	const [success, setSuccess] = useState(null);
	const { addCart } = useCart();
	const optionChangeHandler = ({ target }) => setSelected(target.value);
	const addCartHandler = () => {
		const newProduct = {...product, option: selected, quantity: 1};
		addCart.mutate({product: newProduct},{
			onSuccess: () => {
				setSuccess('장바구니에 추가되었습니다.');
				setTimeout(() => {
					navigate('/cart');
				}, 1000);
			}
		});
	}
	return (
		<section className="flex flex-col p-2 gap-2 overflow-auto md:flex-row lg:justify-center">
			<img src={product.thumbnail} alt={product.title} />
			<div className="flex-1 flex flex-col gap-1 lg:w-96 lg:flex-initial">
				<h2 className="text-lg font-bold">{product.title}</h2>
				<h3 className="font-semibold mb-2 border-b-zinc-300 border-b-2">{wonFormat(product.price)}</h3>
				<p>{product.description}</p>
				<div className="flex">
					<label htmlFor="select" className="text-main">옵션: </label>
					<select id="select" className="flex-1 ml-2 border-2 border-main outline-0" value={selected} onChange={optionChangeHandler}>
						{
							product.options.map((option, index) => <option key={index} value={option}>{option}</option>)
						}
					</select>
				</div>
				<Button name="장바구니에 추가" onClick={addCartHandler} />
				{ success && <p>{success}</p> }
			</div>
		</section>
	);
}