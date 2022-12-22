import React from 'react';
import Product from "./Product";
import Loading from "./Loading";
import useProducts from "../hook/useProducts";

export default function Products() {
	const { productsQuery: {isLoading, error, data: products} } = useProducts();
	return (
		<div>
			{ isLoading && <Loading /> }
			{ error && <p>Error!</p> }
			{
				products &&
				<ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-2">
					{
						products.map((product) => <Product key={product.id} product={product}/>)
					}
				</ul>
			}
		</div>
	);
}