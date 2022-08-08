import Header from "./components/Header";
import Information from "./components/Information";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";

import styles from "./App.module.css";

import { details } from "./details";
import { useState } from "react";

function App() {
	const {
		title,
		description,
		yields,
		times: { prep, cook, total },
		ingredients,
		instructions,
		source,
	} = details;
	return (
		<div className={styles.wrapper}>
			<Header title={title} description={description} />
			<div className={styles.container}>
				<Information
					yields={yields}
					prep={prep}
					cook={cook}
					total={total}
				/>
				<div className={styles.column}>
					<Ingredients ingredients={ingredients} />
					<Instructions instructions={instructions} />
					<p className={styles.source}>
						Source:
						<br /> <a href={source}>{source}</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
