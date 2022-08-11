import React from "react";
import styles from "./Profile.module.css";

import photo from "./assets/profilePhoto.png";

const Profile = () => {
	return (
		<article className={styles.card}>
			<img className={styles.photo} src={photo} alt="" />
			<h2 className={styles.name}>Rodney Cotton</h2>
			<p className={styles.place}>Helsinki, Finland</p>
		</article>
	);
};

export default Profile;
