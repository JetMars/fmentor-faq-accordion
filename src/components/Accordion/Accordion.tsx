import Image from 'next/image';
import IconStar from '../../../public/icons/icon-star.svg';
import Item from '../Item/Item';
import styles from './accordion.module.css';

import type { IAccordionProps } from '../../types/type';

export default function Accordion({ data }: { data: IAccordionProps[] }) {
	return (
		<div className={styles.accordion}>
			<div className={styles.header}>
				<Image src={IconStar} alt='Star' priority />
				<h1 className={styles.title}>FAQs</h1>
			</div>
			{data.map((el, i) => {
				return (
					<>
						<Item key={i} {...el} />
						{i < data.length - 1 ? <div className={styles.liner}></div> : <></>}
					</>
				);
			})}
		</div>
	);
}
