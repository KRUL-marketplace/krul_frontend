import { Header } from '@/client/ui/molecules/header/header';
import { Shops } from '@client/ui/organisms/shops/shops';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Shops />
			</main>
		</>
	);
};

export default Home;
