import { useState } from "react";
import styles from "./App.module.css";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Overlay from "./components/Overlay";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.container}>
			{isOpen ? (
				<Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
			) : (
				<>
					<Nav isOpen={isOpen} setIsOpen={setIsOpen} />
					<Content />
				</>
			)}
		</div>
	);
}

export default App;
