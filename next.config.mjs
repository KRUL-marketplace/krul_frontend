import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		removeConsole: false,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: { domains: ['images.fooby.ru'], formats: ['image/avif', 'image/webp'], },
};

export default nextConfig;
