import React from "react";
import styles from "./Ingredients.module.css";

const Ingredients = ({ ingredients }) => {
	return (
		<section className={styles.ingredients}>
			<h2 className={styles.title}>Ingredients</h2>
			{ingredients.map((ingre) => {
				const { ingredient, quantities } = ingre;
				return (
					<div className={styles.wrapper}>
						<h3 className={styles.ingredient}>{ingredient}</h3>
						{quantities.map((quantity) => {
							return (
								<div className={styles.container}>
									<input type="checkbox" />
									<p className={styles.item}>{quantity}</p>
								</div>
							);
						})}
					</div>
				);
			})}
		</section>
	);
};

export default Ingredients;
