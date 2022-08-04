import React from "react";

import styles from "./Nav.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import useWindowSize from "../hooks/useWindowSize";
import Menu from "./Menu";

const Nav = ({ isOpen, setIsOpen }) => {
	const size = useWindowSize();
	return (
		<>
			<div className={styles.header}>
				<span className={styles.logo}>this interior</span>

				{size.width < 768 ? (
					<GiHamburgerMenu
						className={styles.button}
						onClick={() => setIsOpen(!isOpen)}
					/>
				) : (
					<Menu />
				)}
			</div>
		</>
	);
};

export default Nav;
