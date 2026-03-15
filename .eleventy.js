const fs = require( 'fs/promises' );
const path = require( 'path' );
const eleventyToolsConfig = require( './src/_includes/11ty-starter-common/.eleventy.js' );

module.exports = async function ( eleventyConfig ) {

	const config = {
		...eleventyToolsConfig( eleventyConfig ),
		// Add your overrides here...
	};

	// @TODO: Will be removing this.
	// llms.txt, https://www.npmjs.com/package/eleventy-plugin-llms
	eleventyConfig.addWatchTarget( path.resolve( './llms.md' ) );
	eleventyConfig.addPlugin( require( 'eleventy-plugin-llms' ), {
		siteUrl: config.baseUrl,
		includeDrafts: false,
		markdownOnly: false,

		// Modify _llms.md for instructions for large language models.
		headerText: `${ await fs.readFile( path.resolve( './llms.md' ), 'utf8' ) }\n# Pages:\n`
	} );

	return config;
};
