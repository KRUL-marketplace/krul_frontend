import { Product } from '@app/brands/[brand]/[product]/product.model';
import { getBrandById, getProductsByBrandId } from '@app/brands/[brand]/api';
import { Brand } from '@app/brands/[brand]/brand.model';

import { Title } from '@ui/atoms/typography/title/title';
import { Products } from '@ui/organisms/products/products';

interface BrandsPageParams {
	params: { brand: string };
	searchParams: { brandId: string };
}

const BrandPage = async (props: BrandsPageParams) => {
	const { searchParams } = props;

	const brandId = searchParams.brandId;

	const brand: Brand = await getBrandById(brandId);
	const products: Product[] = await getProductsByBrandId(brandId);

	return (
		<>
			<Title level={'1'} caps style={{ textAlign: 'center' }}>
				{brand.info.name}
			</Title>
			<Products data={products} />
		</>
	);
};

export default BrandPage;
