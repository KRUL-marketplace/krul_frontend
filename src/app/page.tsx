import { Button } from '@/ui/button/button';

const Home = () => {
	return (
		<main style={{ display: 'flex', gap: '8px' }}>
			<Button variant={'primary'}>Primary</Button>
			<Button variant={'secondary'}>Secondary</Button>
			<Button variant={'tertiary'}>Tertiary</Button>
			<Button variant={'success'}>Tertiary</Button>
			<Button variant={'danger'}>Tertiary</Button>
		</main>
	);
};

export default Home;
