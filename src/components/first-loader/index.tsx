import Logo from "../logo";
import styles from "./first-loader.module.scss";

export default function FirstLoader() {
	return (
		<div className={styles.wrapper}>
			<Logo className={styles.logo} />
		</div>
	);
}
