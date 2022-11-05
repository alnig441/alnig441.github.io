// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		// 	precompress: false,
		// 	strict: true
		// }),
		paths: {
			base: dev ? '' : '/alnig441.github.io',
		},
		// appDir: 'internal'
	}
};

export default config;
