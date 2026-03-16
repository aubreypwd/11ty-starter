module.exports = {
	...( require( '../_includes/11ty-starter-common/data/jsonld/website.js' ) ?? {} ),
	...( require( '../_includes/11ty-starter-common/data/jsonld/webpage.js' ) ?? {} ),
	...( require( '../_includes/11ty-starter-common/data/jsonld/person.js' ) ?? {} ),
	...( require( '../_includes/11ty-starter-common/data/jsonld/local-business.js' ) ?? {} ),
};
