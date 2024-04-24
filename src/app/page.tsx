import Link from 'next/link';

import css from './main.module.scss';
import { Typography } from '@mui/material';

const Home = () => {
	return (
		<Link href={'/shops'} className={css.demoLink}>
			<Typography>Shops</Typography>
		</Link>
	);
};

export default Home;
