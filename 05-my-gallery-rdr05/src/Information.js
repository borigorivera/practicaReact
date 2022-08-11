import React from "react";
import styles from "./Information.module.css";

const Information = () => {
	return (
		<div className={styles.wrapper}>
			<article className={styles.container}>
				<p className={styles.quantity}>100</p>
				<p className={styles.type}>Posts</p>
			</article>
			<article className={styles.container}>
				<p className={styles.quantity}>2,242</p>
				<p className={styles.type}>Followers</p>
			</article>
			<article className={styles.container}>
				<p className={styles.quantity}>1,432</p>
				<p className={styles.type}>Following</p>
			</article>
		</div>
	);
};

export default Information;
