import React from 'react';
import {TiPencil, TiShoppingCart} from "react-icons/ti";
import {AiTwotoneShop} from "react-icons/ai";
import {useLoginUserContext} from "../context/LoginUserContext";
import useCart from "../hook/useCart";
import LoginUser from "./LoginUser";
import IconButton from "./IconButton";
import Button from "./ui/Button";
import Logo from "./Logo";

export default function Header() {
	const { user, login, logout } = useLoginUserContext();
	const { cartQuery: {data: cart} } = useCart();
	return (
		<header className="sticky z-50 top-0 flex justify-between items-center p-2 shadow-md shadow-main mb-2 bg-white">
			<Logo />
			<nav className="flex gap-4 items-center">
				<IconButton icon={<AiTwotoneShop />} to="/products" />
				{
					!user && <Button name="Login" onClick={login} />
				}
				{
					user && <>
						<IconButton icon={<TiShoppingCart />} to="/cart" count={cart ? Object.keys(cart).length : 0} />
						{ user.isAdmin && <IconButton icon={<TiPencil />} to="/edit" /> }
						<LoginUser user={user} />
						<Button name="Logout" onClick={logout} />
					</>
				}
			</nav>
		</header>
	);
}