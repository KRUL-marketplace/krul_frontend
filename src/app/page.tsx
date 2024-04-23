import { Header } from '@/client/ui/molecules/header/header';
import { Products } from '@client/ui/organisms/products/products';
import { Shops } from '@client/ui/organisms/shops/shops';

const Home = () => {
	return (
		<>
			<Header />
			<main style={{ marginTop: '4rem' }}>
				{/*<Shops />*/}
				<Products />
			</main>
		</>
	);
};

export default Home;
