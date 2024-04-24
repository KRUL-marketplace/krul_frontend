import { Text } from '@client/ui/atoms/text/text';

const Page = ({ params }: { params: { shop: string } }) => {
	return (
		<div>
			<Text variant={'h1'} textAlign={'center'}>
				{params.shop}
			</Text>
		</div>
	);
};

export default Page;
