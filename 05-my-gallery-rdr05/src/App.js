import styles from "./App.module.css";
import Profile from "./Profile";
import Information from "./Information";
import Gallery from "./Gallery";

function App() {
	return (
		<div className={styles.wrapper}>
			<Profile />
			<Information />
			<Gallery />
		</div>
	);
}

export default App;
