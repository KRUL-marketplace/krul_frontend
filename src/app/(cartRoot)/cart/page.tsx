import { CartPageUI } from '@ui/pages/cart/cart.page';

interface Props {}

const getCartItems = async () => {
	return await new Promise(() => '');
};

const CartPage = async ({}: Props) => {
	return <CartPageUI />;
};

export default CartPage;
