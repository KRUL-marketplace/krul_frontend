import { BaseProductProps } from '@client/ui/molecules/product-card/product.model';

import example1 from '../../../../../public/images/example 1.png';
import example2 from '../../../../../public/images/example 2.png';
import example3 from '../../../../../public/images/example 3.png';

export const productsMockData: BaseProductProps[] = [
	{
		title: 'Product 1',
		image: example1,
		price: 100,
		isFavorite: true,
	},
	{
		title: 'Product 1',
		image: example3,
		price: 100,
		isFavorite: false,
	},
	{
		title: 'Product 1',
		image: example2,
		price: 100,
		isFavorite: false,
	},
	{
		title: 'Product 1',
		image: example3,
		price: 100,
		isFavorite: false,
	},
	{
		title: 'Product 1',
		image: example2,
		price: 100,
		isFavorite: true,
	},
	{
		title: 'Product 1',
		image: example1,
		price: 100,
		isFavorite: true,
	},
];
