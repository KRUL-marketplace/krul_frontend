import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';
import { getBrandById, getProductsByBrandId } from '@app/(mainRoot)/brands/[brand]/api';
import { Brand } from '@app/(mainRoot)/brands/[brand]/brand.model';

import { BrandPageUI } from '@ui/pages/brand/brand.page';

interface BrandsPageParams {
	params: { brand: string };
	searchParams: { brandId: string };
}

const BrandPage = async (props: BrandsPageParams) => {
	const { searchParams } = props;

	const brandId = searchParams.brandId;

	const brand: Brand = await getBrandById(brandId);
	const products: Product[] = await getProductsByBrandId(brandId);

	return <BrandPageUI brand={brand} products={products} />;
};

export default BrandPage;
