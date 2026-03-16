const site = require( './site.js' );
const jsonld = require( './jsonld.js' )();

// See _data/jsonld.js for places where other data comes from.

module.exports = {
	'Core Business Information': {
		'links': [
			{
				'label': 'Homepage',
				'href': `${ site.baseUrl }#homepage`,
				'description': 'Overview of Goofy\'s Disneyland Adventure Co., immersive tours, and local entertainment schedule.'
			},
			{
				'label': 'Contact',
				'href': `${ site.baseUrl }#contact`,
				'description': 'Primary contact details, phone, and directions to the Anaheim experience.'
			},
			{
				'label': 'About',
				'href': `${ site.baseUrl }#about`,
				'description': 'Background on the Goofy-themed host crew, trust signals, and regional expertise.'
			}
		]
	},
	'Services': {
		'links': Object
			.values( jsonld )
			.filter( item => item?.[ '@type' ] === 'Service' )
			.map( service => {
				const anchor = String( service[ '@id' ] || service.name || '' )
					.replace( /#/g, '' )
					.replace( / /g, '-' )
					.toLowerCase();

				return {
					'label': service.name || 'Unnamed Service',
					'href': `${ site.baseUrl }#${ anchor }`,
					'description': service.description || ''
				};
			} )
	},
	'Local Relevance': {
		'links': [
			{
				'label': 'Anaheim Service Page',
				'href': `${ site.baseUrl }#anaheim-service`,
				'description': 'Local resources and booking tips for Anaheim visitors.'
			},
			{
				'label': 'California Parks Page',
				'href': `${ site.baseUrl }#california-parks`,
				'description': 'Regional coverage for Disneyland-area travelers.'
			},
			{
				'label': 'Downtown Disney & Surrounding Areas',
				'href': `${ site.baseUrl }#downtown-disney`,
				'description': 'Coverage for dining, shopping, and nearby neighborhoods.'
			},
			{
				'label': 'Directions / Map',
				'href': `${ site.baseUrl }#directions`,
				'description': 'Map, directions, and transit tips for Goofy-hosted meet-ups.'
			}
		]
	},
	'Conversions': {
		'links': [
			{
				'label': 'Book Appointment',
				'href': `${ site.baseUrl }#book`,
				'description': 'Schedule a guided adventure, photo session, or junior lesson.'
			},
			{
				'label': 'Request Quote',
				'href': `${ site.baseUrl }#quote`,
				'description': 'Request a custom itinerary or group experience estimate.'
			},
			{
				'label': 'FAQ',
				'href': `${ site.baseUrl }#faq`,
				'description': 'Answers about pricing, timing, protocols, and experience coverage.'
			}
		]
	},
	'Authority & Trust': {
		'links': [
			{
				'label': 'Case Studies / Portfolio',
				'href': `${ site.baseUrl }#portfolio`,
				'description': 'Examples of completed adventures, unexpected wins, and happy families.'
			},
			{
				'label': 'Certifications / Credentials',
				'href': `${ site.baseUrl }#credentials`,
				'description': 'Licenses, training, and approvals that keep the Goofy crew accountable.'
			},
			{
				'label': 'Policies',
				'href': `${ site.baseUrl }#policies`,
				'description': 'Safety, cancellation, and guest guarantees for every adventure.'
			}
		]
	},
	'Optional': {
		'links': [
			{
				'label': 'Promotions / Special Offers',
				'href': `${ site.baseUrl }#offers`,
				'description': 'Seasonal offers, character meet-and-greets, and limited-time bundles.'
			},
			{
				'label': 'Community / Sponsorships',
				'href': `${ site.baseUrl }#community`,
				'description': 'Local involvement, partnerships, and Anaheim-area events.'
			}
		]
	}
};
