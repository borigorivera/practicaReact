import React from "react";
import styles from "./Gallery.module.css";

import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import photo5 from "./assets/photo5.png";
import photo6 from "./assets/photo6.png";

const Gallery = () => {
	return (
		<section className={styles.wrapper}>
			<img
				className={`${styles.img} ${styles.img1}`}
				src={photo1}
				alt=""
			/>
			<img
				className={`${styles.img} ${styles.img2}`}
				src={photo2}
				alt=""
			/>
			<img
				className={`${styles.img} ${styles.img3}`}
				src={photo3}
				alt=""
			/>
			<img
				className={`${styles.img} ${styles.img4}`}
				src={photo4}
				alt=""
			/>
			<img
				className={`${styles.img} ${styles.img5}`}
				src={photo5}
				alt=""
			/>
			<img
				className={`${styles.img} ${styles.img6}`}
				src={photo6}
				alt=""
			/>
		</section>
	);
};

export default Gallery;
