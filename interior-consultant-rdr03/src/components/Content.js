import React from "react";

import styles from "./Content.module.css";

import photo from "../imgs/photo1.png";
import person from "../imgs/photo2.png";

const Content = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className={styles.title}>Modern interior</h1>
				<p className={styles.text}>
					A full-Service residential & commercial interior design and
					staging company offering professional organizing &
					eco-services.
				</p>
				<a className={styles.readmore} href="">
					read more
				</a>
			</div>

			<div className={styles.content}>
				<img className={styles.photo} src={photo} alt="" />
				<article className={styles.card}>
					<header className={styles.card__header}>
						<img
							className={styles.card__photo}
							src={person}
							alt=""
						/>
						<div className={styles.card__info}>
							<h2 className={styles.name}>Aliza Webber</h2>
							<h3 className={styles.job}>Interior designer</h3>
						</div>
					</header>
					<p className={styles.card__text}>
						Designed in 2020 by Aliza Webber
					</p>
				</article>
			</div>
		</section>
	);
};

export default Content;
