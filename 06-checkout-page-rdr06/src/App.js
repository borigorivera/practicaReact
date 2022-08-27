import styles from "./App.module.css";

import Cart from "./components/Cart";
import Form from "./components/Form";

function App() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Checkout</h1>
			<div className={styles.container}>
				<Cart />
				<Form />
			</div>
		</div>
	);
}

export default App;
