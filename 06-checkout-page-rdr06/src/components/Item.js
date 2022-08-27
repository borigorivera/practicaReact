import React, { useState } from "react";

import styles from "./Item.module.css";

const Item = ({ name, price, realPrice, src }) => {
	const [quantity, setQuantity] = useState(0);

	const decrement = () => {
		setQuantity((quantity) => {
			if (quantity <= 0) return 0;
			return quantity - 1;
		});
	};
	const increment = () => {
		setQuantity((quantity) => quantity + 1);
	};

	return (
		<article className={styles.wrapper}>
			<img className={styles.photo} src={src} alt="" />
			<div className={styles.container}>
				<h2 className={styles.name}>{name}</h2>
				<div className={styles.priceContainer}>
					<span className={styles.price}>${price}</span>
					<span className={styles.realPrice}>${realPrice}</span>
				</div>
				<div className={styles.controlContainer}>
					<button onClick={decrement} className={styles.button}>
						-
					</button>
					<span className={styles.quantity}>{quantity}</span>
					<button onClick={increment} className={styles.button}>
						+
					</button>
				</div>
			</div>
		</article>
	);
};

export default Item;
