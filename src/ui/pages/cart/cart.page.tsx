'use client';

import React from 'react';

import { createInvoiceLink } from '@app/(cartRoot)/cart/actions';
import {
	AddCartItemBody,
	AddCartItemResponse,
	CartItem,
	DeleteCartItemBody,
	DeleteCartItemResponse,
} from '@app/(cartRoot)/cart/cart.model';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { iconAdd } from '@ui/atoms/icons/icon-add';
import { iconBin } from '@ui/atoms/icons/icon-bin';
import { iconRemove } from '@ui/atoms/icons/icon-remove';
import { Text } from '@ui/atoms/typography/text/text';
import { Title } from '@ui/atoms/typography/title/title';
import { Cell } from '@ui/molecules/cell/cell';

import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import example from '../../../../public/images/example 1.png';

import classNames from 'classnames';

import css from './cart.module.scss';
import { InvoiceBody } from '@models/invoice.model';
import { platform } from '@platform/platform';

interface Props {
	cartProducts: CartItem[];
	addToCart: (body: AddCartItemBody) => Promise<AddCartItemResponse>;
	deleteFromCart: (body: DeleteCartItemBody) => Promise<DeleteCartItemResponse>;
}

export const CartPageUI = (props: Props) => {
	const { cartProducts, addToCart, deleteFromCart } = props;

	const invoice = platform.getInvoice && platform.getInvoice();

	const body: InvoiceBody = {
		title: 'U.S. Polo',
		description: 'U.S. Polo T-shirt',
		payload: 'U.S. Polo T-shirt',
		provider_token: '381764678:TEST:86427',
		currency: 'USD',
		prices: [{ label: 'U.S. Polo T-shirt', amount: '70000' }],
		photo_url: example.src,
		photo_height: 96,
		photo_width: 96,
		photo_size: 96,
		max_tip_amount: '10000',
		suggested_tip_amounts: ['10000', '20000', '50000'],
		need_name: true,
		need_phone_number: true,
		need_shipping_address: true,
		is_flexible: true,
	};

	const createInvoice = async () =>
		await createInvoiceLink(body).then(({ result }) => {
			invoice?.open(result, 'url').then(status => {
				// Output: 'paid'
				return console.log(status);
			});
		});

	useMainButtonTelegram(createInvoice);

	return (
		<div className={classNames(css.cart, 'container')}>
			<Title level={'3'} className={css.cart__title}>
				Cart
			</Title>
			<div className={css.cart__wrapper}>
				{cartProducts?.map(product => (
					<Cell
						key={product.id}
						title={product.info.name}
						image={example.src}
						caption={`${product.info.price} $`}
						actionBottom={
							<div className={css.cart__cartItem__icons}>
								<IconButton
									onClick={() =>
										deleteFromCart({
											userId: '1',
											productId: product.id,
											quantity: 1,
										})
									}>
									{iconRemove}
								</IconButton>
								<Text>1</Text>
								<IconButton
									onClick={() =>
										addToCart({
											userId: '1',
											productId: product.id,
											quantity: 1,
										})
									}>
									{iconAdd}
								</IconButton>
							</div>
						}
						actionRight={<IconButton>{iconBin}</IconButton>}
					/>
				))}
			</div>
		</div>
	);
};
