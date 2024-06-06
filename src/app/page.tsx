import Accordion from '@/components/Accordion/Accordion';
import styles from './page.module.css';

import { accordionData } from '../utils/content';

export default function Home() {
	return (
		<section className={styles.root}>
			<Accordion data={accordionData} />
		</section>
	);
}
