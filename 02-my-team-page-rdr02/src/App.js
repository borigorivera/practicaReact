import styles from "./App.module.css";
import Card from "./components/Card";

const info = [
	{ image: "imgs/photo1.png", name: "Bill Mahoney", job: "Product Owner" },
	{ image: "imgs/photo2.png", name: "Saba Cabrera", job: "Art Director" },
	{ image: "imgs/photo3.png", name: "Shae Le", job: "Tech Lead" },
	{ image: "imgs/photo4.png", name: "Skylah Lu", job: "Ux Designer" },
	{ image: "imgs/photo5.png", name: "Griff Richards", job: "Developer" },
	{ image: "imgs/photo6.png", name: "Stan John", job: "Developer" },
];

function App() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>The creative crew</h1>
				<div className={styles.wrapper}>
					<h2 className={styles.subtitle}>who we are</h2>
					<p>
						We are team of creatively diverse. driven. innovative
						individuals working in various locations from the world.
					</p>
				</div>
			</header>
			<section className={styles.cards}>
				{info.map((person, index) => {
					return <Card person={person} key={index} />;
				})}
			</section>
		</div>
	);
}

export default App;
