import styles from "./App.module.css";
import logo from "./imgs/Scarecrow.png";

function App() {
	return (
		<div className={styles.container}>
			<p className={styles.error}>404 not found</p>
			<div className={styles.wrap}>
				<img className={styles.logo} src={logo} alt="" />
				<div className={styles.wrapText}>
					<h1 className={styles.title}>I have bad news for you</h1>
					<p className={styles.text}>
						The page you are looking for might be removed or is
						temporarily unavailable
					</p>
					<button className={styles.button}>Back to homepage</button>
				</div>
			</div>
		</div>
	);
}

export default App;
