const { PHASE_DEVELOPMENT_SERVER,PHASE_PRODUCTION_SERVER } = require('next/constants');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {

	const config = {
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
		distDir: 'build',
		// exportPathMap: async function (
        //     defaultPathMap,
        //     { dev, dir, outDir, distDir, buildId }
        //   ) {
        //     return {
        //       '/': { page: '/' },
        //       '/about-us': { page: '/about' }
        //     }
        //   },
		webpack: (config, { dev }) => {
			config.resolve.alias = {
				...config.resolve.alias,
				components: path.resolve(__dirname, 'pages/components/'),
				styles: path.resolve(__dirname, 'styles'),
				helpers:path.resolve(__dirname,'helpers'),
				static:path.resolve(__dirname,'static')

			};
			return config;
		}
	};



	let additionalConfig = {
		serverRuntimeConfig:null,
	};
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		additionalConfig = {
			publicRuntimeConfig: {
				base_url: "http://localhost:5001/ukiv-com-sticky-notes/us-central1"
			}
		};
	}

	if (phase === PHASE_PRODUCTION_SERVER) {
		additionalConfig = {
			publicRuntimeConfig: {
				base_url: ""
			}
		};
	}

	const fullConfig = Object.assign({},config,additionalConfig);

	return fullConfig;
};
