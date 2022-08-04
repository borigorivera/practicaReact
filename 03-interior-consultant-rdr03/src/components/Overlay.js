import React from "react";
import styles from "./Overlay.module.css";

import { ImCross } from "react-icons/im";

import Menu from "./Menu";

const Overlay = ({ isOpen, setIsOpen }) => {
	return (
		<div className={styles.wrapper}>
			<ImCross
				className={styles.button}
				onClick={() => setIsOpen(!isOpen)}
			/>

			<Menu />
		</div>
	);
};

export default Overlay;
