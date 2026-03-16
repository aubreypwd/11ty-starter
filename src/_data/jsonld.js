const baseJsonLd = require( '../_includes/11ty-starter-common/data/jsonld.js' );

module.exports = Object.assign(
	baseJsonLd,

	// Overrides.
	{
		Person: {
			...baseJsonLd.Person ?? {},
			name: 'Goofy Goof',
			jobTitle: 'Senior Host of Silly Adventures',
			telephone: '+1-555-0463',
			email: 'goofy@goofyadventures.example',
			sameAs: [
				'https://twitter.com/goofy',
				'https://facebook.com/goofy',
				'https://linkedin.com/in/goofy-goof'
			],
			knowsAbout: [
				'Theme Park Hosting',
				'Family Entertainment',
				'Cartoon Sports Instruction',
				'Character Meet-and-Greets',
				'Delightfully Clumsy Navigation'
			]
		},

		LocalBusiness: {
			...baseJsonLd.LocalBusiness ?? {},
			name: 'Goofys Disneyland Adventure Co.',
			telephone: '+1-555-0464',
			priceRange: '$$',
			areaServed: 'Anaheim, California',
			sameAs: [
				'https://maps.google.com/?q=Goofy%27s+Disneyland+Adventure+Co',
				'https://twitter.com/goofy',
				'https://facebook.com/goofy',
				'https://instagram.com/goofy'
			],
			address: {
				postalCode: '92802',
				addressLocality: 'Anaheim',
				addressRegion: 'CA',
				addressCountry: 'US',
				streetAddress: '1234 Disney Lane'
			},
			openingHours: [
				'Mo-Su 08:00-22:00'
			]
		}
	},

	// Add Services.
	{
		ServiceOne: {
			'@type': 'Service',
			'@id': '#goofy-guided-adventures',
			name: 'Goofy Guided Park Adventures',
			description: 'Cheerfully chaotic guided strolls through the park featuring scenic shortcuts, surprise detours, and an above-average chance of somebody dropping a hat.',
			serviceType: 'Theme Park Guide Service',
			provider: { '@id': '#LocalBusiness' }
		},

		ServiceTwo: {
			'@type': 'Service',
			'@id': '#goofy-photo-ops',
			name: 'Goofy Character Photo Sessions',
			description: 'Memorable photo sessions with exaggerated poses, oversized smiles, and the occasional delightfully mistimed wave.',
			serviceType: 'Character Entertainment',
			provider: { '@id': '#LocalBusiness' }
		},

		ServiceThree: {
			'@type': 'Service',
			'@id': '#goofy-junior-lessons',
			name: 'Goofy Junior How-To Lessons',
			description: 'Playful family lessons inspired by Goofys classic how-to style, covering dance moves, goofy sportsmanship, and cartoon-grade enthusiasm.',
			serviceType: 'Family Entertainment Service',
			provider: { '@id': '#LocalBusiness' }
		}
	}
);