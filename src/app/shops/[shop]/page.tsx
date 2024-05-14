import { Text } from '@client/ui/atoms/text/text';
import { Products } from '@client/ui/organisms/products/products';

const Page = async ({ params }: { params: { shop: string } }) => {
	const response = await fetch(`http://localhost:5001/shops?title=${params.shop}`);

	const shop: any = await response.json();
	const products = shop[0].products;

	return (
		<>
			<Text component={'h1'}>{params.shop}</Text>
			<Products data={products} />
		</>
	);
};

export default Page;
