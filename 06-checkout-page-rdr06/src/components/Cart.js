import React from "react";
import Item from "./Item";

import styles from "./Cart.module.css";

const Cart = () => {
	const items = [
		{
			name: "Vintage Backbag",
			price: "54.99",
			realPrice: "94.99",
			src: "images/photo1.png",
		},
		{
			name: "Levi Shoes",
			price: "74.99",
			realPrice: "124.99",
			src: "images/photo2.png",
		},
	];
	return (
		<div className={styles.wrapper}>
			<div className={styles.itemsContainer}>
				{items.map((item) => {
					const { name, price, realPrice, src } = item;

					return (
						<Item
							name={name}
							price={price}
							realPrice={realPrice}
							src={src}
						/>
					);
				})}
			</div>

			<div className={styles.container}>
				<span className={styles.text}>Shipping</span>
				<span className={styles.text}>$19</span>
			</div>
			<div className={styles.container}>
				<span className={styles.text}>Total</span>
				<span className={styles.text}>$148.98</span>
			</div>
		</div>
	);
};

export default Cart;
