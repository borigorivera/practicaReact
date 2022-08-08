import React from "react";
import Time from "./Time";

import styles from "./Information.module.css";

const Information = ({ yields, prep, cook, total }) => {
	return (
		<section className={styles.information}>
			<Time type="yields" quantity={yields} />
			<div className={styles.container}>
				<Time type="prep" quantity={prep} />
				<Time type="cook" quantity={cook} />
				<Time type="total" quantity={total} />
			</div>
		</section>
	);
};

export default Information;
