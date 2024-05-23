'use client';

import React from 'react';

import Image from 'next/image';

import { Button } from '@mui/material';

import { Text } from '@ui/atoms/text/text';

import example1 from '../../../../../public/images/example 1.png';

import css from './product.module.scss';

interface Props {}

const Page = ({}: Props) => {
	return (
		<div className={css.product}>
			<Image src={example1} alt={'title'} className={css.product__image} priority />
			<div className={css.product__wrapper}>
				<Text className={css.product__title}>Product</Text>
				<Text className={css.product__price}>18000 ₽</Text>
				<div className={css.product__buttonGroup}>
					<Button variant={'outlined'} size={'large'}>
						XS
					</Button>
					<Button variant={'outlined'} size={'large'}>
						S
					</Button>
					<Button variant={'outlined'} size={'large'}>
						M
					</Button>
					<Button variant={'outlined'} size={'large'}>
						L
					</Button>
					<Button variant={'outlined'} size={'large'}>
						XL
					</Button>
				</div>
				<div className={css.product__colors}>
					<Text className={css.product__helperText}>Цвет</Text>
				</div>
				<div className={css.product__mainButton}>{/*<MainButton text={'Оформить'} onClick={() => {}} />*/}</div>
			</div>
		</div>
	);
};

export default Page;
