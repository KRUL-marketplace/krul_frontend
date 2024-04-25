import { StaticImageData } from 'next/image';

export interface ShopCardProps {
	id: string;
	title: string;
	image: StaticImageData | string;
}
