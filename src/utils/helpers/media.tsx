import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 767.99,
		laptop: 1199.98,
		desktop: 1399.98,
	},
	interactions: {
		hover: '(hover: hover)',
		notHover: '(hover: none)',
		landscape: 'not all and (orientation: landscape)',
		portrait: 'not all and (orientation: portrait)',
	},
});

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = AppMedia;
