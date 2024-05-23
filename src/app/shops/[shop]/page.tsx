import { Text, Title } from '@ui/atoms/text/text';
import { Products } from '@ui/organisms/products/products';

const Page = async ({ params }: { params: { shop: string } }) => {
	const response = await fetch(`http://localhost:5001/shops?title=${params.shop}`);

	const shop: any = await response.json();
	const products = shop[0].products;

	return (
		<>
			<Title level={'1'} caps style={{ textAlign: 'center' }}>
				{params.shop}
			</Title>
			<Products data={products} />
		</>
	);
};

export default Page;
