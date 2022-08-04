import React from "react";
import styles from "./Card.module.css";

const Card = ({ person }) => {
	const { image, name, job } = person;

	return (
		<article className={styles.card}>
			<img src={image} alt="" className={styles.image} />
			<h2 className={styles.name}>{name}</h2>
			<h3 className={styles.job}>{job}</h3>
		</article>
	);
};

export default Card;
