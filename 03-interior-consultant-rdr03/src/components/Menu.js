import React from "react";

import styles from "./Menu.module.css";

const Menu = () => {
	return (
		<>
			<ul className={styles.menu}>
				<li>
					<a href="#">home</a>{" "}
				</li>
				<li>
					<a href="#">collection</a>
				</li>
				<li>
					<a href="#">about</a>
				</li>
				<li>
					<a href="#">contact</a>
				</li>
			</ul>
		</>
	);
};

export default Menu;
