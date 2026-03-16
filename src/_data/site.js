module.exports = {

	baseUrl: 'https://example.com',
	lang: 'en-US',
	title: 'Site Title',

	metagen: {
		desc: 'Site description',
		img: '',
		twitter: 'example',
		author: 'My Name'
	},

	ga4: {
		id: '',
		force: false
	},

	head: {
		css: {
			sanitize: {
				load: true
			}
		},
		google: {
			fonts: [
				'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rock+Salt&family=Teko:wght@300..700&display=swap'
			]
		}
	},

	jsonld: {
		ServiceOne: {
			'@type': 'Service',
			'@id': '#service-one',
			name: 'Example Service One',
			description: 'Example description for the first service.',
			serviceType: 'Example Service Type One',
			provider: { '@id': '#LocalBusiness' }
		},

		ServiceTwo: {
			'@type': 'Service',
			'@id': '#service-two',
			name: 'Example Service Two',
			description: 'Example description for the second service.',
			serviceType: 'Example Service Type Two',
			provider: { '@id': '#LocalBusiness' }
		},

		ServiceThree: {
			'@type': 'Service',
			'@id': '#service-three',
			name: 'Example Service Three',
			description: 'Example description for the third service.',
			serviceType: 'Example Service Type Three',
			provider: { '@id': '#LocalBusiness' }
		}
	}
};