const site = {
	baseUrl: 'https://example.com',
	lang: 'en-US',
	title: 'Site Title',

	meta: {
		desc: 'Site description',
		img: '/assets/img/example.webp',
		twitter: 'example',
		author: 'My Name'
	},

	ga4: {
		id: '',
		force: false
	},

	head: {
		google: {
			fonts: [
				// 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rock+Salt&family=Teko:wght@300..700&display=swap'
			]
		}
	}
};

site.jsonld = [
	require( '../_includes/11ty-starter-common/data/jsonld/website.js' )( site ),
	require( '../_includes/11ty-starter-common/data/jsonld/webpage.js' )( site ),
	require( '../_includes/11ty-starter-common/data/jsonld/person.js' )( site ),
	require( '../_includes/11ty-starter-common/data/jsonld/local-business.js' )( site, {
		address: {
			postalCode: '87114',
			addressLocality: 'Albuquerque', // City.
			addressRegion: 'NM', // State.
			addressCountry: 'US', // US
		}
	} ),
];

site.llms = {
	...require( '../_includes/11ty-starter-common/data/llms/local-business.js' )( site ),
};

module.exports = site;
