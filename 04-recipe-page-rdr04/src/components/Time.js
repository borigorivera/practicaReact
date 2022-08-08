import React from "react";

import styles from "./Time.module.css";

import { MdAccessTime } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";

const Time = ({ type, quantity }) => {
	return (
		<article className={styles.timer}>
			{type === "yields" ? (
				<GiKnifeFork className={`${styles.icon} ${styles.golden}`} />
			) : (
				<MdAccessTime className={styles.icon} />
			)}

			<div className={styles.container}>
				<h2 className={styles.title}>
					{type} {type !== "yields" && "time"}
				</h2>
				<p
					className={`${
						type === "yields"
							? `${styles.normal} ${styles.golden}`
							: styles.normal
					}`}
				>
					{quantity}
				</p>
			</div>
		</article>
	);
};

export default Time;
