const fs = require( 'fs/promises' );
const path = require( 'path' );
const eleventyToolsConfig = require( './src/_includes/11ty-starter-common/.eleventy.js' );

module.exports = async function ( eleventyConfig ) {

	const config = {
		...eleventyToolsConfig( eleventyConfig ),
		// Add your overrides here...
	};

	return config;
};
