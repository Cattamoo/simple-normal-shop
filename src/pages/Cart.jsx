import React from 'react';
import {FaEquals, FaPlus} from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import CartItem from "../components/CartItem";
import Loading from "../components/Loading";
import useCart from "../hook/useCart";

export default function Cart() {
	const { cartQuery: {data: cart, isLoading} } = useCart();
	const totalPrice = (prev, current) => prev + Number(current.price * current.quantity);
	const total = cart && cart.reduce(totalPrice, 0);
	const shipping = total >= 100000 ? 0 : 3000;
	return (
		<section className="flex flex-col gap-4 px-2 overflow-auto h-max">
			<h2 className="text-center font-bold text-2xl mt-3">장바구니</h2>
			{ isLoading && <Loading /> }
			{
				cart.length !== 0 ? <>
					<ul className="grid xl:grid-cols-2 gap-2">
						{
							Object.values(cart).map(item => (
								<CartItem key={item.id} product={item} />
							))
						}
					</ul>
					<div className="bg-white/50 sticky left-0 bottom-0 p-2 pt-4 w-full flex flex-col">
						<div className="flex justify-evenly items-center mb-4">
							<PriceCard price={total} title="상품 가격" />
							<FaPlus className="text-main" />
							<PriceCard price={shipping} title="배송비" />
							<FaEquals className="text-main" />
							<PriceCard price={total + shipping} title="총 가격" />
						</div>
						<Button name="주문하기" />
					</div>
				</>
				: <div>
					장바구니가 비어있습니다.
				</div>
			}

		</section>
	);
}