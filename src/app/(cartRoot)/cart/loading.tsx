import React from 'react';

import css from '@app/(cartRoot)/cart/cart.module.scss';
import { Skeleton } from '@telegram-apps/telegram-ui';

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
