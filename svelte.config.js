// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

const dev = (process.argv.includes('dev')||process.argv.includes('preview'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		paths: {
			base: dev ? '' : '/alnig441.github.io',
		},
		appDir: 'essentials',
		// trailingSlash: 'always'
	}
};

export default config;
