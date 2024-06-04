import React from 'react';

import { Skeleton } from '@telegram-apps/telegram-ui';

import css from '@ui/pages/cart/cart.module.scss';

const Loading = () => {
	return (
		<div className={css.loading}>
			<Skeleton visible className={css.loading__title} />
			<Skeleton visible className={css.loading__cartItem} />
			<Skeleton visible className={css.loading__cartItem} />
			<Skeleton visible className={css.loading__cartItem} />
			<Skeleton visible className={css.loading__cartItem} />
			<Skeleton visible className={css.loading__cartItem} />
			<Skeleton visible className={css.loading__cartItem} />
		</div>
	);
};

export default Loading;
