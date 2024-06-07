'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import type { IAccordionProps } from '../../types/type';

import Image from 'next/image';
import IconMinus from '../../../public/icons/icon-minus.svg';
import IconPlus from '../../../public/icons/icon-plus.svg';
import styles from './item.module.css';

export default function Item({ title, desc }: IAccordionProps) {
	const [isActive, setActive] = React.useState(false);

	const activeKeyBoard = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.code === 'Space' || e.code === 'Enter') {
			setActive(!isActive);
		}
	};

	const showDescription = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setActive(!isActive);
	};

	return (
		<div className={styles.item}>
			<div
				tabIndex={0}
				className={styles.title}
				onClick={showDescription}
				onKeyDown={activeKeyBoard}
			>
				<div className={styles.text}>{title}</div>
				{isActive ? (
					<Image className={styles.image} src={IconMinus} alt='Minus' />
				) : (
					<Image className={styles.image} src={IconPlus} alt='Plus' />
				)}
			</div>
			<AnimatePresence>
				{isActive && (
					<motion.div
						className={styles.desc}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						{desc}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
