import React from "react";

import styles from "./Instructions.module.css";

const Instructions = ({ instructions }) => {
	return (
		<section>
			<h2 className={styles.title}>Instructions</h2>
			{instructions.map((instruction, index) => {
				return (
					<div className={styles.container}>
						<span className={styles.number}>{index + 1}</span>
						<p className={styles.instruction}>{instruction}</p>
					</div>
				);
			})}
		</section>
	);
};

export default Instructions;
