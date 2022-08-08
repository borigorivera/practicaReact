import React from "react";

import photo from "../assets/photo1.png";
import dots from "../assets/6dots.svg";

import styles from "./Header.module.css";

const Header = ({ title, description }) => {
	return (
		<header>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.container}>
				<img className={styles.dots} src={dots} alt="" />
				<p className={styles.description}>{description}</p>
			</div>

			<img className={styles.photo} src={photo} alt="" />
		</header>
	);
};

export default Header;
