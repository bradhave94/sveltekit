// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		id: 'CASING',
		name: 'Metal Plating',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'A lightweight metal product, heavily used in the manufacture of <TECHNOLOGY>starship parts<> and <TECHNOLOGY>deployable technology<>. A mainstay of the construction industries of all known primary species.\n\nCrafted from <EARTH>Ferrite Dust<>.',
		base_value: 800,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.CASING.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'NANOTUBES',
		name: 'Carbon Nanotubes',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'Metres and metres of high capacity <FUEL>carbon nanotubes<>.\n\nTheir high tensile strength and mild conductivity make these a key component in many <TECHNOLOGY>advanced technologies<>.',
		base_value: 500,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.NANOTUBES.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CARBON_SEAL',
		name: 'Hermetic Seal',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'A high-performance <FUEL>carbon seal<>, able to withstand both the harsh interstellar environment and the rigours of intensive, high-energy industrial use.\n\nUser is advised to regularly check seal integrity after installation.',
		base_value: 800,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'TRADEPROD.COMMODITY5.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'MICROCHIP',
		name: 'Microprocessor',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'A compact, <TECHNOLOGY>low-heat microchip<>. Assembled from processed <STELLAR>Chromatic Metal<>, created from one of several specialised terrain metals.\n\nUsed in the creation of a wide range of <TECHNOLOGY>advanced technologies<>.',
		base_value: 2000,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.MICROCHIP.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
			{
				id: 'NANOTUBES',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'PRODFUEL1',
		name: 'Oxygen Capsule',
		type: 'product',
		subtitle: 'Portable Life Support Power',
		description:
			'Stablised and secure <FUEL>life support<> filtration gas.\n\nEasily assembled from <FUEL>Oxygen<> and <EARTH>Ferrite Dust<>. Offers an efficient method for long-term life support power.',
		base_value: 350,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.OXYGENGEL.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 10,
			},
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'PRODFUEL2',
		name: 'Life Support Gel',
		type: 'product',
		subtitle: 'Portable Life Support Power',
		description:
			"Emergency <FUEL>life support fuel<>.\n\nSynthesised from <TECHNOLOGY>rocket fuel crystals<> and <FUEL>carbon<>, this gel offers a temporary boost to life support systems. Long-term impact on user's lungs is currently unknown.",
		base_value: 200,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.OXYGENGEL2.png',
		ingredients: [
			{
				id: 'JELLY',
				amount: 1,
			},
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_257',
				name: 'Requested Operation: Advanced Oxygen Capture',
				result: {
					id: 'PRODFUEL2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 10,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'LAUNCHSUB',
						amount: 10,
					},
				],
			},
		],
	},
	{
		id: 'POWERCELL',
		name: 'Ion Battery',
		type: 'product',
		subtitle: 'Portable Energy Storage',
		description:
			'Convenient and optimised power storage unit. Used in a wide variety of <COMMODITY>defensive<> and <COMMODITY>hazard protection<> systems.\n \nConstructed by fusing <EARTH>Ferrite Dust<> with underground <TECHNOLOGY>Cobalt<>. Frequently found ready-made in cylindrical metal containers.',
		base_value: 200,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.POWERCELL.png',
		ingredients: [
			{
				id: 'CAVE1',
				amount: 10,
			},
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_261',
				name: 'Requested Operation: Ion Capture',
				result: {
					id: 'POWERCELL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 10,
					},
					{
						id: 'ASTEROID1',
						amount: 10,
					},
					{
						id: 'CATALYST1',
						amount: 10,
					},
				],
			},
		],
	},
	{
		id: 'POWERCELL2',
		name: 'Advanced Ion Battery',
		type: 'product',
		subtitle: 'Portable Energy Storage',
		description:
			'Powerful energy storage unit. Used in a wide variety of <COMMODITY>defensive<> and <COMMODITY>hazard protection<> systems.\n\nConstructed from <TECHNOLOGY>Ionised Cobalt<> and <EARTH>Pure Ferrite<>, and occasionally found in cylindrical metal containers.',
		base_value: 500,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.POWERCELL2.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 10,
			},
			{
				id: 'LAND2',
				amount: 20,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_262',
				name: 'Requested Operation: Advanced Ion Capture',
				result: {
					id: 'POWERCELL2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND2',
						amount: 10,
					},
					{
						id: 'CATALYST2',
						amount: 10,
					},
					{
						id: 'ASTEROID1',
						amount: 10,
					},
				],
			},
		],
	},
	{
		id: 'SHIPCHARGE',
		name: 'Starshield Battery',
		type: 'product',
		subtitle: 'Portable Energy Storage',
		description:
			'A power storage unit optimised for use in <COMMODITY>starship defensive systems<>.\n \n<SPECIAL>Tritium<>-fuelled capacitors provide quick-release charge for the <TECHNOLOGY>Deflector Shield<>, but would overload smaller-scale equipment.',
		base_value: 500,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SHIPCHARGE.png',
		ingredients: [
			{
				id: 'ROCKETSUB',
				amount: 50,
			},
			{
				id: 'ASTEROID2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'JELLY',
		name: 'Di-hydrogen Jelly',
		type: 'product',
		subtitle: 'Portable Life Support Power',
		description:
			'A faintly-glowing jelly. Its gentle light and soft wobble belie the fact that this sticky gel is both highly toxic and highly flammable. Skin contact is to be avoided at all costs.\n\nSynthesised from <TECHNOLOGY>Di-hydrogen<>.',
		base_value: 200,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.JELLY.png',
		ingredients: [
			{
				id: 'LAUNCHSUB',
				amount: 40,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_15',
				name: 'Requested Operation: Condense Di-hydrogen',
				result: {
					id: 'JELLY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 30,
					},
				],
			},
		],
	},
	{
		id: 'LAUNCHFUEL',
		name: 'Starship Launch Fuel',
		type: 'product',
		subtitle: 'Stabilised Di-hydrogen Fuel',
		description:
			'Highly reactive solid-state fuel, required to fuel <TECHNOLOGY>Starship Launch Thrusters<>.\n\nCreated from crystallised <TECHNOLOGY>Di-hydrogen<>, found in blue deposits on all worlds.',
		base_value: 450,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.LAUNCHFUEL.png',
		ingredients: [
			{
				id: 'LAUNCHSUB',
				amount: 40,
			},
			{
				id: 'CASING',
				amount: 1,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_258',
				name: 'Requested Operation: Di-hydrogen Capture',
				result: {
					id: 'LAUNCHFUEL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 10,
					},
					{
						id: 'LAND1',
						amount: 20,
					},
					{
						id: 'CATALYST2',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_259',
				name: 'Requested Operation: Di-hydrogen Capture',
				result: {
					id: 'LAUNCHFUEL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 10,
					},
					{
						id: 'LAND2',
						amount: 20,
					},
					{
						id: 'CATALYST1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_260',
				name: 'Requested Operation: Di-hydrogen Capture',
				result: {
					id: 'LAUNCHFUEL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 10,
					},
					{
						id: 'LAND3',
						amount: 10,
					},
					{
						id: 'CATALYST2',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'SUBFUEL',
		name: 'Hydrothermal Fuel Cell',
		type: 'product',
		subtitle: 'Submarine Reactor Fuel',
		description:
			'A high thermal energy fuel, contained within a standardised fuel cell. Used to fuel the <TECHNOLOGY>Humboldt Drive<> that powers the Nautilon submarine.\n\nCreated with a mix of organic compounds (<FUEL>Carbon<> and <TRADEABLE>cyto-phosphates<>) and localised mineral <TRADEABLE>salts<>.',
		base_value: 7200,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.SUBFUEL.png',
		ingredients: [
			{
				id: 'WATER1',
				amount: 40,
			},
			{
				id: 'WATERPLANT',
				amount: 40,
			},
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'GRENFUEL1',
		name: 'Unstable Plasma',
		type: 'product',
		subtitle: 'Plasma Launcher Recharge',
		description:
			'Densely-packed fuel capsule for use in the <TECHNOLOGY>Plasma Launcher<>.\n \nContained highly-pressurised electro-thermal energy for use in land disruption grenade technology.',
		base_value: 5750,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.PLASMA1.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 50,
			},
			{
				id: 'CASING',
				amount: 1,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_253',
				name: 'Requested Operation: Plasma Pressurisation',
				result: {
					id: 'GRENFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 10,
					},
					{
						id: 'LAND1',
						amount: 20,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_254',
				name: 'Requested Operation: Plasma Pressurisation',
				result: {
					id: 'GRENFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 10,
					},
					{
						id: 'LAND1',
						amount: 20,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_255',
				name: 'Requested Operation: Plasma Pressurisation',
				result: {
					id: 'GRENFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 10,
					},
					{
						id: 'LAND2',
						amount: 20,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_256',
				name: 'Requested Operation: Plasma Pressurisation',
				result: {
					id: 'GRENFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 10,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'LAND2',
						amount: 20,
					},
				],
			},
		],
	},
	{
		id: 'AMMO',
		name: 'Projectile Ammunition',
		type: 'product',
		subtitle: 'Universal Ammo Module',
		description:
			'Advanced munition fragments, constructed to fit Universal Multi-Tool Standard 07/FF1.\n\nEasily inserted into the <TECHNOLOGY>Boltcaster<>, <TECHNOLOGY>Pulse Spitter<> and <TECHNOLOGY>Scatter Blaster<> via the Multi-Tool clip reloading system.',
		base_value: 1,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'PRODUCT.AMMO.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'AM_HOUSING',
		name: 'Antimatter Housing',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'Secure antimatter containment device, required before <FUEL>Antimatter<> can be safely secured as <FUEL>Warp Cells<>.\n\nRebound <FUEL>Oxygen<> forms a protective gas pocket, preventing the antimatter from reacting with the surrounding casing.',
		base_value: 6500,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.AMHOUSING.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 30,
			},
			{
				id: 'LAND1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'ANTIMATTER',
		name: 'Antimatter',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'Contained negative matter and baryogenesis antiparticles.\n \nThe vast energy potential of antimatter makes it highly valuable. 95% of existing antimatter consumption is in the powering of <TECHNOLOGY>starship hyperdrives<>.\n\n<FUEL>WARNING<>: uncontained usage is not recommended.',
		base_value: 5233,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.ANTIMATTER.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 25,
			},
			{
				id: 'FUEL2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'HYPERFUEL1',
		name: 'Warp Cell',
		type: 'product',
		subtitle: 'Hyperdrive Charging Unit',
		description:
			'This <FUEL>antimatter-based fuel<> is one of the few power sources capable of meeting the incredible energy requirements of a <TECHNOLOGY>starship hyperdrive<>.\n\nSecured within a robust housing, the cell is guarenteed paradox-free during FTL travel.',
		base_value: 46750,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.WARPCELL.png',
		ingredients: [
			{
				id: 'AM_HOUSING',
				amount: 1,
			},
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_250',
				name: 'Requested Operation: Antimatter Bypass',
				result: {
					id: 'HYPERFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 25,
					},
					{
						id: 'CATALYST1',
						amount: 10,
					},
					{
						id: 'STELLAR2',
						amount: 250,
					},
				],
			},
			{
				id: 'REFINERECIPE_251',
				name: 'Requested Operation: Antimatter Bypass',
				result: {
					id: 'HYPERFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 50,
					},
					{
						id: 'CATALYST2',
						amount: 5,
					},
					{
						id: 'STELLAR2',
						amount: 250,
					},
				],
			},
			{
				id: 'REFINERECIPE_252',
				name: 'Requested Operation: Antimatter Bypass',
				result: {
					id: 'HYPERFUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 25,
					},
					{
						id: 'CATALYST2',
						amount: 5,
					},
					{
						id: 'STELLAR2',
						amount: 250,
					},
				],
			},
		],
	},
	{
		id: 'HYPERFUEL2',
		name: 'Warp Hypercore',
		type: 'product',
		subtitle: 'Hyperdrive Charging Unit',
		description:
			'A <COMMODITY>high-capacity<> <FUEL>antimatter-based fuel<>, this cell harnesses an internal black hole generator to power <TECHNOLOGY>starship hyperdrives<> across multiple warp jumps.\n\nCell walls are specially designed to reflect any reality paradoxes back towards the heart of the unit, where they generate additional power.',
		base_value: 46750,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.WARPCELL2.png',
		ingredients: [
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
			{
				id: 'STORM_CRYSTAL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'OXY_CRAFT',
		name: 'Oxygen Filter',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'A specialist technology component.\n\nThis small device can rapidly change the gaseous environment within a device, handling conditions from total vacuum to pure oxygen atmospheres.',
		base_value: 615,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.OXYCRAFT.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 90,
			},
			{
				id: 'LAND2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'WATER_CRAFT',
		name: 'Salt Refractor',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'A specialist technology component, vital to the complex internals of modern laser systems. \n\nThis light-scattering device takes advantage of the unique optical properties of stabilised and polished salt, to both slow and refract passing photons.',
		base_value: 30500,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SALTREFRACTOR.png',
		ingredients: [
			{
				id: 'WATER1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'CAVE_CRAFT',
		name: 'Cobalt Mirror',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'A specialist optical component.\n\nEmploying a polished cobalt surface, this mirror is able to selectively filter different wavelengths of light, changing its reflective pattern based on nearby magnetic fields.',
		base_value: 20500,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.COBALTMIRROR.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CATA_CRAFT',
		name: 'Sodium Diode',
		type: 'product',
		subtitle: 'Crafted Technology Component',
		description:
			'An advanced circuit component.\n\nThe refined sodium electrode within its vacuum tube gives this diode specialist surge-protection capabilities.',
		base_value: 3500,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.CATACRAFT.png',
		ingredients: [
			{
				id: 'CATALYST2',
				amount: 40,
			},
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'QUAD_PROD',
		name: 'Quad Servo',
		type: 'product',
		subtitle: 'Anomalous Material',
		description:
			'A highly sprung motor arm salvaged from inside of a Sentinel patrol unit. It occasionally twitches, as if experiencing the echo of combat.',
		base_value: 20000,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#29ff2957',
		icon: 'PRODUCT.QUADSERVO.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WALKER_PROD',
		name: 'Walker Brain',
		type: 'product',
		subtitle: 'Anomalous Material',
		description:
			'Shifting nanite clusters sewn together with a pugneum filament, this circuit is painfully hot to the touch.\n\nA sinister purple light leaks from deep within its wiring, changing in intensity as it watches its holder.',
		base_value: 35000,
		category: 'product_category_component',
		trade_category: 'trade_category_none',
		color: '#29ff2957',
		icon: 'PRODUCT.WALKERBRAIN.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TECH_COMP',
		name: 'Wiring Loom',
		type: 'product',
		subtitle: 'Universal Technology Platform',
		description:
			'A prefabricated circuit board, designed for flexible use in a large range of <TECHNOLOGY>technology components<>.\n\nThe module features an integrated nanite processor, allowing it to be quickly configured for a wide variety of uses.',
		base_value: 50000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.TECHMODULE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FUELPROD3',
		name: 'Carbon Crystal',
		type: 'product',
		subtitle: 'Concentrated Carbon Deposit',
		description:
			"Hyper-compressed <FUEL>carbon<>, this substance's dense nanostructure makes it highly valuable as both an energy source and a technology component.\n\nSynthesised from <FUEL>Condensed Carbon<>.",
		base_value: 3600,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.FUELPROD.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 150,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_203',
				name: 'Requested Operation: Carbon Crystallisation',
				result: {
					id: 'FUELPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 50,
					},
					{
						id: 'FUEL2',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_232',
				name: 'Requested Operation: Carbon Crystallisation',
				result: {
					id: 'FUELPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 40,
					},
					{
						id: 'FUEL2',
						amount: 40,
					},
					{
						id: 'ROCKETSUB',
						amount: 50,
					},
				],
			},
		],
	},
	{
		id: 'LANDPROD3',
		name: 'Rare Metal Element',
		type: 'product',
		subtitle: 'Concentrated Metal Deposit',
		description:
			'A highly-prized metal product, this rare element is used in the manufacture of several advanced technologies.\n\nMetal is highly reactive and quickly bonds to exposed skin. User is advised to handle with extreme caution.\n\nSynthesised from <EARTH>Magnetised Ferrite<>.',
		base_value: 4200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'PRODUCT.RAREMETALELEMENT.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 150,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_208',
				name: 'Requested Operation: Rare Metal Detoxification',
				result: {
					id: 'LANDPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND3',
						amount: 25,
					},
					{
						id: 'OXYGEN',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_227',
				name: 'Requested Operation: Rare Metal Fusion',
				result: {
					id: 'LANDPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 35,
					},
					{
						id: 'LAND2',
						amount: 35,
					},
					{
						id: 'LAND3',
						amount: 35,
					},
				],
			},
			{
				id: 'REFINERECIPE_233',
				name: 'Requested Operation: Rare Metal Fusion',
				result: {
					id: 'LANDPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 20,
					},
					{
						id: 'LAND3',
						amount: 20,
					},
					{
						id: 'ROCKETSUB',
						amount: 25,
					},
				],
			},
		],
	},
	{
		id: 'CAVEPROD3',
		name: 'TetraCobalt',
		type: 'product',
		subtitle: 'Concentrated Cobalt Deposit',
		description:
			'A novel molecular form of <TECHNOLOGY>Cobalt<>, requiring very high energy levels to create. Natural occurrence is extremely rare.\n\nSynthesised from <TECHNOLOGY>Ionised Cobalt<>.',
		base_value: 6150,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#5cff5c83',
		icon: 'PRODUCT.CAVEPROD.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 150,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_206',
				name: 'Requested Operation: Cobalt Supercharging',
				result: {
					id: 'CAVEPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CAVE1',
						amount: 50,
					},
					{
						id: 'CAVE2',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_234',
				name: 'Requested Operation: Cobalt Supercharging',
				result: {
					id: 'CAVEPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CAVE1',
						amount: 40,
					},
					{
						id: 'CAVE2',
						amount: 40,
					},
					{
						id: 'ROCKETSUB',
						amount: 50,
					},
				],
			},
		],
	},
	{
		id: 'WATERPROD3',
		name: 'Chloride Lattice',
		type: 'product',
		subtitle: 'Concentrated Chlorine Deposit',
		description:
			'A tightly-bonded form of Chlorine. Rigidly-packed molecules offer unrivalled conductivity. Not known to form spontaneously: creation requires highly-focused energy inputs.\n\nSynthesised from <CATALYST>Chlorine<>.',
		base_value: 6150,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#8aff8a42',
		icon: 'PRODUCT.WATERPROD.png',
		ingredients: [
			{
				id: 'WATER2',
				amount: 150,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_205',
				name: 'Requested Operation: Chlorine Latticing',
				result: {
					id: 'WATERPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATER1',
						amount: 50,
					},
					{
						id: 'WATER2',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_235',
				name: 'Requested Operation: Chlorine Latticing',
				result: {
					id: 'WATERPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATER1',
						amount: 40,
					},
					{
						id: 'WATER2',
						amount: 40,
					},
					{
						id: 'ROCKETSUB',
						amount: 50,
					},
				],
			},
		],
	},
	{
		id: 'CATAPROD3',
		name: 'Destablised Sodium',
		type: 'product',
		subtitle: 'Concentrated Sodium Deposit',
		description:
			'Sodium is typically highly stable, but certain configurations retain the reactivity of its component ions. User is advised to wear <TECHNOLOGY>Hazardous Material Gauntlets<> before handling.\n\nSynthesised from <TRADEABLE>Sodium<>.',
		base_value: 12300,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.DESTABILISEDSODIUM.png',
		ingredients: [
			{
				id: 'CATALYST2',
				amount: 150,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_204',
				name: 'Requested Operation: Sodium Destabilisation',
				result: {
					id: 'CATAPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CATALYST1',
						amount: 50,
					},
					{
						id: 'CATALYST2',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_236',
				name: 'Requested Operation: Sodium Destabilisation',
				result: {
					id: 'CATAPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CATALYST1',
						amount: 40,
					},
					{
						id: 'CATALYST2',
						amount: 40,
					},
					{
						id: 'ROCKETSUB',
						amount: 50,
					},
				],
			},
		],
	},
	{
		id: 'OXYPROD3',
		name: 'Superoxide Crystal',
		type: 'product',
		subtitle: 'Concentrated Oxygen Deposit',
		description:
			'A para-magnetic form of Oxygen, this rare substance has much to offer in the production of <TECHNOLOGY>advanced technologies<>. Requires conversion prior to input into Life Support systems. Direct inhalation is NOT recommended.\n\nSynthesised from <FUEL>Oxygen<>.',
		base_value: 5100,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.SUPEROXIDE.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 150,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_207',
				name: 'Requested Operation: Oxygen Nucleation',
				result: {
					id: 'OXYPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 100,
					},
					{
						id: 'ROCKETSUB',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_237',
				name: 'Requested Operation: Oxygen Nucleation',
				result: {
					id: 'OXYPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 40,
					},
					{
						id: 'RADIO1',
						amount: 40,
					},
					{
						id: 'ROCKETSUB',
						amount: 50,
					},
				],
			},
		],
	},
	{
		id: 'GEODE_LAND',
		name: 'Geode',
		type: 'product',
		subtitle: 'Valuable Mineral Deposit',
		description:
			'An unusually vibrant and potentially valuable lump of rock.\n\nSelect in the Inventory (<IMG>INVENTORY<>) and crack open with <IMG>FE_ALT1<>.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'PRODUCT.GEODE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'GEODE_CAVE',
		name: 'Geode',
		type: 'product',
		subtitle: 'Valuable Mineral Deposit',
		description:
			'An unusually vibrant and potentially valuable lump of rock.\n\nSelect in the Inventory (<IMG>INVENTORY<>) and crack open with <IMG>FE_ALT1<>.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#5cff5c83',
		icon: 'PRODUCT.GEODE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'GEODE_CRYSTAL',
		name: 'Crystal Fragment',
		type: 'product',
		subtitle: 'Concentrated Element Shard',
		description:
			'A crystalline shard with an unusually dense structure. Potentially highly valuable.\n\nSelect in the Inventory (<IMG>INVENTORY<>) and crack open with <IMG>FE_ALT1<>.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.GEODE.CRYSTAL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'GEODE_SPACE',
		name: 'Tritium Hypercluster',
		type: 'product',
		subtitle: 'Energetic Fragment',
		description:
			'A shard of pure crystalised <EXOTIC>Tritium<>.\n\nSelect in the Inventory (<IMG>INVENTORY<>) and crack open with <IMG>FE_ALT1<>.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'PRODUCT.GEODE.SPACE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'GEODE_ASTEROID',
		name: 'Gold Nugget',
		type: 'product',
		subtitle: 'Valuable Ore',
		description:
			'A highly valuable ore chunk, ready to be processed into <EXOTIC>Gold<>.\n\nSelect in the Inventory (<IMG>INVENTORY<>) and crack open with <IMG>FE_ALT1<>.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.GEODE.ASTEROID.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SACVENOM',
		name: 'Sac Venom',
		type: 'product',
		subtitle: 'Trade commodity',
		description:
			'Stabilised poison sample initially produced by aquatic urchin creatures.\n\nA rare and expensive item on the Galactic Trade Network.',
		base_value: 12300,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.SACVENOM.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'GRAVBALL',
		name: 'Gravitino Ball',
		type: 'product',
		subtitle: 'Trade commodity',
		description:
			'Supersymmetric particle cluster.\n\nExtremely rare and valuable. A product of divergent super-gravitational forces.',
		base_value: 13100,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.GRAVBALL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ALBUMENPEARL',
		name: 'Albumen Pearl',
		type: 'product',
		subtitle: 'Trade commodity',
		description:
			'Gemstone formed over the course of centuries within the egg of a super-incubatory species.\n\nExtremely rare.',
		base_value: 9500,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.ABUMENPEARL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FIENDCORE',
		name: 'Larval Core',
		type: 'product',
		subtitle: 'Monstrosity',
		description:
			'A pulsating jellied orb, this gooey sphere is warm to the touch. Its stench triggers a primal fear in mortal beings, a deep-seated gnawing that begs you to drop it and flee.',
		base_value: 65000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#73ff7317',
		icon: 'PRODUCT.FIENDCORE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'STORM_CRYSTAL',
		name: 'Storm Crystal',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'A rare and highly valuable cluster of storm crystals. These crystalline structures thrive in stormy conditions, and naturally attract lightning strikes, becoming spectacularly luminescent when ionised. Exclusively found on <FUEL>extreme weather planets<>.',
		base_value: 126000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'PRODUCT.STORMCRYSTAL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'CLAMPEARL',
		name: 'Living Pearl',
		type: 'product',
		subtitle: 'Semi-Conscious Gemstone',
		description:
			"Born in the hearts of enormous glowing molluscs found deep underwater.\n\nUnlike most pearls, this sample is no unliving calcite. Some trace of the mother-clam's consciousness remains within the gem, giving it a lingering, haunting beauty.",
		base_value: 5050,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.CLAMPEARL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'VENTGEM',
		name: 'Crystal Sulphide',
		type: 'product',
		subtitle: 'Compressed Mineral',
		description:
			'Formed in the incredible, high-pressure furnace of planetary cores, these rich mineral deposits have an almost glass-like quality.\n\nHas a wide variety of industrial uses, taking advantage of both its mineral content and its extreme strength under pressure.',
		base_value: 7800,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.VENTGEM.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FISHCORE',
		name: 'Hadal Core',
		type: 'product',
		subtitle: 'Horrific Sample',
		description:
			'A highly-pressurised fleshy orb.\n\nOne can feel it push back when touched, a flash of bioluminescence stirring in the inky black core of this mysterious object.',
		base_value: 97500,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.FISHCORE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EYEBALL',
		name: 'Hypnotic Eye',
		type: 'product',
		subtitle: 'Horrific Sample',
		description:
			'The eye is cold, almost frozen, to the touch. Nonetheless, it is impossible to escape the feeling it is somehow still alive.\n\nExtended exposure is not recommended. Do not stare back into the eye. Do not stare back. Do not stare back.',
		base_value: 60000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.EYEBALL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'CAVECUBE',
		name: 'Vortex Cube',
		type: 'product',
		subtitle: 'Trade commodity',
		description:
			'Dense metal objects that, long ago, materialised within subterranean networks throughout the Galaxy.\n\nExtremely rare, and of high value.',
		base_value: 5800,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.VORTEXCUBE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ALLOY1',
		name: 'Aronium',
		type: 'product',
		subtitle: 'Alloy Metal',
		description:
			'A lightweight and highly malleable alloy. Crafted from <EARTH>Paraffinium<> and <EARTH>Chlorine<>.\n\nIn high demand on the Galactic Trade Network due to its utility in the construction of planetside outposts and facilities.',
		base_value: 25000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.1.png',
		ingredients: [
			{
				id: 'LUSH1',
				amount: 50,
			},
			{
				id: 'CAVE2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_263',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_264',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_265',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_266',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_267',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_268',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_269',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_270',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'ALLOY2',
		name: 'Dirty Bronze',
		type: 'product',
		subtitle: 'Alloy Metal',
		description:
			"A popular metal alloy with a wide variety of uses. 'Dirty Bronze' has shed its scientific name in favour of the popular term for its colour.\n\nCrafted from <EARTH>Pure Ferrite<> and <EARTH>Pyrite<>.",
		base_value: 25000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.2.png',
		ingredients: [
			{
				id: 'DUSTY1',
				amount: 50,
			},
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_271',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_272',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_273',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_274',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_275',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_276',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_277',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_278',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'ALLOY3',
		name: 'Herox',
		type: 'product',
		subtitle: 'Alloy Metal',
		description:
			'Combined neutral alloy with uses that range from pharmacology all the way to heavy industry. Crafted from <EARTH>Chlorine<> and <EARTH>Ammonia<>.\n\nForms the backbone of galactic alloy trading.',
		base_value: 25000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.3.png',
		ingredients: [
			{
				id: 'TOXIC1',
				amount: 50,
			},
			{
				id: 'CAVE2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_279',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_280',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_281',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_282',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_283',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_284',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_285',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_286',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'ALLOY4',
		name: 'Lemmium',
		type: 'product',
		subtitle: 'Alloy Metal',
		description:
			'Pure Ferrite alloy. Crafted from <EARTH>Pure Ferrite<> and <EARTH>Uranium<>.\n\nUsed extensively in starship freighter construction due to its sheer strength. A hardcore material popular on the Galactic Trade Network.',
		base_value: 25000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.4.png',
		ingredients: [
			{
				id: 'RADIO1',
				amount: 50,
			},
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_287',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_288',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_289',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_290',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_291',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_292',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_293',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND1',
						amount: 120,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_294',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 30,
					},
					{
						id: 'LAND2',
						amount: 60,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'ALLOY5',
		name: 'Magno-Gold',
		type: 'product',
		subtitle: 'Alloy Metal',
		description:
			'Highly prized and lustrous alloy. Popular with traders of all known primary galactic races. Crafted from <EARTH>Ionised Cobalt<> and <EARTH>Phosphorus<>.\n\nEasily recognisable by its bright red glow and strong magnetic field.',
		base_value: 25000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.5.png',
		ingredients: [
			{
				id: 'HOT1',
				amount: 50,
			},
			{
				id: 'CAVE2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_295',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_296',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_297',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_298',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_299',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_300',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_301',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_302',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'ALLOY6',
		name: 'Grantine',
		type: 'product',
		subtitle: 'Alloy Metal',
		description:
			'Soft workable alloy favoured by artisans throughout the known galaxy. Crafted from <EARTH>Ionised Cobalt<> and <EARTH>Dioxite<>.\n\nA popular trading good, with many galactic shipping paths devoted to its sale and transport.',
		base_value: 25000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.6.png',
		ingredients: [
			{
				id: 'COLD1',
				amount: 50,
			},
			{
				id: 'CAVE2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_303',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_304',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ROCKETSUB',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_305',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_306',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID1',
						amount: 20,
					},
				],
			},
			{
				id: 'REFINERECIPE_307',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_308',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID2',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_309',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE1',
						amount: 60,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_310',
				name: 'Requested Operation: Alloy Latticing',
				result: {
					id: 'ALLOY6',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 30,
					},
					{
						id: 'CAVE2',
						amount: 30,
					},
					{
						id: 'ASTEROID3',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'ALLOY7',
		name: 'Geodesite',
		type: 'product',
		subtitle: 'Enriched Alloy Metal',
		description:
			'Advanced and durable alloy primarily used in starship hull construction and deep-space exploration drone technology.\n\nCrafted from <SPECIAL>Herox<>, <SPECIAL>Dirty Bronze<> and <SPECIAL>Lemmium<>.',
		base_value: 150000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.METALLIC.7.png',
		ingredients: [
			{
				id: 'ALLOY2',
				amount: 1,
			},
			{
				id: 'ALLOY3',
				amount: 1,
			},
			{
				id: 'ALLOY4',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'ALLOY8',
		name: 'Iridesite',
		type: 'product',
		subtitle: 'Enriched Alloy Metal',
		description:
			'Advanced light metal alloy traded throughout the galactic Outer Edge. Often used in the interiors of trading shuttles to reduce weight as they ascend from planets with high gravitational fields.\n\nCrafted from <SPECIAL>Aronium<>, <SPECIAL>Magno-Gold<> and <SPECIAL>Grantine<>.',
		base_value: 150000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.IRIDISITE.png',
		ingredients: [
			{
				id: 'ALLOY1',
				amount: 1,
			},
			{
				id: 'ALLOY5',
				amount: 1,
			},
			{
				id: 'ALLOY6',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'STARCHART_A',
		name: 'Planetary Chart',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of a nearby planet. A <FUEL>secure site of interest<> has been marked.\n\nSelect the map and use Plot Route (<IMG>FE_ALT1<>) to pin the location in your Exosuit display.\n\nNew maps can be gained by exchanging <COMMODITY>Navigation Data<> with a Space Station Cartographer.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#27ff2733',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'STARCHART_B',
		name: 'Planetary Chart',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of a nearby planet. The coordinates of a <TECHNOLOGY>distress signal<> have been marked.\n\nSelect the map and use Plot Route (<IMG>FE_ALT1<>) to pin the location in your Exosuit display.\n\nNew maps can be gained by exchanging <COMMODITY>Navigation Data<> with a Space Station Cartographer.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#27ff2733',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'STARCHART_C',
		name: 'Planetary Chart',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of a nearby planet. An <COMMODITY>inhabited outpost<> of some kind has been marked.\n\nSelect the map and use Plot Route (<IMG>FE_ALT1<>) to pin the location in your Exosuit display.\n\nNew maps can be gained by exchanging <COMMODITY>Navigation Data<> with a Space Station Cartographer.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#27ff2733',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'STARCHART_D',
		name: 'Planetary Chart',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of a nearby planet. An <SPECIAL>ancient artifact site<> has been marked.\n\nSelect the map and use Plot Route (<IMG>FE_ALT1<>) to pin the location in your Exosuit display.\n\nNew maps can be gained by exchanging <COMMODITY>Navigation Data<> with a Space Station Cartographer.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#27ff2733',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'CHART_EMPTY',
		name: 'Planetary Chart (Empty)',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of the star system. All marked locations have been visited.\n\nExchange data with local lifeforms to find <STELLAR>new points of interest<>.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'A1S6_STARMAP',
		name: 'Planetary Chart',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of a nearby planet. An <SPECIAL>ancient artifact site<> has been marked.\n\nSelect the map and use Plot Route (<IMG>FE_ALT1<>) to pin the location in your Exosuit display.\n\nNew maps can be gained by exchanging <COMMODITY>Navigation Data<> with a Space Station Cartographer.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#27ff2733',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TUT_STARMAP',
		name: 'Planetary Chart',
		type: 'product',
		subtitle: 'Cartographic Data',
		description:
			'A map of a nearby planet. The coordinates of a <TECHNOLOGY>distress signal<> have been marked.\n\nSelect the map and use Plot Route (<IMG>FE_ALT1<>) to pin the location in your Exosuit display.\n\nNew maps can be gained by exchanging <COMMODITY>Navigation Data<> with a Space Station Cartographer.',
		base_value: 3200,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.STARCHART.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ARTIFACT_KEY',
		name: 'Ancient Key',
		type: 'product',
		subtitle: 'Timeless Artifact',
		description:
			'A key of some weight, this aged piece of wrought iron must belong in a nearby lock...',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#25ff2500',
		icon: 'PRODUCT.ANCIENTKEY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRIDENT_KEY',
		name: 'Trident Key',
		type: 'product',
		subtitle: 'Aquatic Relic',
		description:
			'A strange forked key, glowing with an ultraviolet light.\n\nDespite its primitive appearance, Exosuit scanning systems reveal traces of nanite foam upon its teeth.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#25ff2500',
		icon: 'PRODUCT.TRIDENTKEY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WAR_CURIO3',
		name: "Vy'keen Tablet",
		type: 'product',
		subtitle: 'Communion of Hirk',
		description:
			"A stone tablet bearing line after line of intricate runes. The words are unintelligible, an ancient dialect forgotten by all but the oldest of the Vy'keen elders.\n\nThe hand that carved this stone must have been extraordinary. The stonework is precise, delicate - and yet perfectly conveys the unyielding aggression its writer clearly possessed.",
		base_value: 1250,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'TREASUREPROD.STRANGEBOOK.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EXP_CURIO3',
		name: 'Divergence Cube',
		type: 'product',
		subtitle: 'Anomalous Data Unit',
		description:
			'A glitching, pulsing data unit. It does not seem to belong in this reality.\n\nThe cube gives the impression of a silent scream, the frozen cries of hundreds of lost minds trapped within.',
		base_value: 3015,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#29ff2957',
		icon: 'PRODUCT.CURIO.1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'NAV_DATA',
		name: 'Navigation Data',
		type: 'product',
		subtitle: 'Encrypted Navigation Data',
		description:
			'Encoded navigation data. This highly portable data unit contains all relevant cartographical information for a planetary region.\n\nMay be traded with a <TRADEABLE>Cartographer<> aboard a Space Station in exchange for <STELLAR>usable star charts<>.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.NAVDATA.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'NAV_DATA_DROP',
		name: 'Drop Pod Coordinate Data',
		type: 'product',
		subtitle: 'Encrypted Navigation Data',
		description:
			'Encoded navigation data for input into a <TECHNOLOGY>Signal Booster<>.\n\nWhen properly decrypted, will reveal the location of a <TECHNOLOGY>Drop Pod<> containing <SPECIAL>Exosuit Upgrades<>.',
		base_value: 85000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'PRODUCT.EXONAVDATA.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'LOG_KEY',
		name: 'Log Encryption Key',
		type: 'product',
		subtitle: 'Incomplete Data Sequence',
		description:
			"A fragment of the encryption override sequence for a <TECHNOLOGY>freighter's emergency log<>.\n\nSeveral parts of the sequence may be required to gain full access to recorded data.",
		base_value: 1500,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#27ff2733',
		icon: 'PRODUCT.EXONAVDATA.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ACCESS1',
		name: 'AtlasPass v1',
		type: 'product',
		subtitle: 'Access Card',
		description:
			'Security and permissions pass granted to specific travellers by many primary galactic species.\n\nProvides access to low level restricted areas and outpost systems.',
		base_value: 825,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.ATLASPASS.png',
		ingredients: [
			{
				id: 'YELLOW2',
				amount: 200,
			},
			{
				id: 'MICROCHIP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'ACCESS2',
		name: 'AtlasPass v2',
		type: 'product',
		subtitle: 'Access Card',
		description:
			'Security and permissions pass granted to specific travellers by many primary galactic species.\n \nProvides access to mid-tier restricted areas and outpost systems.',
		base_value: 1856,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.ATLASPASS.png',
		ingredients: [
			{
				id: 'RED2',
				amount: 200,
			},
			{
				id: 'MICROCHIP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'ACCESS3',
		name: 'AtlasPass v3',
		type: 'product',
		subtitle: 'Access Card',
		description:
			'Security and permissions pass granted to specific travellers by many primary galactic species.\n \nProvides access to high level restricted areas and outpost systems.',
		base_value: 2613,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.ATLASPASS.png',
		ingredients: [
			{
				id: 'GREEN2',
				amount: 200,
			},
			{
				id: 'MICROCHIP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'POLICE_TOKEN',
		name: 'Defence Chit',
		type: 'product',
		subtitle: 'System Authority Payment Substitute',
		description:
			'A token, entitling the bearer to support from the system authorities in dealing with pirate attacks.',
		base_value: 10000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'POLICETOKEN.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MIND_ARC',
		name: 'Mind Arc',
		type: 'product',
		subtitle: 'Advanced Crafted Product',
		description:
			'A strange piece of technology, a gift from beyond the stars. It shimmers in a way that suggests it is not fully in this world.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'MINDARC.png',
		ingredients: [
			{
				id: 'SOUL_ENGINE',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 3,
			},
			{
				id: 'FARMPROD3',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'SOUL_ENGINE',
		name: 'Soul Engine',
		type: 'product',
		subtitle: 'Advanced Crafted Product',
		description:
			'A powerful organic computing unit.\n\nA glitching beat drives this miracle circuit, performing cycle after cycle in an endless, furious loop of calculation.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'SOULENGINE.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 3,
			},
			{
				id: 'CLAMPEARL',
				amount: 1,
			},
			{
				id: 'RED2',
				amount: 120,
			},
		],
		recipes: [],
	},
	{
		id: 'BP_SALVAGE',
		name: 'Salvaged Data',
		type: 'product',
		subtitle: 'Salvaged Technology',
		description:
			'The salvageable heart of some ancient technology. Unreadable in its current form.\n\nThese databanks can be spent at a <TECHNOLOGY>Construction Research Unit<> and used to research new <STELLAR>Construction Blueprints<>.',
		base_value: 50000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.SALVAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FACT_TOKEN',
		name: 'Factory Override Unit',
		type: 'product',
		subtitle: 'Advanced Research Module',
		description:
			'A portable data unit, compatible with most <STELLAR>planetary fabricator facilities<>.\n\nOnce access has been gained to a central control terminal, the Override Unit can divert the facilities resources towards researching new product recipes.',
		base_value: 50000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.RESEARCHTOKEN.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FRIG_TOKEN',
		name: 'Salvaged Frigate Module',
		type: 'product',
		subtitle: 'Capital Ship Wiring Platform',
		description:
			'A technology module harvested from the remains of a large interstellar starship. May be collected from <STELLAR>freighter crashsites<> or salvaged during <STELLAR>frigate expeditions<>.\n\nUseless in its current form, a <TECHNOLOGY>Research Station<> aboard your freighter may be able to convert it into useable technology.',
		base_value: 95000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.RESEARCHTOKEN.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FRIGATE_FUEL_1',
		name: 'Frigate Fuel (50 Tonnes)',
		type: 'product',
		subtitle: 'Stabilised Di-hydrogen Fuel',
		description:
			'A small barrel of frigate fuel.\n\nThis viscous gel is highly toxic to the touch. A refined fuel, it powers the interstellar engines of large trading ships.',
		base_value: 20000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.FRIGFUEL50.png',
		ingredients: [
			{
				id: 'LAUNCHSUB',
				amount: 50,
			},
			{
				id: 'ROCKETSUB',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIGATE_FUEL_2',
		name: 'Frigate Fuel (100 Tonnes)',
		type: 'product',
		subtitle: 'Stabilised Di-hydrogen Fuel',
		description:
			'A large barrel of frigate fuel.\n\nThis viscous gel is highly toxic to the touch. A refined fuel, it powers the interstellar engines of large trading ships.',
		base_value: 40000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.FRIGFUEL100.png',
		ingredients: [
			{
				id: 'LAUNCHSUB',
				amount: 100,
			},
			{
				id: 'ROCKETSUB',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIGATE_FUEL_3',
		name: 'Frigate Fuel (200 Tonnes)',
		type: 'product',
		subtitle: 'Stabilised Di-hydrogen Fuel',
		description:
			'A huge barrel of frigate fuel.\n\nThis viscous gel is highly toxic to the touch. A refined fuel, it powers the interstellar engines of large trading ships.',
		base_value: 80000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'PRODUCT.FRIGFUEL200.png',
		ingredients: [
			{
				id: 'LAUNCHSUB',
				amount: 200,
			},
			{
				id: 'ROCKETSUB',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIG_BOOST_TRA',
		name: 'Mind Control Device',
		type: 'product',
		subtitle: 'Consumable Frigate Upgrade',
		description:
			"A <COMMODITY>temporary frigate upgrade<> that lasts for one expedition.\n\nThe mind control device plugs into the ship's trading and communications systems, allowing the Fleet Commander to gain the upper hand in any negotiation.",
		base_value: 75000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.FRIGBOOST.TRADE.png',
		ingredients: [
			{
				id: 'CATA_CRAFT',
				amount: 1,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIG_BOOST_EXP',
		name: 'Holographic Analyser',
		type: 'product',
		subtitle: 'Consumable Frigate Upgrade',
		description:
			'A <COMMODITY>temporary frigate upgrade<> that lasts for one expedition.\n\nThis powerful analytic computer overclocks the existing fleet systems, allowing for faster-than-light calculations. Heat is a problem, and the chips do not last long.',
		base_value: 75000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.FRIGBOOST.EXPLORE.png',
		ingredients: [
			{
				id: 'OXY_CRAFT',
				amount: 1,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIG_BOOST_MIN',
		name: 'Mineral Compressor',
		type: 'product',
		subtitle: 'Consumable Frigate Upgrade',
		description:
			'A <COMMODITY>temporary frigate upgrade<> that lasts for one expedition.\n\nThe mineral compressor allows fleet mining crews to liquidise the substances they extract, for both faster processing and easier transportation.',
		base_value: 75000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.FRIGBOOST.MINING.png',
		ingredients: [
			{
				id: 'CAVE_CRAFT',
				amount: 1,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIG_BOOST_COM',
		name: 'Explosive Drones',
		type: 'product',
		subtitle: 'Consumable Frigate Upgrade',
		description:
			'A <COMMODITY>temporary frigate upgrade<> that lasts for one expedition.\n\nThis pack of autonomous explosives have been programmed to launch from the fleet and pilot themselves directly towards hostile vessels. Extremely dangerous.',
		base_value: 75000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.FRIGBOOST.COMBAT.png',
		ingredients: [
			{
				id: 'WALKER_PROD',
				amount: 1,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'FRIG_BOOST_SPD',
		name: 'Fuel Oxidiser',
		type: 'product',
		subtitle: 'Consumable Frigate Upgrade',
		description:
			'A <COMMODITY>temporary frigate upgrade<> that lasts for one expedition.\n\nThis powerful fuel upgrade overloads frigate engines, allowing for faster-than-usual travel.',
		base_value: 75000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.FRIGBOOST.SPEED.png',
		ingredients: [
			{
				id: 'QUAD_PROD',
				amount: 2,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'TRA_CURIO1',
		name: 'Gek Relic',
		type: 'product',
		subtitle: 'Medium value curiosity',
		description:
			'A metal statuette of a creature with a coin placed in its beak.\n \nPopular with many traders who see it as an emblem of fair commerce and peace.',
		base_value: 23375,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.GEKSTATUE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_CURIO2',
		name: 'GekNip',
		type: 'product',
		subtitle: 'Trade commodity',
		description:
			'Edible product much beloved by the Gek.\n \nAllows beaked traders to release delightfully scented packets of gas for a prolonged period of time.\n \nGekNip gas packets are considered an art form, and the truest representation of the Gek soul.',
		base_value: 20625,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.GEKNIP.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'NIPNIPBUDS',
		name: 'NipNip Buds',
		type: 'product',
		subtitle: 'Medicinal Substance',
		description:
			'A pungent bud harvested from the NipNip plant, often used to produce Gek Nip.',
		base_value: 17776,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.NIPBUD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WAR_CURIO1',
		name: "Vy'keen Effigy",
		type: 'product',
		subtitle: 'Medium value curiosity',
		description:
			"A small wooden icon carved into the shape of a Sentinel drone.\n \nUsed by warriors to enter a temporary trance-like state that eliminates their kind's need for sleep.",
		base_value: 24750,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.EFFIGY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WAR_CURIO2',
		name: "Vy'keen Dagger",
		type: 'product',
		subtitle: 'Trade commodity',
		description: "Largely ceremonial weapon. A vital part of Vy'keen tradition and culture.",
		base_value: 11688,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.VYKEENDAGGER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EXP_CURIO1',
		name: 'Korvax Casing',
		type: 'product',
		subtitle: 'High value curiosity',
		description:
			'The metallic shell of a disconnected electronic lifeform that was too distant from its kind to be refreshed with a new entity.\n \nHighly prized by all species, not least its own.',
		base_value: 22000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.KORVAXCASING.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EXP_CURIO2',
		name: 'Korvax Convergence Cube',
		type: 'product',
		subtitle: 'Trade commodity',
		description:
			'Device used by the Korvax for the storage of historical and cultural information.',
		base_value: 13063,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.KORVAXCUBE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FARMPROD1',
		name: 'Acid',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'Dilute acid for high current generation in diverse power cells.\n\nCrafted from <SPECIAL>Mordite<> and <TRADEABLE>Fungal Mould<>.',
		base_value: 188000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.1.png',
		ingredients: [
			{
				id: 'CREATURE1',
				amount: 25,
			},
			{
				id: 'PLANT_TOXIC',
				amount: 600,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD2',
		name: 'Lubricant',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'A synthetic lubricant that reduces wear and prolongs the lifespan of technologies with moving parts.\n\nCrafted from <FUEL>Faecium<> and <TRADEABLE>Gamma Root<>.',
		base_value: 110000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.2.png',
		ingredients: [
			{
				id: 'PLANT_POOP',
				amount: 50,
			},
			{
				id: 'PLANT_RADIO',
				amount: 400,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD3',
		name: 'Glass',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'Shatter-proof, scratch-resistant glass with a self-cleaning, UV-cured coating, for general construction use.\n\nRefined from <STELLAR>Silicate<> powder. Extract silicate from the earth with a <TECHNOLOGY>Terrain Manipulator<>.\n\nCan be crafted from <TECHNOLOGY>Frost Crystals<> extracted from plants on <TECHNOLOGY>frozen<> worlds.',
		base_value: 200,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.3.png',
		ingredients: [
			{
				id: 'PLANT_SNOW',
				amount: 40,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_9',
				name: 'Requested Operation: Polish Crystals',
				result: {
					id: 'FARMPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_SNOW',
						amount: 40,
					},
				],
			},
			{
				id: 'REFINERECIPE_76',
				name: 'Requested Operation: Salt Crystal Polishing',
				result: {
					id: 'FARMPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATERPLANT',
						amount: 50,
					},
					{
						id: 'WATER1',
						amount: 50,
					},
				],
			},
			{
				id: 'REFINERECIPE_323',
				name: 'Requested Operation: Silicate Forging',
				result: {
					id: 'FARMPROD3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'SAND1',
						amount: 40,
					},
				],
			},
		],
	},
	{
		id: 'FARMPROD4',
		name: 'Heat Capacitor',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'A thermal regulator produced from refined organic material. It is unique it its ability to produce, dissipate and distribute heat as required.\n\nCrafted from <SPECIAL>Solanium<> and <TECHNOLOGY>Frost Crystals<>.',
		base_value: 180000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.4.png',
		ingredients: [
			{
				id: 'PLANT_SNOW',
				amount: 100,
			},
			{
				id: 'PLANT_HOT',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD5',
		name: 'Poly Fibre',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'A connective fibre for electronics, made from an advanced synthetic polymer and capable of serving as a conduit for power and data.\n\nCrafted from <TRADEABLE>Cactus Flesh<> and <TRADEABLE>Star Bulbs<>.',
		base_value: 130000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.5.png',
		ingredients: [
			{
				id: 'PLANT_DUST',
				amount: 100,
			},
			{
				id: 'PLANT_LUSH',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD6',
		name: 'Unstable Gel',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'A highly reactive gel, this substance is both energy-rich and dangerous to touch.\n\nCrafted from <TRADEABLE>Cactus Flesh<>.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.6.png',
		ingredients: [
			{
				id: 'PLANT_DUST',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD7',
		name: 'Liquid Explosive',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'A general purpose high explosive, offered in liquid form for convenience of transport and deployment. Do not drink.\n\nCrafted from <TECHNOLOGY>Acid<> and <TECHNOLOGY>Unstable Gel<>.',
		base_value: 800500,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.7.png',
		ingredients: [
			{
				id: 'FARMPROD1',
				amount: 1,
			},
			{
				id: 'FARMPROD6',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD8',
		name: 'Living Glass',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'An advanced building material, this glass has been imbued with organic compounds that allow it to react to the environment. Microbes within the glass filter harmful light of all wavelengths and balance the atmosphere as required.\n\nCrafted from <TECHNOLOGY>Lubricant<> and <TECHNOLOGY>Glass<>.',
		base_value: 566000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.8.png',
		ingredients: [
			{
				id: 'FARMPROD2',
				amount: 1,
			},
			{
				id: 'FARMPROD3',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'FARMPROD9',
		name: 'Circuit Board',
		type: 'product',
		subtitle: 'Advanced Agricultural Product',
		description:
			'Stackable, semi-flexible circuit board made from a highly durable synthetic polymer.\n\nCrafted from <COMMODITY>Heat Capacitors<> and <TECHNOLOGY>Poly Fibre<>.',
		base_value: 916250,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'FARMPROD.9.png',
		ingredients: [
			{
				id: 'FARMPROD4',
				amount: 1,
			},
			{
				id: 'FARMPROD5',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'REACTION1',
		name: 'Thermic Condensate',
		type: 'product',
		subtitle: 'Enhanced Gas Product',
		description:
			'A refined product, holding the energy potential of heated atmospheric gas in a stable state until required.\n\nCrafted from <TRADEABLE>Sulphurine<> and <FUEL>Condensed Carbon<>.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'REACTION.1.png',
		ingredients: [
			{
				id: 'GAS1',
				amount: 250,
			},
			{
				id: 'FUEL2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_311',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 100,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
					{
						id: 'WATER1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_314',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 100,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'WATER1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_317',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 100,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
					{
						id: 'WATER2',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_320',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 100,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'WATER2',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'REACTION2',
		name: 'Enriched Carbon',
		type: 'product',
		subtitle: 'Enhanced Gas Product',
		description:
			'A refined product, taking ordinary carbon and boosting it with radioactive energy.\n\nCrafted from <TRADEABLE>Radon<> and <FUEL>Condensed Carbon<>.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'REACTION.2.png',
		ingredients: [
			{
				id: 'GAS2',
				amount: 250,
			},
			{
				id: 'FUEL2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_312',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 100,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
					{
						id: 'WATER1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_315',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 100,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'WATER1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_318',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 100,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
					{
						id: 'WATER2',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_321',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 100,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'WATER2',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'REACTION3',
		name: 'Nitrogen Salt',
		type: 'product',
		subtitle: 'Enhanced Gas Product',
		description:
			'A refined product, this is a powerful organic fertiliser in an easily distributed form.\n\nCrafted from <TRADEABLE>Nitrogen<> and <FUEL>Condensed Carbon<>.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'REACTION.3.png',
		ingredients: [
			{
				id: 'GAS3',
				amount: 250,
			},
			{
				id: 'FUEL2',
				amount: 50,
			},
		],
		recipes: [
			{
				id: 'REFINERECIPE_313',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 100,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
					{
						id: 'WATER1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_316',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 100,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'WATER1',
						amount: 10,
					},
				],
			},
			{
				id: 'REFINERECIPE_319',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 100,
					},
					{
						id: 'FUEL1',
						amount: 20,
					},
					{
						id: 'WATER2',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_322',
				name: 'Requested Operation: High-Speed Sublimation',
				result: {
					id: 'REACTION3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 100,
					},
					{
						id: 'FUEL2',
						amount: 10,
					},
					{
						id: 'WATER2',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'COMPOUND1',
		name: 'Organic Catalyst',
		type: 'product',
		subtitle: 'Manufactured Gas Product',
		description:
			'A catalytic material used in the creation of many organic fertilisers.\n\nCrafted from <FUEL>Thermic Condensate<> and <FUEL>Enriched Carbon<>.',
		base_value: 320000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'COMPOUND.1.png',
		ingredients: [
			{
				id: 'REACTION1',
				amount: 1,
			},
			{
				id: 'REACTION2',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'COMPOUND2',
		name: 'Semiconductor',
		type: 'product',
		subtitle: 'Manufactured Gas Product',
		description:
			'An advanced material useful in many electronic devices, with its own in-built temperature regulator.\n\nCrafted from <FUEL>Thermic Condensate<> and <TECHNOLOGY>Nitrogen Salt<>.',
		base_value: 320000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'COMPOUND.2.png',
		ingredients: [
			{
				id: 'REACTION1',
				amount: 1,
			},
			{
				id: 'REACTION3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'COMPOUND3',
		name: 'Hot Ice',
		type: 'product',
		subtitle: 'Manufactured Gas Product',
		description:
			'A paradoxical material, made less mysterious by its relative ease of manufacture.\n\nCrafted from <FUEL>Enriched Carbon<> and <TECHNOLOGY>Nitrogen Salt<>.',
		base_value: 320000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'COMPOUND.3.png',
		ingredients: [
			{
				id: 'REACTION2',
				amount: 1,
			},
			{
				id: 'REACTION3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'COMPOUND4',
		name: 'Fusion Accelerant',
		type: 'product',
		subtitle: 'Manufactured Gas Product',
		description:
			'An advanced fuel source, made from a perfect blend of high potential energy organic materials.\n\nCrafted from <FUEL>Organic Catalyst<> and <TECHNOLOGY>Nitrogen Salt<>.',
		base_value: 1500000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.FUSIONACCELERANT.png',
		ingredients: [
			{
				id: 'COMPOUND1',
				amount: 1,
			},
			{
				id: 'REACTION3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'COMPOUND5',
		name: 'Superconductor',
		type: 'product',
		subtitle: 'Manufactured Gas Product',
		description:
			'An advanced conductive material, the superconductor further enriches the field-warping power of the Semiconductor.\n\nCrafted from <FUEL>Enriched Carbon<> and <TECHNOLOGY>Semiconductors<>.',
		base_value: 1500000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'COMPOUND.5.png',
		ingredients: [
			{
				id: 'COMPOUND2',
				amount: 1,
			},
			{
				id: 'REACTION2',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'COMPOUND6',
		name: 'Cryo-Pump',
		type: 'product',
		subtitle: 'Manufactured Gas Product',
		description:
			'An advanced, self-regulating hybrid material, the Cryo-Pump distributes heat across itself with near perfect efficiency, making it vital in the creation of thermal regulators.\n\nCrafted from <TECHNOLOGY>Hot Ice<> and <FUEL>Thermic Condensate<>',
		base_value: 1500000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'COMPOUND.6.png',
		ingredients: [
			{
				id: 'COMPOUND3',
				amount: 1,
			},
			{
				id: 'REACTION1',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MEGAPROD1',
		name: 'Portable Reactor',
		type: 'product',
		subtitle: 'Advanced Crafted Product',
		description:
			'A miniature self-controlled nuclear reactor. Generates sub-stellar levels of energy in a hassle-free, widely compatible fuel module.\n\nCrafted from <TECHNOLOGY>Liquid Explosives<> and <FUEL>Fusion Accelerant<>.',
		base_value: 4200000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'MEGAPROD.1.png',
		ingredients: [
			{
				id: 'FARMPROD7',
				amount: 1,
			},
			{
				id: 'COMPOUND4',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MEGAPROD2',
		name: 'Quantum Processor',
		type: 'product',
		subtitle: 'Advanced Crafted Product',
		description:
			'A highly advanced computational device, essential for the complex calculations involved in warp travel.\n\nCrafted from <TECHNOLOGY>Circuit Boards<> and <TECHNOLOGY>Superconductors<>.',
		base_value: 4400000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'MEGAPROD.2.png',
		ingredients: [
			{
				id: 'FARMPROD9',
				amount: 1,
			},
			{
				id: 'COMPOUND5',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MEGAPROD3',
		name: 'Cryogenic Chamber',
		type: 'product',
		subtitle: 'Advanced Crafted Product',
		description:
			'A low temperature chamber, designed to prevent the natural decay of organic matter.\n\nCrafted from <TECHNOLOGY>Living Glass<> and a <TECHNOLOGY>Cryo-Pump<>.',
		base_value: 3800000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.CRYOCHAMBER.png',
		ingredients: [
			{
				id: 'FARMPROD8',
				amount: 1,
			},
			{
				id: 'COMPOUND6',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'ULTRAPROD1',
		name: 'Fusion Ignitor',
		type: 'product',
		subtitle: 'Highly Refined Technology',
		description:
			'A highly advanced piece of technology for use in the next generation of power plants. Producing a fusion core requires both intricate scientific skills and complex industrial processes.\n\nCrafted from <FUEL>Portable Reactor<>, <TECHNOLOGY>Quantum Processors<> and <SPECIAL>Geodesite<>.',
		base_value: 15600000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'ULTRAPROD.1.png',
		ingredients: [
			{
				id: 'MEGAPROD1',
				amount: 1,
			},
			{
				id: 'MEGAPROD2',
				amount: 1,
			},
			{
				id: 'ALLOY7',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'ULTRAPROD2',
		name: 'Stasis Device',
		type: 'product',
		subtitle: 'Highly Refined Technology',
		description:
			'A device specifically crafted to keep lifeforms alive for thousands of years longer than their natural lifespan. Such a device requires great skill to manufacture, as not only is it technically complex, but the consequences for a user in the event of malfunction would be disastrous.\n\nCrafted from <TECHNOLOGY>Quantum Processors<>, <TECHNOLOGY>Cryogenic Chambers<>, and <SPECIAL>Iridesite<>.',
		base_value: 15600000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'ULTRAPROD.2.png',
		ingredients: [
			{
				id: 'MEGAPROD2',
				amount: 1,
			},
			{
				id: 'MEGAPROD3',
				amount: 1,
			},
			{
				id: 'ALLOY8',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'TRA_ALLOY1',
		name: 'Nanotube Crate',
		type: 'product',
		subtitle: 'Advanced Construction Materials',
		description:
			'A packed crate of carbon nanotubes.\n\nThese tiny but incredibly strong tubes are required in the construction of tiny but incredibly strong <SPECIAL>scientific components<>.',
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_alloy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ALLOY1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ALLOY2',
		name: 'Self-Repairing Heridium',
		type: 'product',
		subtitle: 'Advanced Construction Materials',
		description:
			'A hopper of self-repairing Heridium. It looks fresh.\n\nUsed in the creation of <SPECIAL>scientific components<>. Self-repairing heridium is particularly useful for deployment in remote facilities, where maintenance opportunities may be limited or deadly.',
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_alloy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ALLOY2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ALLOY3',
		name: 'Optical Solvent',
		type: 'product',
		subtitle: 'Advanced Construction Materials',
		description:
			'Several bottles of optical solvent.\n\nThe liquid in these bottles is used to wash away surplus light that may otherwise cause decay in <SPECIAL>scientific components<>.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_alloy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ALLOY3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ALLOY4',
		name: 'Five Dimensional Torus',
		type: 'product',
		subtitle: 'Advanced Construction Materials',
		description:
			'A specially manufactured container of 5D tori.\n\nHighly specific materials are required to construct shapes in extra dimensions. These tori are used to contain the strong fields generated in the manufacture of <SPECIAL>scientific components<>.',
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_alloy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ALLOY4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ALLOY5',
		name: 'Superconducting Fibre',
		type: 'product',
		subtitle: 'Advanced Construction Materials',
		description:
			'A densely layered package of superconducting fibres.\n\nPowerful, flexible, and water-resistant; the controlled magnetic weave of these fibres is vital in the creation of many <SPECIAL>scientific components<>.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_alloy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ALLOY5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMMODITY1',
		name: null,
		type: 'product',
		subtitle: 'Trade Commodity',
		description:
			'A crate packed with hard drives, each of which contain vast amounts of decrypted user data.\n\nIndividually of low value, taken together these repositories can be processed and scanned for valuable data. This processing occurs in systems with <SPECIAL>advanced material<> economies.',
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_commodity',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMMODITY1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMMODITY2',
		name: null,
		type: 'product',
		subtitle: 'Trade Commodity',
		description:
			'Several spools of star silk.\n\nStar silk is woven on enormous solar looms in orbit around trading planets. Cosmic ray impact triggers the pattern of the weave, which can then be used in <SPECIAL>advanced material<> processing.',
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_commodity',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMMODITY2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMMODITY3',
		name: null,
		type: 'product',
		subtitle: 'Trade Commodity',
		description:
			'Several canisters of comet droplets.\n\nAn elaborate trading name for chunks of meteorite, these rocks are nonetheless extremely valuable to the <SPECIAL>advanced material<> economies that can process them.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_commodity',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMMODITY3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMMODITY4',
		name: null,
		type: 'product',
		subtitle: 'Trade Commodity',
		description:
			'A packed crate of ion spheres.\n\nThese delicate glass spheres house a small-scale replica of the upper atmosphere. Sparkly and hypnotic to look at, these baubles are also of importance in the manufacture of <SPECIAL>advanced material<> alloys.',
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_commodity',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMMODITY4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMMODITY5',
		name: null,
		type: 'product',
		subtitle: 'Trade Commodity',
		description:
			'A bundle of precisely calibrated teleport coordinators.\n\nThese pin-prick sized circuits are vital to the delicate process of inserting reinforcing material into <SPECIAL>advanced alloys<>. They can also aid long-distance sales efforts.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_commodity',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMMODITY5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMPONENT1',
		name: null,
		type: 'product',
		subtitle: 'Industrial Components',
		description:
			"Several huge cogs.\n\nSturdy, well-made metal gears. While not advanced technology themselves, they're a vital component in countless pieces of <SPECIAL>high-tech<> machinery all over the galaxy.",
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_component',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMPONENT1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMPONENT2',
		name: null,
		type: 'product',
		subtitle: 'Industrial Components',
		description:
			'Wrapped and greased pistons, ready for shipping.\n\n<SPECIAL>High-tech<> components frequently require rapidly moving parts, or high-endurance motors. Without specially coated pistons, the failure rate of such parts would be significantly higher.',
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_component',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMPONENT2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMPONENT3',
		name: null,
		type: 'product',
		subtitle: 'Industrial Components',
		description:
			'A crate of mesh decouplers.\n\nThe creation of <SPECIAL>high-tech<> components often involves accidental mesh-coupling. These decouplers are particularly powerful, being able to deploy six prongs simultaneously.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_component',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMPONENT3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMPONENT4',
		name: null,
		type: 'product',
		subtitle: 'Industrial Components',
		description:
			'Packed and separated data containers for holographic crankshafts.\n\nReal crankshafts are frequently too large, noisy or hard-to-maintain for use in delicate machines. When faced with such a situation, <SPECIAL>high-tech<> manufacturers turn to these holographic substitutes.',
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_component',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMPONENT4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_COMPONENT5',
		name: null,
		type: 'product',
		subtitle: 'Industrial Components',
		description:
			'A large crate of vector compressors.\n\nThe creation of interstellar drives often requires dimensions to be condensed and then re-rendered. Such <SPECIAL>high-tech<> component manufacture would not be possible without industrial-grade compressors such as these.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_component',
		color: '#ccffcccc',
		icon: 'TRADEPROD.COMPONENT5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ENERGY1',
		name: 'Spark Canister',
		type: 'product',
		subtitle: 'Tradable Energy Source',
		description:
			'A crate packed with spark canisters.\n\nMany industrial and <SPECIAL>mining<> processes have considerable power demands. A counterpart to the slow release of a battery, spark canisters are able to meet these demands instantaneously.',
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_energy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ENERGY1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ENERGY2',
		name: 'Industrial-Grade Battery',
		type: 'product',
		subtitle: 'Tradable Energy Source',
		description:
			'A packet of well-isolated industrial batteries.\n\nHeavy-duty batteries are required to power deep level <SPECIAL>mining<>operations. These highly durable sources can last for weeks, even in the extremes of heat and pressure found kilometres underground.',
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_energy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ENERGY2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ENERGY3',
		name: 'Ohmic Gel',
		type: 'product',
		subtitle: 'Tradable Energy Source',
		description:
			'Several packets of ohmic gel.\n\nPower-hungry <SPECIAL>mining<> operations are fraught with danger. Ohmic gel helps keep rapidly moving parts both insulated and lubricated.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_energy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ENERGY3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ENERGY4',
		name: 'Experimental Power Fluid',
		type: 'product',
		subtitle: 'Tradable Energy Source',
		description:
			'Corrosion-resistant barrels of an experimental power fluid.\n\nOne barrel of this highly volatile concoction is enough to power a space station for weeks on end. Particularly valued by <SPECIAL>mining<> economies.',
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_energy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ENERGY4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_ENERGY5',
		name: 'Fusion Core',
		type: 'product',
		subtitle: 'Tradable Energy Source',
		description:
			'A slightly glowing bundle of fusion cores.\n\nPower source, engine, high-capacity heater. A fusion core is the ultimate in deep-space power generation. Highly valued by <SPECIAL>mining<> economies looking to make their asteroid colonies more self-sufficient.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_energy',
		color: '#ccffcccc',
		icon: 'TRADEPROD.ENERGY5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_EXOTICS1',
		name: 'De-Scented Pheromone Bottle',
		type: 'product',
		subtitle: 'Scientific Components',
		description:
			'A loose collection of recycled pheromone bottles.\n\nVast quantities of pheromones are produced and distributed every day. This has spawned a lucrative <SPECIAL>trading<> opportunity for those willing to deal with the waste products. These glass jars have been thoroughly scrubbed and should pose no threat to the carrier.',
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_exotic',
		color: '#ccffcccc',
		icon: 'TRADEPROD.EXOTICS1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_EXOTICS2',
		name: 'Neutron Microscope',
		type: 'product',
		subtitle: 'Scientific Components',
		description:
			'A parcel of neutron microscopes.\n\nScientific economies produce and consume large numbers of microscopes. However, some have slight defects that render them unsuitable for precision work. These are still a <SPECIAL>trading<> opportunity, in that they can be sold to those unable to tell the difference.',
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_exotic',
		color: '#ccffcccc',
		icon: 'TRADEPROD.EXOTICS2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_EXOTICS3',
		name: 'Instability Injector',
		type: 'product',
		subtitle: 'Scientific Components',
		description:
			'A jumbled box of instability injectors.\n\nGrand experiments often require a large number of variables to be changed in a very short period of time. An instability injector provides such a service. They can also be used to create chaos in market systems; such unethical behaviour represents an excellent <SPECIAL>trading<> opportunity.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_exotic',
		color: '#ccffcccc',
		icon: 'TRADEPROD.EXOTICS3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_EXOTICS4',
		name: 'Organic Piping',
		type: 'product',
		subtitle: 'Scientific Components',
		description:
			'A vat of preserved organic piping. Still warm.\n\nTo avoid difficult ethical problems, many labs grow their test subjects on a component level. The leftovers can be profitable in <SPECIAL>trading<> economies with relaxed medical regulations.',
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_exotic',
		color: '#ccffcccc',
		icon: 'TRADEPROD.EXOTICS4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_EXOTICS5',
		name: 'Neural Duct',
		type: 'product',
		subtitle: 'Scientific Components',
		description:
			'A box of fresh neural ducts.\n\nNeural ducts are temporary inserts designed for a brief boost of concentration and productivity. Useful everywhere, these are highly valued in <SPECIAL>trading<> economies where competition between workers is fierce.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_exotic',
		color: '#ccffcccc',
		icon: 'TRADEPROD.EXOTICS5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_MINERALS1',
		name: 'Dirt',
		type: 'product',
		subtitle: 'Tradable Minerals',
		description:
			'Several tonnes of dirt.\n\nLeftover dirt from mining operations. Residual metals can be extracted by specialists in <SPECIAL>manufacturing<> economies with the time and equipment to sift through it.',
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_mineral',
		color: '#ccffcccc',
		icon: 'TRADEPROD.MINERALS1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_MINERALS2',
		name: 'Unrefined Pyrite Grease',
		type: 'product',
		subtitle: 'Tradable Minerals',
		description:
			"Large jars full of pyrite grease.\n\nA fat solution with a high mineral content. This grease is highly valued by <SPECIAL>manufacturing<> economies, where it's used to keep large machinery oiled and glistening.",
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_mineral',
		color: '#ccffcccc',
		icon: 'TRADEPROD.MINERALS2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_MINERALS3',
		name: 'Bromide Salt',
		type: 'product',
		subtitle: 'Tradable Minerals',
		description:
			'A crate of bromide salt.\n\nThe result of an extensive distillation and evaporation process, the bromide salt vats feed hungry factories in <SPECIAL>manufacturing<> systems.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_mineral',
		color: '#ccffcccc',
		icon: 'TRADEPROD.MINERALS3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_MINERALS4',
		name: 'Polychromatic Zirconium',
		type: 'product',
		subtitle: 'Tradable Minerals',
		description:
			'A sack full of polychromatic zirconium crystals.\n\nThese crystals produce lenses of dazzling colour and near-indestructible hardness. Highly valuable in <SPECIAL>manufacturing<> economies.',
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_mineral',
		color: '#ccffcccc',
		icon: 'TRADEPROD.MINERALS4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_MINERALS5',
		name: 'Re-latticed Arc Crystal',
		type: 'product',
		subtitle: 'Tradable Minerals',
		description:
			'A neatly wrapped parcel of re-latticed arc crystals.\n\nExtremely rare mineral formations, arc crystals are in high demand in <SPECIAL>manufacturing<> economies, where their hardness and conductivity is vital to several industrial processes. They also make alluring (if dangerous) jewellery.',
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_mineral',
		color: '#ccffcccc',
		icon: 'TRADEPROD.MINERALS5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_TECH1',
		name: 'Decommissioned Circuit Board',
		type: 'product',
		subtitle: 'Technology Parts',
		description:
			'A collection of salvaged circuitry.\n\n<SPECIAL>Power generation<> economies go through vast numbers of high-tech components. As such, the demand is present even for highly damaged circuits, to be scavenged for parts or just plugged wholesale into low-quality power cores.',
		base_value: 1000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_tech',
		color: '#ccffcccc',
		icon: 'TRADEPROD.TECH1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_TECH2',
		name: 'Welding Soap',
		type: 'product',
		subtitle: 'Technology Parts',
		description:
			"Several large bars of welding soap.\n\nUsed in <SPECIAL>power generation<> systems to heat-clean metal diodes before they're fused into batteries.",
		base_value: 6000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_tech',
		color: '#ccffcccc',
		icon: 'TRADEPROD.TECH2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_TECH3',
		name: 'Ion Capacitor',
		type: 'product',
		subtitle: 'Technology Parts',
		description:
			'A reinforced crate of ion capacitors.\n\nThese supercapacitors have an incredibly high energy density. In great demand in <SPECIAL>power generation<> economies.',
		base_value: 15000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_tech',
		color: '#ccffcccc',
		icon: 'TRADEPROD.TECH3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_TECH4',
		name: 'Autonomous Positioning Unit',
		type: 'product',
		subtitle: 'Technology Parts',
		description:
			"A container of positioning units and associated wiring.\n\nThese APS units can be used to turn virtually any technology into a self-navigating system. Highly valuable in <SPECIAL>power generation<> economies, where they're used to remove conductive organic hands from the manufacturing process.",
		base_value: 30000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_tech',
		color: '#ccffcccc',
		icon: 'TRADEPROD.TECH4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_TECH5',
		name: 'Quantum Accelerator',
		type: 'product',
		subtitle: 'Technology Parts',
		description:
			"Several large quantum accelerator units.\n \n Capable of propelling matter at unmeasurable speeds, these units are particularly important in <SPECIAL>power generation<> economies, where they're used to compress the energy stored in high-grade batteries.",
		base_value: 50000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_tech',
		color: '#ccffcccc',
		icon: 'TRADEPROD.TECH5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ATLAS_STONE',
		name: 'Atlas Stone',
		type: 'product',
		subtitle: 'Very high value curiosity',
		description:
			'A spherical gem that seems to pulsate with red light from its centre.\n \nAn extremely rare item often associated with ancient monolithic sites.',
		base_value: 68750,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.ATLASSTONE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_1',
		name: 'Captured Nanode',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'Atlas Seed containing zonally-shifted quasi-stellar substrate. Warning: do not allow matrix to commune with this dimensional space.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.1.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_2',
		name: 'Englobed Shade',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'This Atlas Shell holds the remains of a parasitic space-borne lifeform, most likely of extra-dimensional origins.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.2.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_1',
				amount: 1,
			},
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_3',
		name: 'Noospheric Orb',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'An Atlas Seed capable of resonating on humanoid telepathic frequencies; may attempt to subsume any subordinate intellect in close proximity.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.3.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_2',
				amount: 1,
			},
			{
				id: 'CAVE2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_4',
		name: 'Dark Matter',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'An Atlas Seed shell encompassing a void element harvested from the collapse state of the last universe. Toxic if ingested.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.4.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_3',
				amount: 1,
			},
			{
				id: 'LAND3',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_5',
		name: "Dawn's End",
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'Sculpted tau neutrino-boson matrix fixed within an irreplaceable Atlas Seed shell. May be semi-sentient.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.5.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_4',
				amount: 1,
			},
			{
				id: 'STELLAR2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_6',
		name: 'Photic Jade',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'This irreplaceable Atlas Seed is a form of matter-adapted photons coalesced into physical solidity by unknown means.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.6.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_5',
				amount: 1,
			},
			{
				id: 'YELLOW2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_7',
		name: 'State Phasure',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'For unknown reasons, this unique Atlas Seed has been phased out of alignment with this quantum reality. Contents cannot be determined.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.7.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_6',
				amount: 1,
			},
			{
				id: 'RED2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_8',
		name: 'Novae Reclaiment',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'Atlas Seed contains neutronium elements from a catastrophic supernova event that obliterated a sentient civilization in an earlier era.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.8.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_7',
				amount: 1,
			},
			{
				id: 'GREEN2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_9',
		name: 'Modified Quanta',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'This one-of-a-kind Atlas Seed holds an aesthetically pleasing mathematical construct salvaged from the simulation of an alternate reality.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.9.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_8',
				amount: 1,
			},
			{
				id: 'BLUE2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLAS_SEED_10',
		name: 'Heart of the Sun',
		type: 'product',
		subtitle: 'Unique valuable curiosity',
		description:
			'An Atlas Seed containing a time-locked quantum cilia suspended in a photonic shell. No others are known to exist.',
		base_value: 1000,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'ATLASSEED.10.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_9',
				amount: 1,
			},
			{
				id: 'ASTEROID2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'HEXCORE',
		name: 'Hex Core',
		type: 'product',
		subtitle: 'Contained Reality Glitch',
		description:
			'This strange energy orb constantly vibrates, emitting a low-frequency drone. Slight variations in the pattern repeat over and over, almost as if it is attempting to relay a message.',
		base_value: 16,
		category: 'product_category_curiosity',
		trade_category: 'trade_category_none',
		color: '#ccffcccc',
		icon: 'PRODUCT.HEXCORE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SALVAGE_TECH1',
		name: null,
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 10000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'TRADEPROD.TECH1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SALVAGE_TECH2',
		name: null,
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 100000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'TRADEPROD.TECH2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SALVAGE_TECH3',
		name: null,
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 500000,
		category: 'product_category_tradeable',
		trade_category: 'trade_category_none',
		color: '#17ff1746',
		icon: 'TRADEPROD.TECH3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOUNDATION',
		name: 'Foundation',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'The base unit for all construction projects, providing a solid foundation for any structure. Can be anchored to all types of terrain.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FOUNDATION.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 150,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDOR',
		name: 'Straight Corridor',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A standard, straight corridor module for connecting rooms.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CORRIDOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORL',
		name: 'L-Shaped Corridor',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A sturdy, corridor module for connecting rooms, with an L-shaped bend.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CORRIDOR_L.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORT',
		name: 'T-Shaped Corridor',
		type: 'product',
		subtitle: null,
		description:
			'A corridor module with a branching, t-shaped form, for joining multiple rooms.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CORRIDOR_T.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORX',
		name: 'X-Shaped Corridor',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'An x-shaped corridor unit for connecting four rooms in a cruciform arrangement.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CORRIDOR_X.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINROOM',
		name: 'Cylindrical Room',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'The core module for base construction, providing a generous central space on which to expand.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOM_SMALL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 350,
			},
		],
		recipes: [],
	},
	{
		id: 'FOUNDLEG4',
		name: 'Foundation Strut Quad',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A prefabricated set of four legs for elevated construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FOUNDLEG4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'FOUNDLEG',
		name: 'Foundation Strut',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A reinforced non-ferrous metal support leg for elevated construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FOUNDLEG.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDTOWER',
		name: 'Tower Module',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A tall, stackable tower module, with rigid, reinforced sides and additional weatherproofing to counter exposure to the elements.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TOWER.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEROOM',
		name: 'Cuboid Room',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A small, cuboid construction module that can be stacked or linked to form larger structures.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEROOM.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEFOUND',
		name: 'Cuboid Room Foundation Strut',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A sturdy leg for supporting cuboid rooms.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEFOUND1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEFOUND4',
		name: 'Cuboid Room Foundation Strut Quad',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A prefabricated set of four legs for supporting cuboid rooms.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEFOUND4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEFLOOR',
		name: 'Cuboid Room Flooring',
		type: 'product',
		subtitle: 'Construction item',
		description: 'Hard-wearing composite floor panels cut for cuboid rooms.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEROOMFLOOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'GLASSCORRIDOR',
		name: 'Glass Roofed Corridor',
		type: 'product',
		subtitle: 'Construction module',
		description: 'Corridor with reinforced glass roofing.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GLASSCORRIDOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDRAMP',
		name: 'Access Ramp',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A reinforced, non-ferrous ramp to provide access to buildings.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMP.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
			{
				id: 'FUEL1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'BIOROOM',
		name: 'Bio-Dome',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'An attractive domed room which is perfect for cultivating a wide range of botanical matter.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BIODOME.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 25,
			},
			{
				id: 'FARMPROD3',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'CURVEDCUBEROOF',
		name: 'Curved Cuboid Roof',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A curved, glass-fronted roof module that can be stacked or linked to form larger structures.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBECURVEROOF.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEROOMCURVED',
		name: 'Curved Cuboid Wall',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A curved, cuboid wall module that can be stacked or linked to form larger structures.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBECURVEWALL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEGLASS',
		name: 'Glass Cuboid Room',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A cuboid room module which is created almost entirely out of glass. Excellent for observing areas of natural beauty.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEGLASS.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 100,
			},
			{
				id: 'FARMPROD3',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEFRAME',
		name: 'Cuboid Room Frame',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'Lightweight cuboid support structures which can be stacked or linked to form large industrial structures.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEFRAME.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEINNERDOOR',
		name: 'Cuboid Inner Door',
		type: 'product',
		subtitle: 'Construction module',
		description: 'An inner door module used to divide cuboid rooms.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEINNERDOOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEWALL',
		name: 'Cuboid Inner Wall',
		type: 'product',
		subtitle: 'Construction module',
		description: 'An inner wall module used to divide cuboid rooms.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEINNERWALL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEROOF',
		name: 'Cuboid Roof Cap',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A cuboid roof cap used to decorate and reinforce the rooftops of cuboid structures.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEROOFCAP.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBESTAIRS',
		name: 'Interior Stairs',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A set of stairs to improve access inside cuboid structures.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.INTERIORSTAIRS.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
			{
				id: 'FUEL1',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDOOR',
		name: 'Door',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A compression-sealed, standard door suitable for all rooms and corridors.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'DOOR2',
		name: 'Holo-Door',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'An elegant holographic door which allows quick access to any structure while regulating the temperature and toxicity of the interior.',
		base_value: 8,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.HOLODOOR.png',
		ingredients: [
			{
				id: 'ASTEROID2',
				amount: 50,
			},
			{
				id: 'LAND2',
				amount: 40,
			},
			{
				id: 'SAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'VIEWSPHERE',
		name: 'Viewing Sphere',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A self-contained spherical viewing platform which affords the user stunning views of the surrounding environment.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VIEWSPHERE.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 10,
			},
			{
				id: 'FARMPROD3',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINROOMFRAME',
		name: 'Cylindrical Room Frame',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A lightweight, industrial alternative to the standard Cylindrical Room.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.MAINROOMFRAME.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORC',
		name: 'Curved Corridor',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A sturdy, large corridor module for connecting rooms, with a curved bend.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CURVEDCORR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINROOMCUBE',
		name: 'Square Room',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A square alternative to the core module for base construction, providing a generous central space on which to expand.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.MAINCUBE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 350,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINROOMCUBEF',
		name: 'Square Room',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A square alternative to the core module for base construction, providing a generous central space on which to expand.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.MAINCUBE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 200,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_FLAG',
		name: 'Base Computer',
		type: 'product',
		subtitle: 'Site Evaluation Device',
		description:
			"Portable land registration service.\n\nWhen placed, contacts Universal Cartographic Archive to establish ownership of land. Successful registration allows the construction of base modules across any site of the user's choosing.",
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BASECOREFLAG.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLANDINGPAD',
		name: 'Landing Pad',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A stable, reinforced landing pad for starships.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LANDINGPAD.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 10,
			},
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'MICROCHIP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDTERMINAL',
		name: 'Galactic Trade Terminal',
		type: 'product',
		subtitle: 'Trading terminal',
		description:
			'A trading terminal that provides instant local access to the market for resources and commodities.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TERMINAL.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 25,
			},
			{
				id: 'MICROCHIP',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'HEALTHSTATION',
		name: 'Health Station',
		type: 'product',
		subtitle: 'Health recharge module',
		description: 'A wall mounted module that can be used to recharge health.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.HEALTHSTATION.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 1,
			},
			{
				id: 'CAVE2',
				amount: 20,
			},
			{
				id: 'RADIO1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIELDSTATION',
		name: 'Hazard Protection Unit',
		type: 'product',
		subtitle: 'Hazard Protection Charging System',
		description:
			"A wall mounted module that can be used to recharge the user's <COMMODITY>Hazard Protection<> systems.\n\nThe Hazard Protection Unit must be kept charged with a source of <FUEL>fuel<>.",
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SHIELDSTATION.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 1,
			},
			{
				id: 'CAVE2',
				amount: 20,
			},
			{
				id: 'HOT1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSAVE',
		name: 'Save Point',
		type: 'product',
		subtitle: 'Construction module',
		description: 'A buildable save point for managing your progress.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SAVEPOINT.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'JELLY',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDBEACON',
		name: 'Save Beacon',
		type: 'product',
		subtitle: 'Portable waypoint marker',
		description:
			'Once activated, beacons provide a permanent navigational waypoint, facilitating repeat visits to specific locations.\n\nAllows user to record their progress at any time.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BEACON.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'CATALYST2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSIGNAL',
		name: 'Signal Booster',
		type: 'product',
		subtitle: 'Environmental scanner',
		description:
			'A versatile scanner that <TECHNOLOLY>detects nearby buildings<>. Can decrypt <COMMODITY>Navigation Data<> to pinpoint specific locations.\n\nThe Signal Booster can be <VAL_ON>dismantled and redeployed<> for easy transportation.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SIGNAL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 1,
			},
			{
				id: 'NANOTUBES',
				amount: 1,
			},
			{
				id: 'CATALYST1',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDANTIMATTER',
		name: 'Antimatter Reactor',
		type: 'product',
		subtitle: 'Baryogenesis Unit',
		description:
			'An <TECHNOLOGY>autonomous baryogenesis reactor<>, this device can be left to harvest reality paradoxes and convert them into usable <FUEL>antimatter<>. User must monitor fuel levels to ensure continued operation.\n\nThe resulting antimatter is safely contained, ready for use in all standard <FUEL>hyperspace power units<>.',
		base_value: 20,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ANTIMATTER.png',
		ingredients: [
			{
				id: 'STORM_CRYSTAL',
				amount: 5,
			},
			{
				id: 'ANTIMATTER',
				amount: 2,
			},
			{
				id: 'CASING',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'TELEPORTER',
		name: 'Base Teleport Module',
		type: 'product',
		subtitle: 'Long-Distance Matter Transfer Device',
		description:
			'A <TECHNOLOGY>personal teleport device<>, allowing the user to move quickly between their constructed bases, as well as any Space Station Terminuses connected to their network.\n\nUser is urged to verify network integrity before inserting any matter they cannot afford to become separated from.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TELEPORTER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 4,
			},
			{
				id: 'NANOTUBES',
				amount: 2,
			},
			{
				id: 'CATALYST1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BASECAPSULE',
		name: 'Base Salvage Capsule',
		type: 'product',
		subtitle: 'Autonomous Storage Device',
		description:
			'A <COMMODITY>construction recovery device<>.\n\nThis optional piece of base technology stores and preserves matter left over after the destruction of a previous base.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BASECAPSULE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCFRIGTERM',
		name: 'Fleet Command Room',
		type: 'product',
		subtitle: 'Expedition Management Terminal',
		description:
			'Core <TECHNOLOGY>Fleet Management Station<>. This advanced holographic communications station is vital for managing fleet expeditions from the comfort of your capital ship.\n\nUser is advised that multiple stations are required to manage more than one expedition at a time.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCFRIGTERM.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 120,
			},
			{
				id: 'ASTEROID2',
				amount: 40,
			},
			{
				id: 'ROCKETSUB',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BP_ANALYSER',
		name: 'Construction Research Unit',
		type: 'product',
		subtitle: 'Technology Recovery Device',
		description:
			'Portable <TECHNOLOGY>blueprint research device<>.\n\nThis field-deployable research module allows the user to convert old or damage technology modules into advanced construction blueprints.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BLUEPRINTAN.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 20,
			},
			{
				id: 'NANOTUBES',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILD_REFINER1',
		name: 'Portable Refiner',
		type: 'product',
		subtitle: 'Automated Refinery Unit',
		description:
			'A vital piece of planetary equipment. The <TECHNOLOGY>Refiner<> allows gathered substances to be processed into more powerful and more advanced materials.\n\nThe Portable Refiner can be <VAL_ON>dismantled and redeployed<> for easy transportation. Note: the Portable Refiner requires <FUEL>fuel<> to operate.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.REFINER1.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 1,
			},
			{
				id: 'OXYGEN',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILD_REFINER2',
		name: 'Medium Refiner',
		type: 'product',
		subtitle: 'Automated Refinery Unit',
		description:
			'A vital piece of planetary equipment. The <TECHNOLOGY>Refiner<> allows gathered substances to be processed into more powerful and more advanced materials.\n\nThe Medium Refiner allows <COMMODITY>two<> different substances to be combined into one new material, or materials to be processed at better ratios. \n\nThe Medium Refiner must be installed in a <VAL_ON>Habitable Base<>, but does not require additional power sources.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.REFINER2.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 100,
			},
			{
				id: 'JELLY',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILD_REFINER3',
		name: 'Large Refiner',
		type: 'product',
		subtitle: 'Automated Refinery Unit',
		description:
			'A vital piece of planetary equipment. The <TECHNOLOGY>Refiner<> allows gathered substances to be processed into more powerful and more advanced materials.\n\nThe Large Refiner allows <COMMODITY>three<> different substances to be combined into one new material, or materials to be processed at better ratios. \n\nThe Large Refiner must be installed in a <VAL_ON>Habitable Base<>, but does not require additional power sources.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.REFINER3.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 200,
			},
			{
				id: 'CATALYST2',
				amount: 100,
			},
			{
				id: 'MICROCHIP',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'DRESSING_TABLE',
		name: 'Appearance Modifier',
		type: 'product',
		subtitle: 'Customise Personal Visuals',
		description:
			'A buildable module that allows the users to <TECHNOLOGY>adjust their personal appearance<> settings.\n\nThe module applies advanced holographic techniques to recalibrate the light around the user, allowing them to adopt whatever appearance they desire. Visual data must be properly formated before use.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DRESSINGROOM.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'COOKER',
		name: 'Nutrient Processor',
		type: 'product',
		subtitle: 'Portable Sustenence Unit',
		description:
			'A portable <TECHNOLOGY>nutrient extractor<>, able to process and refine gathered ingredients into edible food products.\n\nUser is advised that consumption of generated products is entirely at their own risk.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.COOKER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'CARBON_SEAL',
				amount: 1,
			},
			{
				id: 'CATALYST1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CREATURE_FEED',
		name: 'Automated Feeder',
		type: 'product',
		subtitle: 'Agricultural Robot',
		description:
			'A robotic farming unit, designed to <STELLAR>automatically supply nearby creatures with food<>.\n\nWhen powered, will attract nearby animal life. Keep bait tanks full in order to supply lifeforms with desired food.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CREATUREFEEDER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 4,
			},
			{
				id: 'OXY_CRAFT',
				amount: 1,
			},
			{
				id: 'BAIT_BASIC',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'CREATURE_FARM',
		name: 'Livestock Unit',
		type: 'product',
		subtitle: 'Automatic Harvesting Robot',
		description:
			'A robotic farming unit, designed to <STELLAR>automatically harvest<> substances from creatures. Requires <STELLAR>power<>.\n\nCreatures that are ready to be harvested for milk, eggs or other specialist produce will approach the Livestock Unit and deposit their yields. The creatures is unharmed by the process.\n\nWill harvest produce from creatures fed by hand or via an <TECHNOLOGY>Automated Feeder<>.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CREATUREFARMER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 4,
			},
			{
				id: 'FARMPROD5',
				amount: 2,
			},
			{
				id: 'PLANT_POOP',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSUMMON',
		name: 'Muster Point',
		type: 'product',
		subtitle: 'Ship-summoning beacon',
		description: 'A buildable device that can summon your starship to it from any location.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SHIPSUMMON.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MESSAGEMODULE',
		name: 'Message Module',
		type: 'product',
		subtitle: 'Communications terminal',
		description:
			'A small and accessible information container for leaving messages or viewing left messages and short strings of information.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.MESSAGEMODULE.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 1,
			},
			{
				id: 'NANOTUBES',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MESSAGE',
		name: 'Communications Station',
		type: 'product',
		subtitle: 'Communications terminal',
		description:
			'A terminal for the composition and transmission of messages to other travellers.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.MESSAGE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'GARAGE_S',
		name: 'Nomad Geobay',
		type: 'product',
		subtitle: 'Construction module',
		description: 'An underground secure parking facility for the Nomad light Exocraft.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VEHICLEGARAGES.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'GARAGE_M',
		name: 'Roamer Geobay',
		type: 'product',
		subtitle: 'Construction module',
		description: 'An underground secure parking facility for the Roamer medium Exocraft.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VEHICLEGARAGE.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'GARAGE_L',
		name: 'Colossus Geobay',
		type: 'product',
		subtitle: 'Construction module',
		description: 'An underground secure parking facility for the Colossus large Exocraft.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VEHICLEGARAGEL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'GARAGE_B',
		name: 'Pilgrim Geobay',
		type: 'product',
		subtitle: 'Construction module',
		description: 'An underground secure parking facility for the Pilgrim light Exocraft.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VEHICLEGARAGEB.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'GARAGE_SUB',
		name: 'Nautilon Chamber',
		type: 'product',
		subtitle: 'Submarine Docking Bay',
		description: 'An advanced, fully-airlocked docking station for the Nautilon submarine.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VEHICLEGARAGEH.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'VENTGEM',
				amount: 4,
			},
			{
				id: 'WATER1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'SUMMON_GARAGE',
		name: 'Exocraft Summoning Station',
		type: 'product',
		subtitle: 'Vehicle Translocation Device',
		description:
			'Construction allows the user to summon any owned Exocraft from anywhere else on that planet.\n\nInterfaces with the <STELLAR>Exosuit Quick Command Menu<> to ease of use.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.VEHICLESUMMONER.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCSCIENCETERM',
		name: 'Science Terminal',
		type: 'product',
		subtitle: 'Specialist terminal',
		description:
			'A research station tailored to the needs of Scientists, and equipped for research and development of scientific blueprints.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCSCIENCE.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
			{
				id: 'LAND3',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCWEAPONTERM',
		name: 'Weapons Terminal',
		type: 'product',
		subtitle: 'Specialist terminal',
		description:
			'A research station tailored to the needs of Armourers, and equipped for the development of munitions and explosives as well as selected civilian tech.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCWEAPON.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
			{
				id: 'ROBOT1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCFARMTERM',
		name: 'Agricultural Terminal',
		type: 'product',
		subtitle: 'Specialist terminal',
		description:
			'A research station tailored to the needs of Farmers, and equipped for the analysis and cultivation of farmable crops.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCFARM.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
			{
				id: 'FUEL2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCVEHICLETERM',
		name: 'Exocraft Terminal',
		type: 'product',
		subtitle: 'Specialist terminal',
		description:
			'A research station tailored to the needs of Mechanics, and equipped with bespoke vehicular design software.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCVEHICLE.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
			{
				id: 'LAUNCHSUB',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCBUILDERTERM',
		name: 'Construction Terminal',
		type: 'product',
		subtitle: 'Specialist terminal',
		description:
			'A research station tailored to the needs of Construction Overseers, and equipped with architectural and engineering design software.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCBUILDER.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 40,
			},
			{
				id: 'LAND2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'PLANTER',
		name: 'Hydroponic Tray',
		type: 'product',
		subtitle: 'Farming tech',
		description:
			'A self contained growth system for the indoor cultivation of agricultural crops.\n\nBuild requirement: Must be placed indoors.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PLANTER.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'PLANTERMEGA',
		name: 'Large Hydroponic Tray',
		type: 'product',
		subtitle: 'Farming tech',
		description:
			'A self contained growth system for the indoor cultivation of agricultural crops. Can support up to four plants.\n\nBuild requirement: Must be placed indoors.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PLANTERMEGA.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 60,
			},
			{
				id: 'CASING',
				amount: 4,
			},
			{
				id: 'FUEL1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'TOXICPLANT',
		name: 'Fungal Cluster',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A spherical fungus with internal gills, found only in toxic biomes. Fungal Clusters can be transplanted for cultivation, yielding a bountiful harvest.\n\nSuitable for hydroponic indoor planting. Ensure Toxic climate before planting outdoors.\n\nApproximate growing time: <TECHNOLOGY>4 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.TOXICPLANT.png',
		ingredients: [
			{
				id: 'PLANT_TOXIC',
				amount: 50,
			},
			{
				id: 'TOXIC1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'SNOWPLANT',
		name: 'Frostwort',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A large crystal flower with radiant blue blooms, found only in snowy biomes. Frostwort can be farmed and makes a reliable crop, and its adaptation to harsh conditions results in highly frequent harvests.\n\nSuitable for hydroponic indoor planting. Ensure Frozen climate before planting outdoors.\n\nApproximate growing time: <TECHNOLOGY>1 hour<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SNOWPLANT.png',
		ingredients: [
			{
				id: 'PLANT_SNOW',
				amount: 50,
			},
			{
				id: 'COLD1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'RADIOPLANT',
		name: 'Gamma Weed',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A luminous, leafy flowering plant that thrives in radioactive biomes and can be cultivated to yield a bountiful harvest.\n\nSuitable for hydroponic indoor planting. Ensure Radioactive climate before planting outdoors.\n\nApproximate growing time: <TECHNOLOGY>4 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.RADIOPLANT.png',
		ingredients: [
			{
				id: 'PLANT_RADIO',
				amount: 50,
			},
			{
				id: 'RADIO1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'BARRENPLANT',
		name: 'Echinocactus',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'Native to barren biomes and capable of withstanding long periods of drought, Echinocactus is an edible succulent that responds well to cultivation, yielding a large but occasional harvest.\n\nSuitable for hydroponic indoor planting. Ensure Barren climate before planting outdoors.\n\nApproximate growing time: <TECHNOLOGY>16 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.BARRENPLANT.png',
		ingredients: [
			{
				id: 'PLANT_DUST',
				amount: 50,
			},
			{
				id: 'DUSTY1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'LUSHPLANT',
		name: 'Star Bramble',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A medium-sized, farmable plant that yields an occasional harvest of valuable Star Bulbs.\n\nSuitable for hydroponic indoor planting. Ensure Lush climate before planting outdoors.\n\nApproximate growing time: <TECHNOLOGY>4 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.LUSHPLANT.png',
		ingredients: [
			{
				id: 'PLANT_LUSH',
				amount: 50,
			},
			{
				id: 'LUSH1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'SCORCHEDPLANT',
		name: 'Solar Vine',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			"This 'living rock' is adapted to live in the extreme heat of scorched biomes. However, it can be farmed in most environments and, once established, yields a moderate harvest.\n\nSuitable for hydroponic indoor planting. Ensure Hot climate before planting outdoors.\n\nApproximate growing time: <TECHNOLOGY>16 hours<>",
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SCORCHPLANT.png',
		ingredients: [
			{
				id: 'PLANT_HOT',
				amount: 50,
			},
			{
				id: 'HOT1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CREATUREPLANT',
		name: 'Mordite Root',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'An inedible tuber that produces a small yield of Mordite crystals.\n\nA peaceful alternative to the process of harvesting Mordite from the <TECHNOLOGY>corpses of creatures<>. Mordite Root must be grown in a <TECHNOLOGY>Hydroponics Tray<>.\n\nApproximate growing time: <TECHNOLOGY>8 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.CREATUREPLANT.png',
		ingredients: [
			{
				id: 'CREATURE1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'POOPPLANT',
		name: 'Gutrot Flower',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A foul-smelling, farmable flower that replicates the chemical structure of faecal matter. When planted inside, yields a harvest of Faecium.\n\nA good alternative to collecting Faecium by hand, which requires <TECHNOLOGY>feeding creatures<> and then <TECHNOLOGY>harvesting their droppings<>. Gutrot Flowers must be grown in a <TECHNOLOGY>Hydroponics Tray<>.\n\nApproximate growing time: <TECHNOLOGY>4 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.POOPPLANT.png',
		ingredients: [
			{
				id: 'PLANT_POOP',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'GRAVPLANT',
		name: 'Gravitino Host',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A strange, potentially parasitic plant that yields an occasional harvest of the highly tradable commodity, Gravitino Balls.\n\nSuitable for hydroponic indoor planting. Cannot be planted outdoors.\n\nApproximate growing time: <TECHNOLOGY>2 hours<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.GRAVPLANT.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 25,
			},
			{
				id: 'ASTEROID1',
				amount: 120,
			},
			{
				id: 'LAND3',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'SACVENOMPLANT',
		name: 'Venom Urchin',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'A small, innocuous looking plant whose leaves periodically secrete a small amount of potent Sac Venom, a valuable trading commodity.\n\nSuitable for hydroponic indoor planting. Cannot be planted outdoors.\n\nApproximate growing time: <TECHNOLOGY>3 hours 20 mins<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SACVENOMPLANT.png',
		ingredients: [
			{
				id: 'GREEN2',
				amount: 100,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'PEARLPLANT',
		name: 'Albumen Pearl Orb',
		type: 'product',
		subtitle: 'Orb Plant',
		description:
			'A medium-sized, farmable Crystal Orb that yields an occasional harvest of valuable Albumen Pearls.\n\nSuitable for hydroponic indoor planting. Cannot be planted outdoors.\n\nApproximate growing time: <TECHNOLOGY>80 mins<>',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.PEARLPLANT.png',
		ingredients: [
			{
				id: 'BLUE2',
				amount: 60,
			},
			{
				id: 'LUSH1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'NIPPLANT',
		name: 'NipNip',
		type: 'product',
		subtitle: 'Plantable Seed',
		description:
			'This medicinal herb is known for its pungent buds, which are harvested to produce Gek Nip. NipNip thrives in dank environments, and often grows as a weed.\n\nSuitable for hydroponic planting indoors. Needs a tropical or humid climate before planting outdoors.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.NIPPLANT.png',
		ingredients: [
			{
				id: 'NIPNIPBUDS',
				amount: 1,
			},
			{
				id: 'PLANT_POOP',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CARBONPLANTER',
		name: 'Standing Planter',
		type: 'product',
		subtitle: 'Farming tech',
		description: 'A standing planter system for indoor cultivation of agricultural crops.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.STANDPLANTER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'FUEL2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER0',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.0.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER1',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.1.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER2',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.2.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER3',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.3.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER4',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.4.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER5',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.5.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER6',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.6.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER7',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.7.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER8',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.8.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CONTAINER9',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTAINER.9.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLLIGHTBLUE',
		name: 'Coloured Light',
		type: 'product',
		subtitle: 'Decoration',
		description: "A coloured light for illuminating a user's base.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTBLUE.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLLIGHTPINK',
		name: 'Coloured Light',
		type: 'product',
		subtitle: 'Decoration',
		description: "A coloured light for illuminating a user's base.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTPINK.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLLIGHTYELLOW',
		name: 'Coloured Light',
		type: 'product',
		subtitle: 'Decoration',
		description: "A coloured light for illuminating a user's base.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTYELLOW.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLLIGHTGREEN',
		name: 'Coloured Light',
		type: 'product',
		subtitle: 'Decoration',
		description: "A coloured light for illuminating a user's base.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTGREEN.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLLIGHTRED',
		name: 'Coloured Light',
		type: 'product',
		subtitle: 'Decoration',
		description: "A coloured light for illuminating a user's base.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTRED.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLLIGHTWHITE',
		name: 'Coloured Light',
		type: 'product',
		subtitle: 'Decoration',
		description: "A coloured light for illuminating a user's base.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTWHITE.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'SMALLLIGHT',
		name: 'Light',
		type: 'product',
		subtitle: 'Fitting',
		description:
			'A low-energy consumption light, with an extended lifespan and fully recyclable components.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SMALLLIGHT.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLIGHT',
		name: 'Light',
		type: 'product',
		subtitle: 'Fitting',
		description:
			'A low-energy consumption light, with an extended lifespan and fully recyclable components.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHT001.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLIGHT2',
		name: 'Light',
		type: 'product',
		subtitle: 'Fitting',
		description:
			'A low-energy consumption light, with an extended lifespan and fully recyclable components.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHT002.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLIGHT3',
		name: 'Light',
		type: 'product',
		subtitle: 'Fitting',
		description:
			'A low-energy consumption light, with an extended lifespan and fully recyclable components.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHT003.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'LIGHTBOX',
		name: 'Light Box',
		type: 'product',
		subtitle: 'Light Device',
		description:
			'A special construction module fashioned entirely from light-emitting panels. Can be used to construct walls of light.\n\nThe box may be recoloured before or after placement. Requires <STELLAR>power<> to operate.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTBOX.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'CEILINGLIGHT',
		name: 'Ceiling Light',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CEILINGLIGHT.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'CATALYST1',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDPAVING',
		name: 'Paving',
		type: 'product',
		subtitle: 'Construction item',
		description:
			'Hard-wearing composite paving for the construction of walkways and paved areas.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PAVING.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDPAVING_BIG',
		name: 'Paving',
		type: 'product',
		subtitle: 'Construction item',
		description:
			'Hard-wearing composite paving for the construction of walkways and paved areas.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PAVING.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDPAVINGTALL',
		name: 'Paving',
		type: 'product',
		subtitle: 'Construction item',
		description:
			'Hard-wearing composite paving for the construction of walkways and paved areas.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PAVINGTALL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLADDER',
		name: 'Ladder',
		type: 'product',
		subtitle: 'Construction item',
		description:
			'A strong, lightweight ladder with reinforced anchor points for attaching to walls.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LADDER.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBELADDER',
		name: 'Cuboid Room Ladder',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A strong, lightweight ladder with fittings tailored for cuboid rooms.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBELADDER.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDWINDOW',
		name: 'Window',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A window made from self-cleaning, UV-treated, hermetically sealed glass.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WINDOW.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 25,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEWINDOW',
		name: 'Window',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A window made from self-cleaning, UV-treated, hermetically sealed glass.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEWINDOW.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 25,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLDOOR',
		name: 'Shutter Door',
		type: 'product',
		subtitle: 'Wall Access Route',
		description:
			'An autonomous shutter door, programmed to open in the presence of its constructor.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALLDOOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLFLOORLADDER',
		name: 'Infrastructure Ladder',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'A ladder used in conjunction with Structural Platforms to allow the user to reach great heights with ease.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.INFRALADDER.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEWINDOWOVAL',
		name: 'Window',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A window made from self-cleaning, UV-treated, hermetically sealed glass.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEWINDOWOVAL.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 25,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEWINDOWSMALL',
		name: 'Window',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A window made from self-cleaning, UV-treated, hermetically sealed glass.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEWINDOWSMALL.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 25,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDCHAIR',
		name: 'Chair',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'A comfortable chair designed to accommodate most bipedal races, with only mild numbing of the posterior.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CHAIR001.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 5,
			},
			{
				id: 'TRA_COMMODITY2',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDCHAIR2',
		name: 'Chair',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'A comfortable chair designed to accommodate most bipedal races, with only mild numbing of the posterior.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CHAIR002.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'TRA_COMMODITY2',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDCHAIR3',
		name: 'Chair',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'A comfortable chair designed to accommodate most bipedal races, with only mild numbing of the posterior.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CHAIR003.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'TRA_COMMODITY2',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSOFA',
		name: 'Sofa',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SOFA.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSOFA2L',
		name: 'Corner Sofa',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SOFA2L.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSOFA2',
		name: 'Swept Sofa',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SOFA2.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDTABLE',
		name: 'Table',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'An all-purpose work surface built from non-magnetic, corrosion resistant materials.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TABLE001.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDTABLE2',
		name: 'Table',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'An all-purpose work surface built from non-magnetic, corrosion resistant materials.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TABLE002.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDBED',
		name: 'Bed',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'A generously proportioned single bed, designed to accommodate most bipedal races, with minimum overhang of extremities.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BED.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'LARGEDESK',
		name: 'Large Monitor Station',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.LARGEDESK.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL2',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSIMPLEDESK',
		name: 'Simple Desk',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SIMPLEDESK.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'CURVEDDESK',
		name: 'Curved Desk',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CURVEDDESK.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MONITORDESK',
		name: 'Monitor Station',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.MONITORDESK.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'CAVE1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLIGHTTABLE',
		name: 'Light Table',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LIGHTTABLE.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 10,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDWORKTOP',
		name: 'Worktop',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WORKTOP.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'PLANTPOT',
		name: 'Potted Plant',
		type: 'product',
		subtitle: 'Decoration',
		description: 'A decorative pot for indoor plants.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PLANTPOT.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'PLANTPOT1',
		name: 'Flora Containment',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.PLANTPOT1.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'PLANTPOT2',
		name: 'Flora Containment',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.PLANTPOT2.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'PLANTPOT3',
		name: 'Flora Containment',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.PLANTPOT3.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'CHEST',
		name: 'Storage Container',
		type: 'product',
		subtitle: 'Storage unit',
		description: 'Spacious additional storage for inventory items.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.STORAGE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BLDWALLUNIT',
		name: 'Wall Unit',
		type: 'product',
		subtitle: 'Decoration',
		description: 'A wall-mounted, faux storage unit for decorative purposes.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLUNIT.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
			{
				id: 'CAVE1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'DRAWS',
		name: 'Drawers',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.DRAWS.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'STORAGEPANEL',
		name: 'Storage Panel',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.STORAGEPANEL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'SHELFPANEL',
		name: 'Shelf Panel',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SHELFPANEL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'OCTACABINET',
		name: 'Octa-Cabinet',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.OCTACABINET.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDAMCRATE',
		name: 'Small Crate',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.AMCRATE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'CRATELRARE',
		name: 'Crate Fabricator',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CRATELRARE.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 10,
			},
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'CRATELCYLINDER',
		name: 'Barrel Fabricator',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CRATELCYLINDER.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 10,
			},
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLCRATE',
		name: 'Locked Crate',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LCRATE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDHCABINET',
		name: 'Tall Cabinet',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.HCABINET.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLOCKER',
		name: 'Locker',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LOCKER.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDSIDEPANEL',
		name: 'Side Panel',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SIDEPANEL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 10,
			},
			{
				id: 'CATALYST1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'FLOORMAT1',
		name: 'Floor Mat',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.FLOORMAT1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'FLAG1',
		name: 'Flag 1',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.FLAG1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'FLAG2',
		name: 'Flag 2',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.FLAG2.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'FLAG3',
		name: 'Flag 3',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.FLAG3.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'FLAG4',
		name: 'Flag 4',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.FLAG4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLFLAG1',
		name: 'Wall Flag 1',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALLFLAG1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLFLAG2',
		name: 'Wall Flag 2',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALLFLAG2.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLFLAG3',
		name: 'Wall Flag 3',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALLFLAG3.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'FUEL1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'TECHPANEL',
		name: 'Tech Panel',
		type: 'product',
		subtitle: 'Decoration',
		description: 'A non-functional tech panel for decorative purposes.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TECHPANEL.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 5,
			},
			{
				id: 'CAVE1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLFAN',
		name: 'Wall Fan',
		type: 'product',
		subtitle: 'Decoration',
		description: 'A decorative ventilation detail for wall.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLFAN.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 5,
			},
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLSCREEN',
		name: 'Wall Screen',
		type: 'product',
		subtitle: 'Decoration',
		description: 'A decorative, wall-mountable video screen.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLSCREEN.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 5,
			},
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'SERVERSTACK',
		name: 'Server',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.SERVERSTACK.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
			{
				id: 'CATALYST1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'ROOFMONITOR',
		name: 'Ceiling Panel',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.ROOFMONITOR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'CAVE1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPONRACK',
		name: 'Weapon Rack',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WEAPONRACK.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 5,
			},
			{
				id: 'CAVE1',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDCANRACK',
		name: 'Canister Rack',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CANRACK.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'ROBOTICARM',
		name: 'Robotic Arm',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROBOTARM.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDFLATPANEL',
		name: 'Flat Panel',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLATPANEL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 10,
			},
			{
				id: 'CATALYST1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BOXEDSCREEN',
		name: 'Oscilloscope',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BOXEDSCREEN.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLSCREENB',
		name: 'Green Wall Screen',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLSCREENB.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLSCREENB2',
		name: 'Orange Wall Screen',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Buildable ornament to beautify your base.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLSCREENB2.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDLABLAMP',
		name: 'Lab Lamp',
		type: 'product',
		subtitle: 'Fitting',
		description:
			'A low-energy consumption light, with an extended lifespan and fully recyclable components.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.LABLAMP.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'WEDGESHAPE',
		name: 'Large Wedge',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WEDGEL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'WEDGESMALLSHAPE',
		name: 'Small Wedge',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WEDGES.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'PYRAMIDSHAPE',
		name: 'Pyramid',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.PYRAMID.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CURVEPIPESHAPE',
		name: 'Curved Pipe',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.PIPECURV.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'PIPESHAPE',
		name: 'Pipe',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.PIPE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBESOLID',
		name: 'Solid Cube',
		type: 'product',
		subtitle: 'Decoration',
		description: 'A large solid cube.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SOLIDCUBE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CYLINDERSHAPE',
		name: 'Cylinder',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CYLINDERSHAPE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBESHAPE',
		name: 'Cube',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CUBESHAPE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPHERESHAPE',
		name: 'Sphere',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.SPHERESHAPE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDTABLE3',
		name: 'Table',
		type: 'product',
		subtitle: 'Furniture',
		description:
			'An all-purpose work surface built from non-magnetic, corrosion resistant materials.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.TABLE003.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'WALL',
		name: 'Wall',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'Reinforced <TECHNOLOGY>Wall Module<>, widespread in basic structures across the galaxy.\n\nConforms to Universal Building Standards 2.3b, ensuring maximum compatibility with other prefab structures. Rapid grid snapping allows for quick assembly of custom shelter layouts.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CORNERPOST',
		name: 'Linking Post',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'Basic structural item used in conjunction with wall modules to create 90 degree corners.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.CORNERPOST.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'ROOMFLOOR',
		name: 'Roof Platform',
		type: 'product',
		subtitle: 'Construction module',
		description:
			'Basic structural item used in conjunction with wall modules to create platforms able to support considerable weight.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.ROOMFLOOR.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLTALL',
		name: 'Large Wall',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'Reinforced <TECHNOLOGY>Wall Module<>, widespread in basic structures across the galaxy.\n\nConforms to Universal Building Standards 2.3b, ensuring maximum compatibility with other prefab structures. Rapid grid snapping allows for quick assembly of custom shelter layouts.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALLTALL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'WALLCURVED',
		name: 'Curved Wall',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Basic structural buildable item.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECORATION.WALLCURVED.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEROOM_SPACE',
		name: 'Large Freighter Room',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CUBEROOM.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 120,
			},
			{
				id: 'ROCKETSUB',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEROOMB_SPACE',
		name: 'Large Freighter Room',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CUBEROOMB.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 120,
			},
			{
				id: 'ROCKETSUB',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEROOMC_SPACE',
		name: 'Large Freighter Room',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CUBEROOMC.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 120,
			},
			{
				id: 'ROCKETSUB',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BRIDGECONNECTOR',
		name: null,
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEROOM.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 120,
			},
			{
				id: 'ROCKETSUB',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDOR_SPACE',
		name: 'Freighter Corridor',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CORRIDOR.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 80,
			},
			{
				id: 'ROCKETSUB',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORL_SPACE',
		name: 'Curved Freighter Corridor',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CORRIDOR_L.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 80,
			},
			{
				id: 'ROCKETSUB',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORT_SPACE',
		name: 'Freighter Junction',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CORRIDOR_T.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 80,
			},
			{
				id: 'ROCKETSUB',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'CORSTAIRS_SPACE',
		name: 'Freighter Stairs',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CORRIDOR_STAIRS.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CUBEWALL_SPACE',
		name: 'Internal Freighter Wall',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CUBEINNERWALL.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORX_SPACE',
		name: 'Freighter Cross Junction',
		type: 'product',
		subtitle: 'Freighter Interior Module',
		description:
			'This expansion module allows for the rapid construction of habitable spaces inside large starships.\n\nConstruction unit is fabricated complete with pressure bulkhead and all necessary attachment points.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CORRIDOR_X.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 80,
			},
			{
				id: 'ROCKETSUB',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER0',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.0.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER1',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.1.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER2',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.2.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER3',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.3.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER4',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.4.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER5',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.5.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER6',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.6.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER7',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.7.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER8',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.8.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'S_CONTAINER9',
		name: 'Freighter Storage Unit',
		type: 'product',
		subtitle: 'Custom Freighter Module',
		description:
			'Hybrid high-capacity storage unit / shelving module for installation in interstellar freighters.\n\nCompatible with all standard life-support fittings.',
		base_value: 5,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPACE_CONTAINER.9.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'CATALYST1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'RACE_START',
		name: 'Race Initiator',
		type: 'product',
		subtitle: 'Race Part',
		description:
			'This platform acts as the start and finish line for Exocraft field tests, allowing Travellers to practice manoeuvring and speed.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'RACESTART.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'MICROCHIP',
				amount: 2,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'RACE_START_SHIP',
		name: 'Starship Race Initiator',
		type: 'product',
		subtitle: 'Race Part',
		description:
			'This platform acts as the start and finish line for Starship field tests, allowing Travellers to practice manoeuvring and speed.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'RACESHIPSTART.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'MICROCHIP',
				amount: 2,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'RACE_BOOSTER',
		name: 'Race Force Amplifier',
		type: 'product',
		subtitle: 'Race Part',
		description: 'Provides a boost to your Exocraft during races.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'RACEBOOSTER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'JELLY',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'RACE_RAMP',
		name: 'Race Obstacle',
		type: 'product',
		subtitle: 'Race Part',
		description: 'Provides extra challenge for Exocraft races.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'RACERAMP.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECAL',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.1.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECAL2',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.2.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALHELLO',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.HELLOLOGO.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNMS',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NMSLOGO.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM0',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM0.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM1',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM1.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM2',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM2.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM3',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM3.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM4',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM4.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM5',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM5.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM6',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM6.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM7',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM7.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM8',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM8.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALNUM9',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.NUM9.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALVIS1',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISUAL1.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALVIS2',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISUAL2.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALVIS3',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISUAL3.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALVIS4',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISUAL4.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALVIS5',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISUAL5.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALSIMP1',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISSIMPLE1.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALSIMP2',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISSIMPLE2.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALSIMP3',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISSIMPLE3.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDECALSIMP4',
		name: 'Decal',
		type: 'product',
		subtitle: 'Decoration',
		description: 'Placeable decorative decals.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'DECAL.VISSIMPLE4.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDOR_WINDOW',
		name: null,
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CORRIDOR_WINDOW.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 5,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'HEALTHPLANT',
		name: null,
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.HEALTHPLANT.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'NPCEXPLORER001',
		name: null,
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCEXPLORER001.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'CREATHOLOGRAM',
		name: 'Creature Hologram',
		type: 'product',
		subtitle: 'Environmental decoration',
		description:
			"A decorative holographic representation of wildlife captured in the user's discovery log.",
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NPCEXPLORER001.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDOR_WATER',
		name: 'Glass Tunnel',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'Pressurised, reinforced glass tunnels for deep-sea construction.\n\nAdvanced nano-mineral coating ensures high performance at depth, without compromising visibility.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.CORRIDOR.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 2,
			},
			{
				id: 'LAND1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORL_WATER',
		name: 'L-Shaped Glass Tunnel',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'Pressurised, reinforced glass tunnels for deep-sea construction.\n\nAdvanced nano-mineral coating ensures high performance at depth, without compromising visibility.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.CORRIDORL.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 2,
			},
			{
				id: 'LAND1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORT_WATER',
		name: 'T-Shaped Glass Tunnel',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'Pressurised, reinforced glass tunnels for deep-sea construction.\n\nAdvanced nano-mineral coating ensures high performance at depth, without compromising visibility.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.CORRIDORT.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 2,
			},
			{
				id: 'LAND1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORX_WATER',
		name: 'X-Shaped Glass Tunnel',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'Pressurised, reinforced glass tunnels for deep-sea construction.\n\nAdvanced nano-mineral coating ensures high performance at depth, without compromising visibility.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.CORRIDORX.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 2,
			},
			{
				id: 'LAND1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'CORRIDORV_WATER',
		name: 'Vertical Glass Tunnel',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'Pressurised, reinforced glass tunnels for deep-sea construction.\n\nAdvanced nano-mineral coating ensures high performance at depth, without compromising visibility.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.CORRIDORV.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 2,
			},
			{
				id: 'LAND1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINROOM_WATER',
		name: 'Deepwater Chamber',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'The core module for base construction, providing a generous central space on which to expand.',
		base_value: 6,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.MAINROOM.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 350,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINROOMCUBE_W',
		name: 'Square Deepwater Chamber',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'A square alternative to the core module for base construction, providing a generous central space on which to expand.',
		base_value: 6,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.MAINROOMCUBE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 350,
			},
		],
		recipes: [],
	},
	{
		id: 'PANEL_GLASS',
		name: 'Large Glass Panel',
		type: 'product',
		subtitle: 'Construction item',
		description: 'A window made from self-cleaning, UV-treated, hermetically sealed glass.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.PANEL_GLASS.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'WATERBUBBLE',
		name: 'Marine Shelter',
		type: 'product',
		subtitle: 'Deep Water Survival Module',
		description:
			'An emergency survival module.\n\nCan be rapidly deployed on the seabed in the event of an oxygen or other Exosuit life support emergency. Provides temporary shelter from environmental hazards, predators and other hostiles forces found in the deep ocean.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.WATERBUBBLE.png',
		ingredients: [
			{
				id: 'CLAMPEARL',
				amount: 5,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
			{
				id: 'OXYGEN',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'MOONPOOL',
		name: 'Moon Pool Floor',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description:
			'A holographic moon pool hatch. Allows easy access into and out of aquatic environments.\n\nPressurisation systems are automatically and discreetly hidden around the room.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.MOONPOOL.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 350,
			},
			{
				id: 'VENTGEM',
				amount: 6,
			},
			{
				id: 'CLAMPEARL',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDDOOR_WATER',
		name: 'Watertight Door',
		type: 'product',
		subtitle: 'Aquatic Construction Module',
		description: 'A compression-sealed, standard door suitable for all rooms and corridors.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'WATER.DOOR.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'VENTGEM',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_ENGINEORB',
		name: 'Terbium Growth',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ENGINEORB.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_BEAMSTONE',
		name: 'Light Fissure',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BEAMSTONE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_BUBBLECLUS',
		name: 'Bubble Cluster',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BUBBLECLUSTER.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_MEDGEOMETR',
		name: 'Hexplate Bush',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.MEDGEOMETRIC.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_SHARD',
		name: 'Glitching Separator',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SHARD.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_STARJOINT',
		name: 'Ossified Star',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.STARJOINT.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_BONEGARDEN',
		name: 'Rattle Spine',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.BONEGARDEN.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_CONTOURPOD',
		name: 'Cable Pod',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.CONTOURPOD.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_HYDROPOD',
		name: 'Calcishroom',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.HYDROPOD.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_SHELLWHITE',
		name: 'Capilliary Shell',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SHELLWHITE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_WEIRDCUBE',
		name: 'Electric Cube',
		type: 'product',
		subtitle: 'Stabilised Reality Glitch',
		description:
			'A rare stabilised glitch, retrieved from a malfunctioning planet. Safe for rehousing in habitable bases.',
		base_value: 1000,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WEIRDCUBE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'SPAWNER_BALL',
		name: 'Sphere Creator',
		type: 'product',
		subtitle: 'Experimental Fabricator',
		description:
			"A highly-specific fabrication device, developed with the intention of finding the universe's most perfect sphere.\n\nRequires <STELLAR>power<> to operate. Will create a large sphere, ready for whatever experiments are deemed necessary.",
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SPAWNER_BALL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'NOISEBOX',
		name: 'Noise Box',
		type: 'product',
		subtitle: 'Audio Device',
		description:
			"A special construction module designed to emit a high-frequency noise. Pitch may be adjusted to the user's requirements.\n\nRequires <STELLAR>power<> to operate.",
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.NOISEBOX.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'POWERCELL',
				amount: 4,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_XOHELMET',
		name: 'X.O. Suit',
		type: 'product',
		subtitle: null,
		description: null,
		base_value: 1000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'SPECIAL.BLOB_B.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_DIVEHELMET',
		name: 'Lost Bathysphere',
		type: 'product',
		subtitle: 'Unlockable Helmet',
		description:
			'A haunted <STELLAR>Exosuit Appearance Override<>. Even once removed, the wearer will forever hear the whispering call of the deep ocean...\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 1000,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'SPECIAL.BLOB_B.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'STATUE_BLOB_B',
		name: 'Bronze Blob Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis statue depicts a primitive ancient creature, sought after by many early explorers.',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.BLOB_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_BLOB_S',
		name: 'Silver Blob Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis statue depicts a primitive ancient creature, sought after by many early explorers.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.BLOB_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_BLOB_G',
		name: 'Gold Blob Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis statue depicts a primitive ancient creature, sought after by many early explorers.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.BLOB_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_DIP_B',
		name: 'Bronze Diplo Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis statue depicts a long-necked quadrupedal species.',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DIP_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_DIP_S',
		name: 'Silver Diplo Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis statue depicts a long-necked quadrupedal species.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DIP_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_DIP_G',
		name: 'Gold Diplo Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis statue depicts a long-necked quadrupedal species.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DIP_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_GEK_B',
		name: 'Bronze Gek Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis statue depicts a Gek gesturing towards the sky.',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.GEK_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_GEK_S',
		name: 'Silver Gek Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis statue depicts a Gek gesturing towards the sky.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.GEK_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_GEK_G',
		name: 'Gold Gek Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis statue depicts a Gek gesturing towards the sky.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.GEK_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_SHIP_B',
		name: 'Bronze Fighter Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis statue depicts the iconic starship Alpha Vector.',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.SHIP_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_SHIP_S',
		name: 'Silver Fighter Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis statue depicts the iconic starship Alpha Vector.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.SHIP_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_SHIP_G',
		name: 'Gold Fighter Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis statue depicts the iconic starship Alpha Vector.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.SHIP_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_WALK_B',
		name: 'Bronze Walker Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis statue depicts the Sentinel Walker, an advanced combat unit.',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.WALK_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_WALK_S',
		name: 'Silver Walker Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis statue depicts the Sentinel Walker, an advanced combat unit.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.WALK_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_WALK_G',
		name: 'Gold Walker Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis statue depicts the Sentinel Walker, an advanced combat unit.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.WALK_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_ATLAS_B',
		name: 'Bronze Atlas Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis statue is a decorative replica of an Atlas Interface. Its core rotates, powered by an unknown force...',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ATLAS_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_ATLAS_S',
		name: 'Silver Atlas Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis statue is a decorative replica of an Atlas Interface. Its core rotates, powered by an unknown force...',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ATLAS_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_ATLAS_G',
		name: 'Gold Atlas Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis statue is a decorative replica of an Atlas Interface. Its core rotates, powered by an unknown force...',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ATLAS_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_ASTRO_B',
		name: 'Bronze Astronaut Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in bronze.\nThis astronaut statue is a tribute to all galactic explorers.',
		base_value: 300,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ASTRO_B.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 15,
			},
			{
				id: 'YELLOW2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_ASTRO_S',
		name: 'Silver Astronaut Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in silver.\nThis astronaut statue is a tribute to all galactic explorers.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ASTRO_S.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'STATUE_ASTRO_G',
		name: 'Gold Astronaut Statue',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive buildable base ornament, cast in gold.\nThis astronaut statue is a tribute to all galactic explorers.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ASTRO_G.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE01',
		name: 'Mind Blown',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<> to share moments of existential wonder and delight with other explorers.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE01.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE02',
		name: 'Celebrate!',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<> to share moments of celebration with other explorers.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE02.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE03',
		name: 'Ha!',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<> to share moments of amusement with other explorers.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE03.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE04',
		name: 'Wonder',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<>. Gaze up to large structures, fauna, flora, or the stars themselves, and marvel at the insignificance of one small life in all the universe.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE04.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE05',
		name: 'No Problem',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			"An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<> while underwater to signal 'no problem' to other aquatic explorers.",
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE05.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE08',
		name: 'Distant Gaze',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<>. Look to the horizon and search for your next adventure.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE08.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE09',
		name: 'Heroic Pose',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<>. Strike a dramatic pose in front of abandoned structures, towering mineral formations, and colossal predatory lifeforms.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE09.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EMOTE10',
		name: 'Disbelief',
		type: 'product',
		subtitle: 'Unlockable Gesture',
		description:
			'An exclusive gesture.\nThis can be selected from the <VAL_ON>Quick Menu<>. Fall to your knees in disbelief at the wonders you have seen.',
		base_value: 1500,
		category: 'product_category_emote',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EMOTE10.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL01',
		name: 'Anomaly Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts a Traveller Anomaly.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL01.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL02',
		name: 'Galactic Hub Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			"An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts an emblem bearing the mission statement: 'Explore Together'.",
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL02.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL03',
		name: 'Hand of Approval Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts a universal hand gesture signifying approval.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL03.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL04',
		name: 'Nada Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts the Korvax Priest Entity Nada.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL04.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL05',
		name: 'Polo Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts the Gek Specialist Polo.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL05.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL06',
		name: 'Apollo Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts the Traveller Apollo.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL06.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL07',
		name: 'Artemis Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts the Traveller Artemis.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL07.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_DECAL08',
		name: 'Null Decal',
		type: 'product',
		subtitle: 'Decoration',
		description:
			'An exclusive placeable decal, to add flair and decoration to bases.\nThis decal depicts the Traveller Null.',
		base_value: 400,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.DECAL08.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_HELMET01',
		name: 'Sparse Horizon Helmet',
		type: 'product',
		subtitle: 'Unlockable Helmet',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.HELMET01.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_HELMET02',
		name: 'Blazing Orbit Helmet',
		type: 'product',
		subtitle: 'Unlockable Helmet',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.HELMET02.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_HELMET03',
		name: 'Eye of the Korvax Helmet',
		type: 'product',
		subtitle: 'Unlockable Helmet',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.HELMET03.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_HELMET05',
		name: 'First Spawn Battle Mask',
		type: 'product',
		subtitle: 'Unlockable Helmet',
		description:
			'An aggressive <STELLAR>Exosuit Appearance Override<>, modeled on the war helmets of the ancient Gek.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.HELMET05.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_VYK_ARMOUR',
		name: 'Armoured Shoulderpads',
		type: 'product',
		subtitle: 'Unlockable Armour',
		description:
			"Powerful shoulder armour, this Exosuit augmentation comes with high-voltage connections into the user's skeletal system. This current jolts the user's body as required, manipulating the muscles into their optimal defensive posture.",
		base_value: 3000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.VYKARMOUR.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_VYK_TORSO',
		name: 'Armoured Chestpiece',
		type: 'product',
		subtitle: 'Unlockable Torso Customisation',
		description:
			'Reinforced yet stylish, this Exosuit chest armour provides excellent abdominal protection without compromising on looks.',
		base_value: 750,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.VYKTORSO.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_VYK_GLOVES',
		name: 'Armoured ExoGloves',
		type: 'product',
		subtitle: 'Unlockable Gloves',
		description:
			'Armoured gloves, perfect for wielding weapons, impressing martial cultures, and picking really spiky plants.',
		base_value: 1000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.VYKGLOVES.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_VYK_LEGS',
		name: 'Armoured Leggings',
		type: 'product',
		subtitle: 'Unlockable Leg Customisation',
		description:
			'Carefully woven nano-fibres make these leggings both flexible and resistant to small-arms fire.\n\nWashing requires specialist equipment.',
		base_value: 750,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.VYKLEGS.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_VYK_BOOTS',
		name: 'Armoured Boots',
		type: 'product',
		subtitle: 'Unlockable Boots',
		description:
			'Reinforced foot protection system with integrated tread-balancing gyroscopes.\n\nHundreds of years of high-tech research, as applied to footwear.',
		base_value: 1000,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.VYKBOOTS.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC1',
		name: 'Iteration: Ariadne Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC2',
		name: 'Iteration: Gemini Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC3',
		name: 'Iteration: Mercury Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC4',
		name: 'Iteration: Cronus Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC5',
		name: 'Iteration: Selene Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC6',
		name: 'Iteration: Helios Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD6.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC7',
		name: 'Iteration: Hyperion Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD7.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC8',
		name: 'Iteration: Tethys Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD8.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC9',
		name: 'Iteration: Perses Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD9.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC10',
		name: 'Iteration: Ares Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD10.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC11',
		name: 'Iteration: Hesperus Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD11.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_EXOTIC12',
		name: 'Iteration: Eos Visage',
		type: 'product',
		subtitle: 'Anomalous Face Transformation',
		description:
			'An exclusive <STELLAR>Exosuit Appearance Override<>.\nTransform the appearance of your Exosuit at an <TECHNOLOGY>Appearance Modifier<>.',
		base_value: 3200,
		category: 'product_category_customization_part',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'SPECIAL.EXOTICHEAD12.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'BASE_ROBOTOY',
		name: 'Robotic Companion',
		type: 'product',
		subtitle: 'Personal Drone Valet',
		description:
			'A perfectly-programmed and error free drone.\n\nThis miniature robot will be a lively presence in your base, bringing joy, laughter and a constant low-level humming to your home.',
		base_value: 800,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.ROBOTTOY.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 30,
			},
			{
				id: 'ASTEROID3',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_TOYCUBE',
		name: 'Expanding Cube Gadget',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive decorative curiosity.\n\nThis precisely crafted gadget utilises a localised gravitational field, delighting and fascinating base visitors.',
		base_value: 800,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TOYCUBE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID3',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_TOYSPHERE',
		name: 'Holographic Globe Gadget',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive decorative curiosity for bases.\n\nThis gadget emits a spherical hologram, representative of one of the quintillions of celestial bodies populating the galaxies.\n',
		base_value: 800,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TOYSPHERE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
			{
				id: 'ASTEROID3',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_TREE01',
		name: 'Fruit Tree',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A large decorative fruit tree.\n\nFruit form, toxicity and existence will vary according to local climatic and pollinator conditions.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TREE01.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_TREE02',
		name: 'Spindle Tree',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A thin, non-fruiting tree. Root system is integrated with highly-adapted fungal symbiotes.\n\nSupplied with its own mushrooms for ease of establishment. Fungus is non-toxic and non-spreading.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TREE02.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_TREE03',
		name: 'Evergreen Tree',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A hardy evergreen tree, able to survive in a wide-range of climates.\n\nWaxy leaves with a silvery underside provide excellent light harvesting abilities, as well as year-round interest and colour.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TREE03.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_MEDPLANT01',
		name: 'Carnivorous Bush',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A medium-sized decorative plant. Each of its leaves is covered in a thin film of sticky latex. Insects that land on these leaves are slowly absorbed by digestive hormones mixed in with the glue.\n\nAvoid accidental skin contact.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.MEDPLANT01.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_MEDPLANT02',
		name: 'Dwarf Palm',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A squat, easily-managed form of the larger palm species.\n\nPlace outdoors to attract wildlife and to purify the air.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.MEDPLANT02.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_MEDPLANT03',
		name: 'Curious Corn',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'Sprouting decorative corn. Comes in a variety of colours. May attract decorative wildlife.\n\nUnable to reproduce naturally. Must be hand-pollinated.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.MEDPLANT03.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_AQUARIUM',
		name: 'Small Aquarium',
		type: 'product',
		subtitle: 'Aquatic Observation Module',
		description:
			'A small observatory unit for studying aquatic behaviours.\n\nCompletely self-contained, with its own renewable energy source, pump array, and self-cleaning filtration systems.',
		base_value: 800,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.AQUARIUM.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 2,
			},
			{
				id: 'CLAMPEARL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_WPLANT1',
		name: 'Curly Coral',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A delicate marine invertebrate, cultivated for potted growth. Its distinctive looping structure gives it an attractive whimsical appearance.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.WATERPLANT01.png',
		ingredients: [
			{
				id: 'WATERPLANT',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_WPLANT2',
		name: 'Aquatic Crystal',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'An eye-catching cluster of crystallised oceanic minerals. These crystals grow in a shard-like structure, and feature an unusual marbled colouration.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.WATERPLANT02.png',
		ingredients: [
			{
				id: 'WATERPLANT',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_WPLANT3',
		name: 'Candelabra Bloom',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A striking plant featuring luminescent, orb-shaped flowers. This domestic variety has adapted to absorb and process oxygen from any source, whether growing on land or underwater.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.WATERPLANT03.png',
		ingredients: [
			{
				id: 'WATERPLANT',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_BARNACLE',
		name: 'Barnacle',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A tenacious arthropod, naturally found encrusting stationary or slow-moving underwater objects.\n\nThis variety can be encouraged to affix itself to a chosen position, adding an aged marine appearance to bases.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.BARNACLE.png',
		ingredients: [
			{
				id: 'WATERPLANT',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'SPEC_FIREWORK01',
		name: 'Firework',
		type: 'product',
		subtitle: 'Consumable Pyrotechnics Device',
		description:
			'A luxury firework, rich in magnesium and indium. Ignite to create glittering displays in the sky.\n\nPlace launch tube via the <VAL_ON>Build Menu<> (<IMG>BUILD_MENU<>). <FUEL>Warning<>: Aim away from living creatures. Not recommended for indoor use.',
		base_value: 50,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#26ff2626',
		icon: 'SPECIAL.FIREWORK01.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_FIREWORK02',
		name: 'Firework',
		type: 'product',
		subtitle: 'Consumable Pyrotechnics Device',
		description:
			'A luxury firework, rich in magnesium and cadmium. Ignite to create glittering displays in the sky.\n\nPlace launch tube via the <VAL_ON>Build Menu<> (<IMG>BUILD_MENU<>). <FUEL>Warning<>: Aim away from living creatures. Not recommended for indoor use.',
		base_value: 50,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#26ff2626',
		icon: 'SPECIAL.FIREWORK02.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPEC_FIREWORK03',
		name: 'Firework',
		type: 'product',
		subtitle: 'Consumable Pyrotechnics Device',
		description:
			'A luxury firework, rich in magnesium and emeril. Ignite to create glittering displays in the sky.\n\nPlace launch tube via the <VAL_ON>Build Menu<> (<IMG>BUILD_MENU<>). <FUEL>Warning<>: Aim away from living creatures. Not recommended for indoor use.',
		base_value: 50,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#26ff2626',
		icon: 'SPECIAL.FIREWORK03.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'BASE_TOYCORE',
		name: 'Pocket Reality Generator',
		type: 'product',
		subtitle: 'Unlockable Decoration',
		description:
			'An exclusive decorative curiosity for bases.\n\nA model of reality itself, as viewed from the perspective of an impossible observer. Infinite levels of detail wait to be discovered by the viewer with a powerful enough lens.',
		base_value: 800,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TOYCORE.png',
		ingredients: [
			{
				id: 'ANTIMATTER',
				amount: 2,
			},
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'ASTEROID3',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_TERRARIUM',
		name: 'Terrarium',
		type: 'product',
		subtitle: 'Specialised Creature Enclosure',
		description:
			'A small observatory unit for studying animal behaviours.\n\nCompletely self-contained, complete with inbuilt nutrient processor, air purifier and faecal disposal system.',
		base_value: 800,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.TERRARIUM.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 2,
			},
			{
				id: 'PLANT_POOP',
				amount: 50,
			},
			{
				id: 'CREATURE1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_HOTPLANT01',
		name: 'Sail Palm',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A large-leafed, heat resistant tree.\n\nIts broad fronds are laced with minerals, forming a protective barrier against the harsh sunlight of its native conditions.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.HOTPLANT01.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_HOTPLANT02',
		name: 'Globe Tree',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A thin tree with a large, fleshy root system, well adapted to hot climates.\n\nRoot bulb may be tapped for a source of drinkable liquid, but this is not advised outside of the most dire circumstances.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.HOTPLANT02.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'BASE_HOTPLANT03',
		name: 'Rock Garden',
		type: 'product',
		subtitle: 'Organic Decoration',
		description:
			'A garden module, complete with decorative mineral formation and built-in capillary matting for optimum humidity control.',
		base_value: 500,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'SPECIAL.HOTPLANT03.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'W_WALL',
		name: 'Wooden Wall',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALL_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'W_WALL_H',
		name: 'Thin Wooden Wall',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A thin wooden wall module for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLH_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_WALL_Q',
		name: 'Small Wooden Wall',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Small Wooden Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLQ_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_WALL_Q_H',
		name: 'Short Wooden Wall',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Short Wooden Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLQH_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_WALLDIAGONAL',
		name: 'Sloping Wood Panel',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Sloping Wood Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLDIAG_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_WALL_WINDOW',
		name: 'Wooden Window Panel',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Window Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLWINDOW_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'W_SDOOR',
		name: 'Small Wooden Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A small door to insert in a wooden doorframe',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SDOOR_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_DOOR',
		name: 'Wooden Door Frame',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Door Frame for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOOR_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'W_DOOR_H',
		name: 'Wooden Doorway',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A thin wooden doorway for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOORH_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_GDOOR',
		name: 'Wooden Power Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A <TECHNOLOGY>power-operated door<>. Can be connected to a <STELLAR>power grid<> and operated using various switches.\n\nFashioned from <TITLE>pressure-treated, resin-injected wood<>.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GARAGEDOOR_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'W_GDOOR_D',
		name: 'Large Wooden Power Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A double-width <TECHNOLOGY>power-operated door<>. Can be connected to a <STELLAR>power grid<> and operated using various switches.\n\nFashioned from <TITLE>pressure-treated, resin-injected wood<>.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GARAGEDOORDOUBLE_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'W_DOORWINDOW',
		name: 'Wooden Frontage',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Frontage for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOORWINDOW_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'W_FLOOR',
		name: 'Wood Floor Panel',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wood Floor Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLOOR_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_GFLOOR',
		name: 'Wood-Framed Glass Panel',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A glass floor/ceiling panel with a wood frame.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GFLOOR_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_FLOOR_Q',
		name: 'Small Wood Panel',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Small Wood Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLOORQ_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'W_RAMP',
		name: 'Wooden Ramp',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Ramp for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMP_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 50,
			},
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'W_RAMP_H',
		name: 'Wooden Half Ramp',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Half Ramp for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMPH_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 25,
			},
			{
				id: 'LAND2',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'W_ROOF',
		name: 'Wooden Roof',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A basic roof platform with reinforced load struts.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOF_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'W_ROOF_M',
		name: 'Wooden Roof Panel',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A piece of wooden roof panelling for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFM_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'W_ROOF_C',
		name: 'Wooden Roof Corner',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A wooden roof corner for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFC_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'W_ROOF_IC',
		name: 'Wooden Inner Roof Corner',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A vital structure roof piece, critical when building angular roofs.\n\nFashioned from <TITLE>pressure-treated, resin-injected wood<>.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFIC_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'W_ARCH',
		name: 'Wooden Arch',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Arch for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ARCH_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'W_ARCH_H',
		name: 'Wooden Half Arch',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description: 'A Wooden Half Arch for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ARCHH_WOOD.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_WALL',
		name: 'Metal Wall',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALL_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'M_WALL_H',
		name: 'Thin Metal Wall',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A thin metal wall module for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLH_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_WALL_Q',
		name: 'Small Metal Wall',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Small Metal Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLQ_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_WALL_Q_H',
		name: 'Short Metal Wall',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Small Metal Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLQH_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_WALLDIAGONAL',
		name: 'Sloping Metal Panel',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Sloping Metal Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLDIAG_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_WALL_WINDOW',
		name: 'Metal Window Panel',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Window Panel for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLWINDOW_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'M_SDOOR',
		name: 'Small Metal Door',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A small door to insert in a metal doorframe',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SDOOR_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_DOOR',
		name: 'Metal Door Frame',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Door Frame for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOOR_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'M_DOOR_H',
		name: 'Metal Doorway',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A thin metal doorway for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOORH_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_GDOOR',
		name: 'Metal Power Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A <TECHNOLOGY>power-operated door<>. Can be connected to a <STELLAR>power grid<> and operated using various switches.\n\nFashioned from <TITLE>high-strength metal alloys<>.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GARAGEDOOR_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'M_GDOOR_D',
		name: 'Large Metal Power Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A double-width <TECHNOLOGY>power-operated door<>. Can be connected to a <STELLAR>power grid<> and operated using various switches.\n\nFashioned from <TITLE>high-strength metal alloys<>.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GARAGEDOORDOUBLE_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'M_DOORWINDOW',
		name: 'Metal Frontage',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Frontage for use in base construction.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOORWINDOW_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'M_FLOOR',
		name: 'Metal Floor Panel',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Floor Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLOOR_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_GFLOOR',
		name: 'Metal-Framed Glass Panel',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A glass floor/ceiling panel with a metal frame.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GFLOOR_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_FLOOR_Q',
		name: 'Small Metal Panel',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Small Metal Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLOORQ_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_RAMP',
		name: 'Metal Ramp',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Ramp for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMP_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 50,
			},
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'M_RAMP_H',
		name: 'Metal Half Ramp',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Half Ramp for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMPH_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'LAND2',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'M_ROOF',
		name: 'Metal Roof',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A basic roof platform with reinforced load struts.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOF_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'M_ROOF_M',
		name: 'Metal Roof Panel',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A piece of metal roof panelling for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFM_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'M_ROOF_C',
		name: 'Metal Roof Corner',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A metal roof corner for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFC_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'M_ROOF_IC',
		name: 'Metal Inner Roof Corner',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A vital structure roof piece, critical when building angular roofs.\n\nFashioned from <TITLE>high-strength metal alloys<>.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFIC_METAL.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'M_ARCH',
		name: 'Metal Arch',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Arch for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ARCH_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'M_ARCH_H',
		name: 'Metal Half Arch',
		type: 'product',
		subtitle: 'Metal Construction Component',
		description: 'A Metal Half Arch for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ARCHH_METAL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_WALL',
		name: 'Concrete Wall',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALL_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'C_WALL_H',
		name: 'Thin Concrete Wall',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A thin concrete wall module for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLH_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_WALL_Q',
		name: 'Small Concrete Wall',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Small Concrete Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLQ_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_WALL_Q_H',
		name: 'Short Concrete Wall',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Small Concrete Wall for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLQH_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_WALLDIAGONAL',
		name: 'Sloping Concrete Panel',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Sloping Concrete Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLDIAG_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_WALL_WINDOW',
		name: 'Concrete Window Panel',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Window Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.WALLWINDOW_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
			{
				id: 'FARMPROD3',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'C_DOOR',
		name: 'Concrete Door Frame',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Door Frame for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOOR_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'C_SDOOR',
		name: 'Small Concrete Door',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A small door to insert in a concrete doorframe',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.SDOOR_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_DOOR_H',
		name: 'Concrete Doorway',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A thin concrete doorway for use in base construction.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOORH_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_GDOOR',
		name: 'Concrete Power Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A <TECHNOLOGY>power-operated door<>. Can be connected to a <STELLAR>power grid<> and operated using various switches.\n\nFashioned from <TITLE>reinforced concrete slabs<>.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GARAGEDOOR_CONCRETE.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'C_GDOOR_D',
		name: 'Large Concrete Power Door',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A double-width <TECHNOLOGY>power-operated door<>. Can be connected to a <STELLAR>power grid<> and operated using various switches.\n\nFashioned from <TITLE>reinforced concrete slabs<>.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GARAGEDOORDOUBLE_CONCRETE.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'C_DOORWINDOW',
		name: 'Concrete Frontage',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Frontage for use in base construction.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.DOORWINDOW_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'C_FLOOR',
		name: 'Concrete Floor Panel',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Floor Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLOOR_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_GFLOOR',
		name: 'Concrete-Framed Glass Panel',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A glass floor/ceiling panel with a concrete frame.',
		base_value: 3,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GFLOOR_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_FLOOR_Q',
		name: 'Small Concrete Panel',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Small Concrete Panel for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.FLOORQ_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'C_RAMP',
		name: 'Concrete Ramp',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Ramp for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMP_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 50,
			},
			{
				id: 'LAND2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'C_RAMP_H',
		name: 'Concrete Half Ramp',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Half Ramp for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.RAMPH_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'LAND2',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'C_ROOF',
		name: 'Concrete Roof',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A basic roof platform with reinforced load struts.',
		base_value: 2,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOF_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'C_ROOF_M',
		name: 'Concrete Roof Panel',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A piece of concrete roof panelling for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFM_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'C_ROOF_C',
		name: 'Concrete Roof Corner',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A concrete roof corner for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFC_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'C_ROOF_IC',
		name: 'Concrete Inner Roof Corner',
		type: 'product',
		subtitle: 'Wooden Construction Component',
		description:
			'A vital structure roof piece, critical when building angular roofs.\n\nFashioned from <TITLE>reinforced concrete slabs<>.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ROOFIC_CONCRETE.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
			{
				id: 'LAND1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'C_ARCH',
		name: 'Concrete Arch',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Arch for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ARCH_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'C_ARCH_H',
		name: 'Concrete Half Arch',
		type: 'product',
		subtitle: 'Concrete Construction Component',
		description: 'A Concrete Half Arch for use in base construction.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.ARCHH_CONCRETE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'O2_HARVESTER',
		name: 'Oxygen Harvester',
		type: 'product',
		subtitle: 'Atmosphere Processing Device',
		description:
			'An <TECHNOLOGY>autonomous atmosphere extractor<>, this device can be left to collect and purify oxygen from the air. User must monitor fuel levels to ensure continued operation.\n\nThe resulting gas is compressed and processed, ready for use in all standard <FUEL>life support systems<>.',
		base_value: 10,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.O2HARVESTER.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'PRODFUEL1',
				amount: 5,
			},
			{
				id: 'JELLY',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDHARVESTER',
		name: 'Autonomous Mining Unit',
		type: 'product',
		subtitle: 'Portable mining device',
		description:
			'An automated harvester for the mining of resources. Once activated, the AMU extracts minerals without the need for supervision, providing a regular yield until the site is exhausted.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.HARVESTER.png',
		ingredients: [
			{
				id: 'RADIO1',
				amount: 100,
			},
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'POWERCELL2',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BUILDGASHARVEST',
		name: 'Atmosphere Harvester',
		type: 'product',
		subtitle: 'Autonomous Gas Compressor',
		description:
			'An automated siphon unit for the collection of valuable gases. Once activated, the harvester condenses and compresses substances from the air over time. Compressed gas is then stored safely until collected.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'BUILDABLE.GASHARVESTER.png',
		ingredients: [
			{
				id: 'TOXIC1',
				amount: 100,
			},
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'CARBON_SEAL',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'U_EXTRACTOR_S',
		name: 'Mineral Extractor',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'An automated mineral harvester. Determine a site with the <TECHNOLOGY>Surveying<> upgrade for the <TECHNOLOGY>Analysis Visor<>. Mineral extraction rates and produced minerals will vary from site to site.\n\nRequires <STELLAR>power<> to function. Connect to <TECHNOLOGY>Silos<> with <TECHNOLOGY>Pipelines<> to allow collection from more convenient sites.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.EXTRACTOR_SMALL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'STELLAR2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'U_GASEXTRACTOR',
		name: 'Gas Extractor',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'An automated gas harvester. Determine a site with the <TECHNOLOGY>Surveying<> upgrade for the <TECHNOLOGY>Analysis Visor<>. Gas extraction rates and produced gases will vary from site to site.\n\nRequires <STELLAR>power<> to function. Connect to <TECHNOLOGY>Silos<> with <TECHNOLOGY>Pipelines<> to allow collection from more convenient sites.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.GASEXTRACTOR.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'STELLAR2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'U_SILO_S',
		name: 'Supply Depot',
		type: 'product',
		subtitle: 'Substance Distribution Module',
		description:
			'Automated storage unit. Connect to a <TRADEABLE>Supply Grid<> using <TECHNOLOGY>Pipelines<>.\n\nAutomatically stores the output of various <STELLAR>Mineral<> and <STELLAR>Gas Extractors<>, allowing for increased capacity and more efficient siting. Can be located a long distances from the extraction site.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SILO_SMALL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'U_SOLAR_S',
		name: 'Solar Panel',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'An efficient <STELLAR>power generator<>, this solar array will turn sunlight into the electrical energy required to power many base structures.\n\nGenerates <FUEL>no power at night<>. Partner with <TECHNOLOGY>Batteries<> to store energy for the hours of darkness.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SOLARPANEL_SMALL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'STELLAR2',
				amount: 75,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'U_GENERATOR_S',
		name: 'Electromagnetic Generator',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'When suitably placed in an area of high field strength, efficient electromagnetic dynamos are used to generate <STELLAR>near limitless power<>.\n\nLocate appropriate sites with the <TECHNOLOGY>Surveying<> upgrade for the <TECHNOLOGY>Analysis Visor<>. Power output will vary from site to site.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.GENERATOR_SMALL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 2,
			},
			{
				id: 'LAND3',
				amount: 60,
			},
			{
				id: 'STELLAR2',
				amount: 75,
			},
		],
		recipes: [],
	},
	{
		id: 'U_BIOGENERATOR',
		name: 'Biofuel Reactor',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A small <STELLAR>power generator<>. Burns carbon-based fuel placed in its <TECHNOLOGY>furnace tank<> and converts it into usable power.\n\nConnect power generators to base structures and technologies with <TECHNOLOGY>electrical wiring<>. Many parts require power to function.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.BIOGENERATOR.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 1,
			},
			{
				id: 'OXYGEN',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'U_POWERLINE',
		name: 'Electrical Wiring',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'High-capacity electrical wiring. Use wiring to connect <TECHNOLOGY>Power Generators<> to your base. Most technology, as well as structures with embedded lighting systems, require a power source to operate.\n\nWiring can be connected to <TECHNOLOGY>various switches<> to facilitate selective power flow.',
		base_value: 0,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.POWERLINE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_PORTALLINE',
		name: 'Teleport Cable',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'Advanced fibre-optic cabling, designed to link one or more <TECHNOLOGY>Short-Range Teleporters<>.',
		base_value: 0,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.POWERLINE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SWITCHWALL',
		name: 'Wall Switch',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A <STELLAR>power management device<>, the switch will toggle the flow of power when pulled.\n\nSwitches require both power and signal wires to control a device.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SWITCHWALL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'CAVE2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'U_SWITCHPRESS',
		name: 'Floor Switch',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A <STELLAR>power management device<>, the switch will toggle the flow of power when stood upon or otherwise activated.\n\nSwitches require both power and signal wires to control a device.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SWITCHPRESS.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'CAVE2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'U_BATTERY_S',
		name: 'Battery',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'Highly-efficient <TECHNOLOGY>energy storage units<>. Connect to a power grid, and onboard power management circuits will <STELLAR>automatically draw down spare capacity<> to charge its cells.\n\nWhen the grid attempts to draw more power than is currently supplied, the battery will <STELLAR>automatically deploy power<> to make up the shortfall.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.BATTERY_SMALL.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 60,
			},
			{
				id: 'FUEL2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'U_SWITCHBUTTON',
		name: 'Button',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A <STELLAR>power management device<>, the switch will toggle the flow of power when used.\n\nSwitches require both power and signal wires to control a device.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SWITCH_BUTTON.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'U_SWITCHPROX',
		name: 'Proximity Switch',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A <STELLAR>power management device<>, the switch will toggle the flow of power when an entity is detected nearby.\n\nSwitches require both power and signal wires to control a device.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SWITCH_PROX.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'U_PIPELINE',
		name: 'Supply Pipe',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'Flexible, high-strength piping. Able to withstand a highly-pressurised internal environment.\n\nUsed for connecting various <STELLAR>Mineral<> and <STELLAR>Gas Extractors<> to <TECHNOLOGY>Silos<>',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.PIPELINE.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'FUEL1',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'U_TRANSISTOR1',
		name: 'Power Inverter',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A <STELLAR>power management device<>, the switch will toggle the flow of power when used.\n\nSwitches require both power and signal wires to control a device.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SWITCH_INVERTER.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'CAVE2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'U_TRANSISTOR2',
		name: 'Auto Switch',
		type: 'product',
		subtitle: 'Power Distribution Module',
		description:
			'A <STELLAR>power management device<>, this switch will toggle the flow of power when signaled by an incoming signal.\n\nSwitches require both power and signal wires to control a device.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.SWITCH_AUTO.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 25,
			},
			{
				id: 'CAVE2',
				amount: 15,
			},
		],
		recipes: [],
	},
	{
		id: 'U_MINIPORTAL',
		name: 'Short-Range Teleporter',
		type: 'product',
		subtitle: 'Instantaneous Transport Network',
		description:
			'A low-powered teleporter, construction for instantaneous travel across short distances.\n\nWhen <STELLAR>wired<> to both a power source and another short-range teleporter, allow near-instant travel between nearby locations.',
		base_value: 1,
		category: 'product_category_building_part',
		trade_category: 'trade_category_none',
		color: '#7cff7c9f',
		icon: 'UTILITY.MINIPORTAL.png',
		ingredients: [
			{
				id: 'CASING',
				amount: 5,
			},
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'ASTEROID3',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'U_LASER1',
		name: 'Mining Beam Module (C)',
		type: 'product',
		subtitle: 'Mining Beam Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Mining Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nUpgrades Mining Laser core optics, <STELLAR>increasing device effectiveness<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPONMINING.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_LASER2',
		name: 'Mining Beam Module (B)',
		type: 'product',
		subtitle: 'Significant Mining Beam Upgrade',
		description:
			"A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Mining Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nUpgrades the Mining Laser's primary crystal chamber, boosting core <STELLAR>beam energy<> while decreasing unwanted <STELLAR>heat spill<>.",
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPONMINING.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_LASER3',
		name: 'Mining Beam Module (A)',
		type: 'product',
		subtitle: 'Powerful Mining Beam Upgrade',
		description:
			"An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Mining Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nUpgrades the Mining Laser's core components. <STELLAR>Power output<> and <STELLAR>heat tolerance<> are significantly increased.",
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPONMINING.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_LASER4',
		name: 'Mining Beam Module (S)',
		type: 'product',
		subtitle: 'Supreme Mining Beam Upgrade',
		description:
			"A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Mining Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nUpgrades the Mining Laser's core components. <STELLAR>Power output<> and <STELLAR>heat tolerance<> are significantly increased.",
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPONMINING.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SCANNER1',
		name: 'Scanner Module (C)',
		type: 'product',
		subtitle: 'Scanning System Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Multi-Tool Scanning Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nInternal chip upgrades improve <STELLAR>scan radius<>, as well as significantly increasing the <STELLAR>value<> of <TECHNOLOGY>discovery data<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPONSCANNER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SCANNER2',
		name: 'Scanner Module (B)',
		type: 'product',
		subtitle: 'Significant Scanning System Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Multi-Tool Scanning Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nInternal chip upgrades improve <STELLAR>scan radius<>, as well as dramatically increasing the <STELLAR>value<> of <TECHNOLOGY>discovery data<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPONSCANNER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SCANNER3',
		name: 'Scanner Module (A)',
		type: 'product',
		subtitle: 'Powerful Scanning System Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Multi-Tool Scanning Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nInternal chip upgrades improve <STELLAR>scan radius<>, as well as massively increasing the <STELLAR>value<> of <TECHNOLOGY>discovery data<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPONSCANNER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SCANNER4',
		name: 'Scanner Module (S)',
		type: 'product',
		subtitle: 'Supreme Scanning System Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Multi-Tool Scanning Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nInternal chip upgrades improve <STELLAR>scan radius<>, as well as massively increasing the <STELLAR>value<> of <TECHNOLOGY>discovery data<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPONSCANNER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_BOLT1',
		name: 'Boltcaster Module (C)',
		type: 'product',
		subtitle: 'Boltcaster Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Boltcaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nUpgrades the Boltcaster, <STELLAR>decreasing reload times<> and <STELLAR>increasing damage<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_BOLT2',
		name: 'Boltcaster Module (B)',
		type: 'product',
		subtitle: 'Significant Boltcaster Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Boltcaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases projectile <STELLAR>damage<> and decreases <STELLAR>reload times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_BOLT3',
		name: 'Boltcaster Module (A)',
		type: 'product',
		subtitle: 'Powerful Boltcaster Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Boltcaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases projectile <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>clip size<>. Decreases <STELLAR>reload times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_BOLT4',
		name: 'Boltcaster Module (S)',
		type: 'product',
		subtitle: 'Supreme Boltcaster Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Boltcaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases projectile <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>clip size<>. Decreases <STELLAR>reload times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_GRENADE1',
		name: 'Plasma Launcher Module (C)',
		type: 'product',
		subtitle: 'Plasma Launcher Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Plasma Launcher<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to explosion <STELLAR>damage<> and <STELLAR>radius<>, as well as increasing the maximum number of pre-explosion <STELLAR>bounces<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_GRENADE2',
		name: 'Plasma Launcher Module (B)',
		type: 'product',
		subtitle: 'Significant Plasma Launcher Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Plasma Launcher<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to explosion <STELLAR>damage<> and <STELLAR>radius<>, as well as increasing the maximum number of pre-explosion <STELLAR>bounces<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_GRENADE3',
		name: 'Plasma Launcher Module (A)',
		type: 'product',
		subtitle: 'Powerful Plasma Launcher Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Plasma Launcher<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to explosion <STELLAR>damage<> and <STELLAR>radius<>, as well as increasing the maximum number of pre-explosion <STELLAR>bounces<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_GRENADE4',
		name: 'Plasma Launcher Module (S)',
		type: 'product',
		subtitle: 'Supreme Plasma Launcher Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Plasma Launcher<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to explosion <STELLAR>damage<> and <STELLAR>radius<>, as well as increasing the maximum number of pre-explosion <STELLAR>bounces<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TGRENADE1',
		name: 'Geology Cannon Module (C)',
		type: 'product',
		subtitle: 'Geology Cannon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Geology Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases both <STELLAR>explosion damage<> and <STELLAR>crater radius<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TGRENADE2',
		name: 'Geology Cannon Module (B)',
		type: 'product',
		subtitle: 'Significant Geology Cannon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Geology Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases both <STELLAR>explosion damage<> and <STELLAR>crater radius<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TGRENADE3',
		name: 'Geology Cannon Module (A)',
		type: 'product',
		subtitle: 'Powerful Geology Cannon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Geology Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases both <STELLAR>explosion damage<> and <STELLAR>crater radius<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TGRENADE4',
		name: 'Geology Cannon Module (S)',
		type: 'product',
		subtitle: 'Supreme Geology Cannon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Geology Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases both <STELLAR>explosion damage<> and <STELLAR>crater radius<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAIL1',
		name: 'Blaze Javelin Module (C)',
		type: 'product',
		subtitle: 'Blaze Javelin Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Blaze Javelin<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases <STELLAR>laser damage<> and decreases <STELLAR>recharge times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAIL2',
		name: 'Blaze Javelin Module (B)',
		type: 'product',
		subtitle: 'Significant Blaze Javelin Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Blaze Javelin<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly increases <STELLAR>laser damage<> and decreases <STELLAR>recharge times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAIL3',
		name: 'Blaze Javelin Module (A)',
		type: 'product',
		subtitle: 'Powerful Blaze Javelin Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Blaze Javelin<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically increases <STELLAR>laser damage<> and decreases <STELLAR>recharge times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAIL4',
		name: 'Blaze Javelin Module (S)',
		type: 'product',
		subtitle: 'Supreme Blaze Javelin Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Blaze Javelin<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically increases <STELLAR>laser damage<> and decreases <STELLAR>recharge times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHOTGUN1',
		name: 'Scatter Blaster Module (C)',
		type: 'product',
		subtitle: 'Scatter Blaster Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Scatter Blaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases weapon <STELLAR>damage<> and decreases <STELLAR>reload times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHOTGUN2',
		name: 'Scatter Blaster Module (B)',
		type: 'product',
		subtitle: 'Significant Scatter Blaster Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Scatter Blaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOverhauls internal mechanisms to increase <STELLAR>clip size<> and <STELLAR>bullets per shot<>. In addition, increases weapon <STELLAR>damage<> and decreases <STELLAR>reload times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHOTGUN3',
		name: 'Scatter Blaster Module (A)',
		type: 'product',
		subtitle: 'Powerful Scatter Blaster Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Scatter Blaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers significant improvements to weapon <STELLAR>damage<> and <STELLAR>reload times<>. Increases total <STELLAR>clip size<> and offers substantial improvements to <STELLAR>rate of fire<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHOTGUN4',
		name: 'Scatter Blaster Module (S)',
		type: 'product',
		subtitle: 'Supreme Scatter Blaster Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Scatter Blaster<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers significant improvements to weapon <STELLAR>damage<> and <STELLAR>reload times<>. Increases total <STELLAR>clip size<> and offers substantial improvements to <STELLAR>rate of fire<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SMG1',
		name: 'Pulse Spitter Module (C)',
		type: 'product',
		subtitle: 'Pulse Spitter Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Pulse Spitter<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOverloads internal charge systems to increase <STELLAR>fire rate<> and decrease <STELLAR>reload times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SMG2',
		name: 'Pulse Spitter Module (B)',
		type: 'product',
		subtitle: 'Significant Pulse Spitter Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Pulse Spitter<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nAmplifies core optics to increase <STELLAR>clip size<> and <STELLAR>fire rate<>, as well as decreasing <STELLAR>reload times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SMG3',
		name: 'Pulse Spitter Module (A)',
		type: 'product',
		subtitle: 'Powerful Pulse Spitter Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Pulse Spitter<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nLocalised spacetime distortion significantly increases <STELLAR>clip size<> and <STELLAR>fire rate<>, as well as decreasing <STELLAR>reload times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SMG4',
		name: 'Pulse Spitter Module (S)',
		type: 'product',
		subtitle: 'Supreme Pulse Spitter Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Pulse Spitter<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nLocalised spacetime distortion significantly increases <STELLAR>clip size<> and <STELLAR>fire rate<>, as well as decreasing <STELLAR>reload times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.WEAPONDAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_ENERGY1',
		name: 'Life Support Module (B)',
		type: 'product',
		subtitle: 'Significant Life Support Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Life Support System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases <STELLAR>life support power<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.ENERGY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_ENERGY2',
		name: 'Life Support Module (A)',
		type: 'product',
		subtitle: 'Powerful Life Support Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Life Support System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases <STELLAR>life support power<> and offers limited <STELLAR>solar-energy power-offsetting<>, decreasing power use during daylight.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.ENERGY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_ENERGY3',
		name: 'Life Support Module (S)',
		type: 'product',
		subtitle: 'Supreme Life Support Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Life Support System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases <STELLAR>life support power<> and offers limited <STELLAR>solar-energy power-offsetting<>, decreasing power use during daylight.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.ENERGY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_JETBOOST1',
		name: 'Movement Module (C)',
		type: 'product',
		subtitle: 'Movement System Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Exosuit Movement Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to jetpack <STELLAR>tank capacity<> and <STELLAR>life support drain rates<>, as well as increasing Exosuit <STELLAR>speed boost duration<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SUIT.JET.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_JETBOOST2',
		name: 'Movement Module (B)',
		type: 'product',
		subtitle: 'Significant Movement System Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Movement Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDelivers powerful improvements to jetpack <STELLAR>tank capacity<> and <STELLAR>life support drain rates<>, as well as increasing Exosuit <STELLAR>speed boost duration<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.JET.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_JETBOOST3',
		name: 'Movement Module (A)',
		type: 'product',
		subtitle: 'Powerful Movement System Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Movement Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers dramatic improvements to jetpack <STELLAR>tank capacity<> and <STELLAR>life support drain rates<>, as well as increasing Exosuit <STELLAR>speed boost duration<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.JET.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_JETBOOST4',
		name: 'Movement Module (S)',
		type: 'product',
		subtitle: 'Supreme Movement System Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Movement Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers dramatic improvements to jetpack <STELLAR>tank capacity<> and <STELLAR>life support drain rates<>, as well as increasing Exosuit <STELLAR>speed boost duration<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.JET.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIELDBOOST1',
		name: 'Shield Module (C)',
		type: 'product',
		subtitle: 'Defensive Systems Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Exosuit Defensive Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases <STELLAR>Exosuit shield strength<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SUIT.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIELDBOOST2',
		name: 'Shield Module (B)',
		type: 'product',
		subtitle: 'Significant Defensive Systems Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Defensive Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly increases <STELLAR>Exosuit shield strength<>, as well as increasing <STELLAR>core health<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIELDBOOST3',
		name: 'Shield Module (A)',
		type: 'product',
		subtitle: 'Powerful Defensive Systems Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Defensive Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically increases <STELLAR>Exosuit shield strength<>, as well as increasing <STELLAR>core health<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIELDBOOST4',
		name: 'Shield Module (S)',
		type: 'product',
		subtitle: 'Supreme Defensive Systems Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Defensive Systems<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically increases <STELLAR>Exosuit shield strength<>, as well as increasing <STELLAR>core health<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_UNW1',
		name: 'Underwater Protection Module (B)',
		type: 'product',
		subtitle: 'Underwater Oxygen Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Aeration Membrane<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves survival times <TECHNOLOGY>underwater<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.WATER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_UNW2',
		name: 'Underwater Protection Module (A)',
		type: 'product',
		subtitle: 'Significant Underwater Oxygen Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Aeration Membrane<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times <TECHNOLOGY>underwater<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.WATER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_UNW3',
		name: 'Underwater Protection Module (S)',
		type: 'product',
		subtitle: 'Powerful Underwater Oxygen Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Aeration Membrane<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times <TECHNOLOGY>underwater<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.WATER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAD1',
		name: 'Radiation Protection Module (B)',
		type: 'product',
		subtitle: 'Significant Hazard Protection Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Radiation Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves survival times in <COMMODITY>radioactive environments<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.RAD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAD2',
		name: 'Radiation Protection Module (A)',
		type: 'product',
		subtitle: 'Powerful Hazard Protection Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Radiation Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <COMMODITY>radioactive environments<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.RAD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_RAD3',
		name: 'Radiation Protection Module (S)',
		type: 'product',
		subtitle: 'Supreme Hazard Protection Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Radiation Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <COMMODITY>radioactive environments<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.RAD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TOX1',
		name: 'Toxic Protection Module (B)',
		type: 'product',
		subtitle: 'Significant Hazard Protection Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Toxin Filtering System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves survival times in <TRADEABLE>toxic environments<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.TOX.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TOX2',
		name: 'Toxic Protection Module (A)',
		type: 'product',
		subtitle: 'Powerful Hazard Protection Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Toxin Filtering System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <TRADEABLE>toxic environments<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.TOX.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_TOX3',
		name: 'Toxic Protection Module (S)',
		type: 'product',
		subtitle: 'Supreme Hazard Protection Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Toxin Filtering System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <TRADEABLE>toxic environments<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.TOX.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_COLDPROT1',
		name: 'Thermal Protection Module (B)',
		type: 'product',
		subtitle: 'Significant Hazard Protection Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Thermal Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves survival times in <TECHNOLOGY>sub-zero environments<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.COLD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_COLDPROT2',
		name: 'Thermal Protection Module (A)',
		type: 'product',
		subtitle: 'Powerful Hazard Protection Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Thermal Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <TECHNOLOGY>sub-zero environments<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.COLD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_COLDPROT3',
		name: 'Thermal Protection Module (S)',
		type: 'product',
		subtitle: 'Supreme Hazard Protection Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exosuit Thermal Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <TECHNOLOGY>sub-zero environments<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.COLD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HOTPROT1',
		name: 'Thermal Protection Module (B)',
		type: 'product',
		subtitle: 'Significant Hazard Protection Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exosuit Thermal Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves survival times in <FUEL>high-temperature environments<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SUIT.HOT.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HOTPROT2',
		name: 'Thermal Protection Module (A)',
		type: 'product',
		subtitle: 'Powerful Hazard Protection Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade upgrade for the <TECHNOLOGY>Exosuit Thermal Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <FUEL>high-temperature environments<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SUIT.HOT.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HOTPROT3',
		name: 'Thermal Protection Module (S)',
		type: 'product',
		subtitle: 'Supreme Hazard Protection Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade upgrade for the <TECHNOLOGY>Exosuit Thermal Protection System<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDrastically improves survival times in <FUEL>high-temperature environments<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SUIT.HOT.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_PULSE1',
		name: 'Pulse Engine Module (C)',
		type: 'product',
		subtitle: 'Pulse Engine Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Starship Pulse Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>starship maneuverability<> and <STELLAR>speed<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.ENGINE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_PULSE2',
		name: 'Pulse Engine Module (B)',
		type: 'product',
		subtitle: 'Significant Pulse Engine Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Starship Pulse Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>starship maneuverability<> and <STELLAR>speed<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.ENGINE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_PULSE3',
		name: 'Pulse Engine Module (A)',
		type: 'product',
		subtitle: 'Powerful Pulse Engine Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Starship Pulse Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>starship maneuverability<> and <STELLAR>speed<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.ENGINE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_PULSE4',
		name: 'Pulse Engine Module (S)',
		type: 'product',
		subtitle: 'Supreme Pulse Engine Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Starship Pulse Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>starship maneuverability<> and <STELLAR>speed<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.ENGINE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HYPER1',
		name: 'Hyperdrive Module (C)',
		type: 'product',
		subtitle: 'Hyperdrive Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Hyperdrive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>warp-drive efficiency<> and <STELLAR>jump distance<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.HYPER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HYPER2',
		name: 'Hyperdrive Module (B)',
		type: 'product',
		subtitle: 'Significant Hyperdrive Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Hyperdrive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>warp-drive efficiency<> and <STELLAR>jump distance<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.HYPER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HYPER3',
		name: 'Hyperdrive Module (A)',
		type: 'product',
		subtitle: 'Powerful Hyperdrive Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Hyperdrive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>warp-drive efficiency<> and <STELLAR>jump distance<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.HYPER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_HYPER4',
		name: 'Hyperdrive Module (S)',
		type: 'product',
		subtitle: 'Supreme Hyperdrive Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Hyperdrive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nOffers improvements to <STELLAR>warp-drive efficiency<> and <STELLAR>jump distance<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.HYPER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHIELD1',
		name: 'Starship Shield Module (C)',
		type: 'product',
		subtitle: 'Starship Shield Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Starship Defensive Shielding<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>ship strength<> for increased combat endurance.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHIELD2',
		name: 'Starship Shield Module (B)',
		type: 'product',
		subtitle: 'Significant Starship Shield Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Starship Defensive Shielding<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>ship strength<> for increased combat endurance.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHIELD3',
		name: 'Starship Shield Module (A)',
		type: 'product',
		subtitle: 'Powerful Starship Shield Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Starship Defensive Shielding<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>ship strength<> for increased combat endurance.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHIELD4',
		name: 'Starship Shield Module (S)',
		type: 'product',
		subtitle: 'Supreme Starship Shield Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Starship Defensive Shielding<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>ship strength<> for increased combat endurance.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.SHIELD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPGUN1',
		name: 'Photon Cannon Module (C)',
		type: 'product',
		subtitle: 'Starship Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Starship Photon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPGUN2',
		name: 'Photon Cannon Module (B)',
		type: 'product',
		subtitle: 'Significant Starship Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Starship Photon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPGUN3',
		name: 'Photon Cannon Module (A)',
		type: 'product',
		subtitle: 'Powerful Starship Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Starship Photon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPGUN4',
		name: 'Photon Cannon Module (S)',
		type: 'product',
		subtitle: 'Supreme Starship Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Starship Photon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPLAS1',
		name: 'Phase Beam Module (C)',
		type: 'product',
		subtitle: 'Starship Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Starship Phase Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases combat effectiveness via improvements to both <STELLAR>damage<> and <STELLAR>overheat tolerance<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPLAS2',
		name: 'Phase Beam Module (B)',
		type: 'product',
		subtitle: 'Significant Starship Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Starship Phase Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nIncreases combat effectiveness via significant improvements to both <STELLAR>damage<> and <STELLAR>overheat tolerance<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPLAS3',
		name: 'Phase Beam Module (A)',
		type: 'product',
		subtitle: 'Powerful Starship Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Starship Phase Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically increases combat effectiveness via large improvements to both <STELLAR>damage<> and <STELLAR>overheat tolerance<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPLAS4',
		name: 'Phase Beam Module (S)',
		type: 'product',
		subtitle: 'Supreme Starship Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Starship Phase Beam<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically increases combat effectiveness via large improvements to both <STELLAR>damage<> and <STELLAR>overheat tolerance<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHOT1',
		name: 'Positron Module (C)',
		type: 'product',
		subtitle: 'Starship Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Positron Ejector<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHOT2',
		name: 'Positron Module (B)',
		type: 'product',
		subtitle: 'Significant Starship Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Positron Ejector<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHOT3',
		name: 'Positron Module (A)',
		type: 'product',
		subtitle: 'Powerful Starship Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Positron Ejector<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPSHOT4',
		name: 'Positron Module (S)',
		type: 'product',
		subtitle: 'Supreme Starship Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Positron Ejector<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPMINI1',
		name: 'Infra-Knife Module (C)',
		type: 'product',
		subtitle: 'Starship Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Infra-Knife Accelerator<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPMINI2',
		name: 'Infra-Knife Module (B)',
		type: 'product',
		subtitle: 'Significant Starship Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Infra-Knife Accelerator<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPMINI3',
		name: 'Infra-Knife Module (A)',
		type: 'product',
		subtitle: 'Powerful Starship Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Infra-Knife Accelerator<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPMINI4',
		name: 'Infra-Knife Module (S)',
		type: 'product',
		subtitle: 'Supreme Starship Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Infra-Knife Accelerator<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPBLOB1',
		name: 'Cyclotron Module (C)',
		type: 'product',
		subtitle: 'Starship Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Cyclotron Ballista<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPBLOB2',
		name: 'Cyclotron Module (B)',
		type: 'product',
		subtitle: 'Significant Starship Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Cyclotron Ballista<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPBLOB3',
		name: 'Cyclotron Module (A)',
		type: 'product',
		subtitle: 'Powerful Starship Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Cyclotron Ballista<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_SHIPBLOB4',
		name: 'Cyclotron Module (S)',
		type: 'product',
		subtitle: 'Supreme Starship Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Cyclotron Ballista<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>overheat times<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.SHIP.DAMAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOGUN1',
		name: 'Exocraft Cannon Module (C)',
		type: 'product',
		subtitle: 'Exocraft Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Exocraft Mounted Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>fuel efficiency<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOGUN2',
		name: 'Exocraft Cannon Module (B)',
		type: 'product',
		subtitle: 'Significant Exocraft Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exocraft Mounted Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>fuel efficiency<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOGUN3',
		name: 'Exocraft Cannon Module (A)',
		type: 'product',
		subtitle: 'Powerful Exocraft Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Mounted Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>fuel efficiency<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOGUN4',
		name: 'Exocraft Cannon Module (S)',
		type: 'product',
		subtitle: 'Supreme Exocraft Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Mounted Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>damage<>, <STELLAR>fire rate<> and <STELLAR>fuel efficiency<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOLAS1',
		name: 'Exocraft Laser Module (C)',
		type: 'product',
		subtitle: 'Exocraft Weapon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Exocraft Mining Laser<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>mining power<> and <STELLAR>fuel efficiency<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOLAS2',
		name: 'Exocraft Laser Module (B)',
		type: 'product',
		subtitle: 'Significant Exocraft Weapon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exocraft Mining Laser<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>mining power<> and <STELLAR>fuel efficiency<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOLAS3',
		name: 'Exocraft Laser Module (A)',
		type: 'product',
		subtitle: 'Powerful Exocraft Weapon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Mining Laser<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>mining power<> and <STELLAR>fuel efficiency<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOLAS4',
		name: 'Exocraft Laser Module (S)',
		type: 'product',
		subtitle: 'Supreme Exocraft Weapon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Mining Laser<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>mining power<> and <STELLAR>fuel efficiency<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.VEHICLE.WEAPON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOBOOST1',
		name: 'Exocraft Boost Module (C)',
		type: 'product',
		subtitle: 'Exocraft Boost Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Exocraft Acceleration Module<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>boost tank capacity<> and <STELLAR>boost power<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOBOOST2',
		name: 'Exocraft Boost Module (B)',
		type: 'product',
		subtitle: 'Significant Exocraft Boost Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exocraft Acceleration Module<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>boost tank capacity<> and <STELLAR>boost power<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOBOOST3',
		name: 'Exocraft Boost Module (A)',
		type: 'product',
		subtitle: 'Powerful Exocraft Boost Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Acceleration Module<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>boost tank capacity<> and <STELLAR>boost power<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXOBOOST4',
		name: 'Exocraft Boost Module (S)',
		type: 'product',
		subtitle: 'Supreme Exocraft Boost Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Acceleration Module<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>boost tank capacity<> and <STELLAR>boost power<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_ENG1',
		name: 'Exocraft Engine Module (C)',
		type: 'product',
		subtitle: 'Exocraft Engine Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Exocraft Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nImproves <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_ENG2',
		name: 'Exocraft Engine Module (B)',
		type: 'product',
		subtitle: 'Significant Exocraft Engine Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Exocraft Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nSignificantly improves <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_ENG3',
		name: 'Exocraft Engine Module (A)',
		type: 'product',
		subtitle: 'Powerful Exocraft Engine Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_ENG4',
		name: 'Exocraft Engine Module (S)',
		type: 'product',
		subtitle: 'Supreme Exocraft Engine Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Exocraft Engine<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nDramatically improves <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.UPGRADE.VEHICLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUB1',
		name: 'Humboldt Drive Module (C)',
		type: 'product',
		subtitle: 'Submarine Drive Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Humboldt Drive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan improve <STELLAR>acceleration<>, <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.SUBMARINEUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUB2',
		name: 'Humboldt Drive Module (B)',
		type: 'product',
		subtitle: 'Significant Submarine Drive Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Humboldt Drive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan significantly improve <STELLAR>acceleration<>, <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.SUBMARINEUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUB3',
		name: 'Humboldt Drive Module (A)',
		type: 'product',
		subtitle: 'Powerful Submarine Drive Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Humboldt Drive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan dramatically improve <STELLAR>acceleration<>, <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.SUBMARINEUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUB4',
		name: 'Humboldt Drive Module (S)',
		type: 'product',
		subtitle: 'Supreme Submarine Drive Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Humboldt Drive<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan dramatically improve <STELLAR>acceleration<>, <STELLAR>fuel efficiency<> and <STELLAR>top speed<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SUBMARINEUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUBGUN1',
		name: 'Nautilon Cannon Module (C)',
		type: 'product',
		subtitle: 'Nautilon Cannon Upgrade',
		description:
			'A <TRADEABLE>moderate<> upgrade for the <TECHNOLOGY>Nautilon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan improve <STELLAR>damage<> and <STELLAR>fire rate<>.',
		base_value: 60,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#94ff9452',
		icon: 'PRODUCT.SUBMARINEGUNUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUBGUN2',
		name: 'Nautilon Cannon Module (B)',
		type: 'product',
		subtitle: 'Significant Nautilon Cannon Upgrade',
		description:
			'A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Nautilon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan significantly improve <STELLAR>damage<> and <STELLAR>fire rate<>.',
		base_value: 140,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#63ff63b7',
		icon: 'PRODUCT.SUBMARINEGUNUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUBGUN3',
		name: 'Nautilon Cannon Module (A)',
		type: 'product',
		subtitle: 'Powerful Nautilon Cannon Upgrade',
		description:
			'An <SPECIAL>extremely powerful<> upgrade for the <TECHNOLOGY>Nautilon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan dramatically improve <STELLAR>damage<> and <STELLAR>fire rate<>.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#45ff4562',
		icon: 'PRODUCT.SUBMARINEGUNUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'U_EXO_SUBGUN4',
		name: 'Nautilon Cannon Module (S)',
		type: 'product',
		subtitle: 'Supreme Nautilon Cannon Upgrade',
		description:
			'A <COMMODITY>supremely powerful<> upgrade for the <TECHNOLOGY>Nautilon Cannon<>. Use <IMG>FE_ALT1<> to begin upgrade installation process.\n\nCan dramatically improve <STELLAR>damage<> and <STELLAR>fire rate<>.',
		base_value: 480,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a9ffa923',
		icon: 'PRODUCT.SUBMARINEGUNUPGRADE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'BAIT_BASIC',
		name: 'Creature Pellets',
		type: 'product',
		subtitle: 'Compressed Nutrients',
		description:
			'Basic <STELLAR>creature bait<>. Can be placed directly or accessed via the Quick Menu (<IMG>QUICK_MENU<>).\n\nBasic bait will attract creatures and cause them to yield <FUEL>Faecium<>.\n\nUse the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures. Using specific bait allows <STELLAR>advanced creature actions<>.',
		base_value: 20,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#37ff3750',
		icon: 'PRODUCT.BAIT.PELLETS.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 10,
			},
		],
		recipes: [
			{
				id: 'RECIPE_577',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_BASIC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_MEAT_1',
		name: 'Synthetic Worms',
		type: 'product',
		subtitle: 'Carnivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <FUEL>carnivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <SPECIAL>Mordite<> and assorted <FUEL>creature flesh<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. It will also <VAL_ON>calm predators<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.BAIT.WORMS.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_540',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CRAB',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_541',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'NANOTUBES',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_MEAT_2',
		name: 'Ground Meat',
		type: 'product',
		subtitle: 'Carnivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <FUEL>carnivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <SPECIAL>Mordite<> and assorted <FUEL>creature flesh<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. It will also <VAL_ON>calm predators<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.BAIT.MEAT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_542',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_543',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_544',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_545',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_546',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_MEAT_3',
		name: 'Pheromone Sac',
		type: 'product',
		subtitle: 'Carnivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <FUEL>carnivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <SPECIAL>Mordite<> and other <TRADEABLE>scented bait<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. It will also <VAL_ON>calm predators<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.BAIT.SACK.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_547',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'BAIT_VEG_1',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_548',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'BAIT_VEG_2',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_MEAT_4',
		name: 'Bloody Organ',
		type: 'product',
		subtitle: 'Carnivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <FUEL>carnivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <SPECIAL>Mordite<> and assorted <FUEL>creature flesh<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. It will also <VAL_ON>calm predators<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.BAIT.ORGAN.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_549',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_550',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_MEAT_4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_VEG_1',
		name: 'Scented Herbs',
		type: 'product',
		subtitle: 'Herbivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <TRADEABLE>herbivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <FUEL>Faecium<> and <TRADEABLE>harvestable plants<>.\n\nCan be further processed in the <TECHNOLOGY>Nutrient Processor<> to create <STELLAR>new bait types<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7900',
		icon: 'PRODUCT.BAIT.HERBS.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_551',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL1',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_552',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_COLDFARM',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_553',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_RADIO',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_554',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_DUSTWILD',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_555',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_556',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_HOT',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_557',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_558',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_VEG_2',
		name: 'Enzyme Fluid',
		type: 'product',
		subtitle: 'Herbivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <TRADEABLE>herbivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <FUEL>Faecium<> and <TRADEABLE>harvestable plants<>.\n\nCan be further processed in the <TECHNOLOGY>Nutrient Processor<> to create <STELLAR>new bait types<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#76ff7600',
		icon: 'PRODUCT.BAIT.FLUID.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_559',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_560',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_561',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_562',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_TOXIC',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_563',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_564',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_565',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_VEG_3',
		name: 'Fermented Fruit',
		type: 'product',
		subtitle: 'Herbivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <TRADEABLE>herbivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <FUEL>Faecium<> and <TRADEABLE>harvestable plants<>.\n\nCan be further processed in the <TECHNOLOGY>Nutrient Processor<> to create <STELLAR>new bait types<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#71ff7100',
		icon: 'PRODUCT.BAIT.FRUIT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_566',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHFARM',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_567',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_568',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_569',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_GLITCH',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_570',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_571',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_572',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_LUSH',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_573',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_DUST',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BAIT_VEG_4',
		name: 'Sweetened Compost',
		type: 'product',
		subtitle: 'Herbivore Bait',
		description:
			'A specialist <STELLAR>bait<> for <TRADEABLE>herbivores<>. Use the <TECHNOLOGY>Analysis Visor<> to discover the bait preferences of specific creatures.\n\nCreated in a <TECHNOLOGY>Nutrient Processor<> from <FUEL>Faecium<> and <TRADEABLE>other bait types<>.\n\nFeeding using the correct bait will allow creatures to be <VAL_ON>ridden<> or <VAL_ON>harvested<>. Chose bait type from the Quick Menu (<IMG>QUICK_MENU<>).',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.BAIT.COMPOST.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_574',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'BAIT_VEG_1',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_575',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'BAIT_VEG_2',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_576',
				name: 'Processor Setting: Prepare Bait',
				result: {
					id: 'BAIT_VEG_4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'BAIT_VEG_3',
						amount: 1,
					},
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_V_BLOB',
		name: "Sticky 'Honey'",
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.REFINED.HONEY.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_GEK',
		name: 'Warm Proto-Milk',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.MILK.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_DIPLO',
		name: 'Giant Egg',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.EGG.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_REX',
		name: 'Regis Grease',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.ANIMALGREASE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_CAT',
		name: 'Leopard-Fruit',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.CATFRUIT.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_STRIDER',
		name: 'Tall Eggs',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.EGG.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_COW',
		name: 'Fresh Milk',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.MILK.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_CRAB',
		name: "Crab 'Apple'",
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#c3ffc356',
		icon: 'PRODUCT.WEIRDFRUIT.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_EGG',
		name: 'Creature Egg',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'PRODUCT.EGG.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_V_MILK',
		name: 'Wild Milk',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An animal byproduct, this nutrious morsel can be easily farmed without harm to the animal that produces it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'PRODUCT.MILK.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_FISH',
		name: 'Salty Fingers',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_FLYER',
		name: 'Meaty Wings',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_FIEND',
		name: 'Fiendish Roe',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_BLOB',
		name: 'Offal Sac',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.OFFAL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_GEK',
		name: 'ProtoSausage',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.SAUSAGE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_DIPLO',
		name: 'Diplo Chunks',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_REX',
		name: 'Scaly Meat',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_CAT',
		name: 'Feline Liver',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.OFFAL.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_STRIDER',
		name: 'Strider Sausage',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_COW',
		name: 'Raw Steak',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_CRAB',
		name: 'Leg Meat',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_M_MEAT',
		name: 'Meaty Chunks',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.MEAT.RAW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_96',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_M_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_DEATH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_LUSHWILD',
		name: 'Impulse Beans',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.LUSHWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_LUSHFARM',
		name: 'Pilgrimberry',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.LUSHFARM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_20',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_LUSHFARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_LUSH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_HOTWILD',
		name: 'Fireberry',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.HOTWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_HOTFARM',
		name: 'Solartillo',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.HOTFARM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_21',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_HOTFARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_HOT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_COLDWILD',
		name: 'Frozen Tubers',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.COLDWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_COLDFARM',
		name: 'Glass Grains',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.COLDFARM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_22',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_COLDFARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_TOXWILD',
		name: 'Jade Peas',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.TOXWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_TOXFARM',
		name: 'Non-Toxic Mushroom',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.TOXFARM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_23',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_TOXFARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_TOXIC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_RADWILD',
		name: 'Grahberry',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.RADWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_RADFARM',
		name: 'Sievert Beans',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.RADFARM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_24',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_RADFARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_RADIO',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_DUSTWILD',
		name: 'Aloe Flesh',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.DUSTWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_DUSTFARM',
		name: 'Cactus Nectar',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.DUSTFARM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_25',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_DUSTFARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_DUST',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_GLITCH',
		name: 'Hexaberry',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.GLITCHWILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_ALL1',
		name: 'Heptaploid Wheat',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.ALL1WILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_ALL2',
		name: 'Sweetroot',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7952',
		icon: 'PRODUCT.PLANT.ALL2WILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_ALL3',
		name: 'Pulpy Roots',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.PLANT.ALL3WILD.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'FOOD_P_CAVE',
		name: 'Marrow Flesh',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.CAVEWILD.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_28',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_CAVE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_WATER',
		name: 'Kelp Rice',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.WATERWILD.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_29',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_WATER',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_POOP',
		name: 'Wild Yeast',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.PLANT.POOPWILD.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_1',
				name: 'Processor Setting: Fermentation',
				result: {
					id: 'FOOD_P_POOP',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_26',
				name: 'Processor Setting: Fermentation',
				result: {
					id: 'FOOD_P_POOP',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_DEATH',
		name: 'Meat Flakes',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A nutrious meat product, harvested from the corpse of the creature that once contained it.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.PLANT.DEATHWILD.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_27',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_P_DEATH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_P_STELLAR',
		name: 'Silicon Egg',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.PLANT.STELLARWILD.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_2',
				name: 'Processor Setting: Chromatic Yolk Formation',
				result: {
					id: 'FOOD_P_STELLAR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_EGGS',
		name: 'Baked Eggs',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.REFINED.OMLETTE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_32',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EGGS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_33',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EGGS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_34',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EGGS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_35',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EGGS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_FLOUR',
		name: 'Refined Flour',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.FLOUR.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_10',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_FLOUR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_15',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_FLOUR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_COLDFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_30',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_R_FLOUR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_WATER',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_SUGAR',
		name: 'Processed Sugar',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.SUGAR.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_7',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_SUGAR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_11',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_SUGAR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_18',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_SUGAR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_HONEY',
		name: 'Synthetic Honey',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.HONEY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_44',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_VEG',
		name: 'Steamed Vegetables',
		type: 'product',
		subtitle: 'Raw Ingredient',
		description:
			'An edible plant, harvested from planetary flora.\n\nProcess in a <TECHNOLOGY>Nutrient Processor<> to generate edible products.',
		base_value: 300,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7951',
		icon: 'PRODUCT.REFINED.VEG.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_5',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_6',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_9',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_GLITCH',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_14',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_16',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_17',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_19',
				name: 'Processor Setting: Steam Plant Matter',
				result: {
					id: 'FOOD_R_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_CAVE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_MEAT',
		name: 'Processed Meat',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEAT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_99',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_102',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_103',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FIEND',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_104',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_105',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_106',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_107',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_108',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_109',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_110',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_111',
				name: 'Processor Setting: Incinerate Flesh',
				result: {
					id: 'FOOD_R_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CRAB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_SMOKED',
		name: 'Smoked Meat',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.SMOKEDMEAT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_97',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_98',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_100',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_101',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_112',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_113',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FIEND',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_114',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_115',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_116',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_117',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_118',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_119',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_120',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_121',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CRAB',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_122',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_123',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FIEND',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_124',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_125',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_126',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_127',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_128',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_129',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_130',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_131',
				name: 'Processor Setting: Preserve Flesh',
				result: {
					id: 'FOOD_R_SMOKED',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CRAB',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_BUTTER',
		name: 'Churned Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_45',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BUTTER',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_GBUTTER',
		name: 'Proto-Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_46',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GBUTTER',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_CREAM',
		name: 'Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_42',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_43',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_MILK',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_GCREAM',
		name: 'Proto-Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.CREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_41',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_GEK',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_CARAMEL',
		name: 'Crunchy Caramel',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.REFINED.HONEY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_68',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_CARAMEL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_282',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_CARAMEL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_ALL3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_OIL',
		name: 'Clarified Oil',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.COOKINGGREASE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_47',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_OIL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_48',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_OIL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_GOIL',
		name: 'Proto-Oil',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.COOKINGGREASE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_49',
				name: 'Processor Setting: Nutrient Refining',
				result: {
					id: 'FOOD_R_GOIL',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_PASTRY',
		name: 'Pastry',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.DOUGH.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_66',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_PASTRY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_67',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_PASTRY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_BREAD',
		name: 'Bread',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.BREAD.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_65',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_R_BREAD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DOUGH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_CUSTARD',
		name: 'Viscous Custard',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_52',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CUSTARD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_53',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CUSTARD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_54',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CUSTARD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_FCUSTARD',
		name: 'Salty Custard',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_50',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_FCUSTARD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATER1',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_MCUSTARD',
		name: 'Monstrous Custard',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_51',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCUSTARD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FIENDCORE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_SCUSTARD',
		name: 'Stellar Custard',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_55',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_SCUSTARD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_STELLAR',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_MERINGUE',
		name: 'Delicate Meringue',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'PRODUCT.DOUGH.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_37',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERINGUE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FIENDCORE',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_38',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERINGUE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_39',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERINGUE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_40',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERINGUE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_DONUT',
		name: 'Lumpen Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_69',
				name: 'Processor Setting: Accelerated Fry',
				result: {
					id: 'FOOD_R_DONUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_OIL',
						amount: 1,
					},
					{
						id: 'FOOD_R_DOUGH',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_GONUT',
		name: 'Proto-Beignet',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_70',
				name: 'Processor Setting: Accelerated Fry',
				result: {
					id: 'FOOD_R_GONUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GOIL',
						amount: 1,
					},
					{
						id: 'FOOD_R_DOUGH',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_CHOC',
		name: 'Bittersweet Cocoa',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.REFINED.CHOCOLATE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_3',
				name: 'Processor Setting: Extract Nutrients',
				result: {
					id: 'FOOD_R_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_SWEETBUT',
		name: 'Sweetened Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_60',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_SWEETBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_SWEETGEK',
		name: 'Sweetened Proto-Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_61',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_SWEETGEK',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_HONEYBUT',
		name: 'Honey Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_58',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_HONEYBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_HONEYGEK',
		name: 'Honied Proto-Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_59',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_HONEYGEK',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_BLOBGEK',
		name: 'Gooey ProtoButter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_63',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BLOBGEK',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GBUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_BLOBBUT',
		name: 'Gooey Butter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_62',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BUTTER',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_CHEESE',
		name: 'Tangy Cheese',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_56',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_P_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_GCHEESE',
		name: 'ProtoCheese',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.BUTTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_57',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
					{
						id: 'FOOD_P_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_DOUGH',
		name: 'Dough',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.DOUGH.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_64',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_DOUGH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_P_POOP',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_JAM_GLITCH',
		name: 'Anomalous Jam',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_84',
				name: 'Processor Setting: Preserve Fruit',
				result: {
					id: 'FOOD_JAM_GLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_JAM_HOT',
		name: 'Ever-burning Jam',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.JAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_85',
				name: 'Processor Setting: Preserve Fruit',
				result: {
					id: 'FOOD_JAM_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_JAM_RAD',
		name: "Grahj'am",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.JAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_86',
				name: 'Processor Setting: Preserve Fruit',
				result: {
					id: 'FOOD_JAM_RAD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_JAM_DUST',
		name: 'Cactus Jelly',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.JAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_87',
				name: 'Processor Setting: Preserve Fruit',
				result: {
					id: 'FOOD_JAM_DUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_JAM_CAT',
		name: 'Furball Jelly',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.JAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_88',
				name: 'Processor Setting: Preserve Fruit',
				result: {
					id: 'FOOD_JAM_CAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_JAM_CRAB',
		name: 'Wriggling Jam',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.JAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_89',
				name: 'Processor Setting: Preserve Fruit',
				result: {
					id: 'FOOD_JAM_CRAB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_SUGAR',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_CUST',
		name: 'Custard Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_71',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_FCUST',
		name: 'Salty Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_72',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_FCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_MCUST',
		name: 'Monstrous Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_73',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_SCUST',
		name: 'The Stellarator',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_74',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_SCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_HON',
		name: 'Honey Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_75',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_HON',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_HONB',
		name: 'Honeybutter Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_76',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_HONB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_SWEETBUT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_77',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_HONB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_SWEETGEK',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_78',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_HONB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEYBUT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_79',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_HONB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEYGEK',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_BLOB',
		name: 'Gooey ProtoDoughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_80',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBGEK',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_CARM',
		name: 'Caramel Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_81',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_CHOC',
		name: 'Cocoa Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_82',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_MEAT',
		name: 'Proteinous Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_83',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_JAM',
		name: 'Jam Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_91',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_92',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_93',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_94',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_CJAM',
		name: 'Wriggling Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_95',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_CJAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_DNUT_AJAM',
		name: 'Anomalous Doughnut',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.DOUGHNUT.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_90',
				name: 'Processor Setting: Nutrient Injection',
				result: {
					id: 'FOOD_DNUT_AJAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_DONUT',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_PIECASE',
		name: 'Pie Case',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.EMPTYPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_132',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_R_PIECASE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PASTRY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_MEAT',
		name: 'Mystery Meat Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_133',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_134',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_137',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_141',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_142',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_144',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_145',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_SMEAT',
		name: 'Smokey Meat Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_135',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_SMEAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_VEG',
		name: 'High-Fibre Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_136',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_151',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_FISH',
		name: 'Fish Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_147',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_FISH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_FISH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_FIEND',
		name: 'Haunted Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.TARTEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_138',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_FIEND',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_FIEND',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_ORGAN',
		name: 'Chewy Organ Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_139',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_ORGAN',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_143',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_ORGAN',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_GEK',
		name: 'Proto-Sausage Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_140',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GEK',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CRAB',
		name: "'Legs-in-Pastry'",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'PRODUCT.REFINED.MEATPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_146',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CRAB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_M_CRAB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_BERRY',
		name: 'Fruity Pudding',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_148',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_BERRY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_153',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_BERRY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_GLOW',
		name: 'Glowing Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.VEGPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_149',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GLOW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_150',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GLOW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_154',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GLOW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_166',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GLOW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_MUSH',
		name: 'Fungal Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_152',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MUSH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_JAM',
		name: 'Jam Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_167',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_168',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_WEIRD',
		name: 'Anomalous Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_157',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_WEIRD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_GLITCH',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_165',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_WEIRD',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CACTUS',
		name: 'Spikey Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_155',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_156',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_HONEY',
		name: 'Honey Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_159',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_180',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_ROOTS',
		name: 'Mushed Root Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.REFINED.VEGPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_158',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_ROOTS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_GREASE',
		name: 'Solidified Grease Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.VEGPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_160',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GREASE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_V_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_161',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GREASE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_OIL',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_162',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_GREASE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GOIL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CAT',
		name: 'Jellied Fur Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_163',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_V_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_169',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CAT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CRABJ',
		name: 'Wriggling Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_164',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CRABJ',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_170',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CRABJ',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CHOC',
		name: 'Cocoa Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_171',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CARM',
		name: 'Caramel Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_179',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CREAM',
		name: 'Creamy Treat',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_172',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CUST',
		name: 'Custard Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_173',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_174',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_MCUST',
		name: 'The Spawning Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.TARTEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_175',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_SCUST',
		name: 'Stellar Custard Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_176',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_SCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_CHEESE',
		name: 'Baked Cheese Tart',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_177',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_178',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_PIE_VCHEE',
		name: 'Cheesy Vegetable Pie',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.VEGPIE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_181',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_182',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_183',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_184',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_185',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_186',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_187',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_188',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_189',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_190',
				name: 'Processor Setting: Assemble Pie',
				result: {
					id: 'FOOD_PIE_VCHEE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_PIECASE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MEAT_STEW',
		name: 'Mystery Meat Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_199',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_200',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_201',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_202',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_203',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_204',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_208',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_209',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_210',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_211',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_212',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_213',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_214',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_215',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_216',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_217',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_218',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_219',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_220',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_221',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_222',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_223',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_224',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_225',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_226',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_227',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_228',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_229',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_230',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_231',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_232',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_233',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_234',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_235',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_236',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_237',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_238',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_239',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_240',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_241',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_242',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_243',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_244',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_245',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_MEAT_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_VEG_STEW',
		name: 'Fibrous Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.VEGSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_247',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_248',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_249',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_250',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_251',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_252',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_253',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_254',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_255',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_256',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_257',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_258',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_259',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_260',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_261',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_262',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_263',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_264',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_265',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_266',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_267',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_268',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_269',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_270',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_271',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_272',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_273',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_274',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_275',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_276',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_277',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_278',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_279',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_280',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_281',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_VEG_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ORGAN_STEW',
		name: 'Stewed Organs',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_205',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_ORGAN_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_206',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_ORGAN_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_207',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_ORGAN_STEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_EGGPIE',
		name: 'Omelette',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.OMLETTE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_192',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_193',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_194',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_EGGPIE_M',
		name: 'Whispering Omelette',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.OMLETTE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_191',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE_M',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FIENDCORE',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_EGGPIE_G',
		name: 'Proto-Omelette',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.REFINED.OMLETTE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_196',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE_G',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_197',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE_G',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_198',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE_G',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_EGGPIE_GM',
		name: 'Parasitic Omelette',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.OMLETTE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_195',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_EGGPIE_GM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FIENDCORE',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_J_ALL3',
		name: 'Root Juice',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_12',
				name: 'Processor Setting: Liquidise',
				result: {
					id: 'FOOD_J_ALL3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_J_LUSH',
		name: "Pilgrim's Tonic",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_13',
				name: 'Processor Setting: Liquidise',
				result: {
					id: 'FOOD_J_LUSH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_LUSHFARM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_J_HOT',
		name: 'Fire Water',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_4',
				name: 'Processor Setting: Liquidise',
				result: {
					id: 'FOOD_J_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_J_DUST',
		name: 'Refreshing Drink',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_8',
				name: 'Processor Setting: Liquidise',
				result: {
					id: 'FOOD_J_DUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_P_DUSTWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_S_VEG',
		name: 'Flavoursome Sauce',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_283',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_ALL3',
						amount: 1,
					},
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_284',
				name: 'Processor Setting: Liquidise',
				result: {
					id: 'FOOD_S_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_S_HOT',
		name: 'Scorching Sauce',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_285',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_J_HOT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_286',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_287',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_288',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_289',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_290',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_ALL3',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_291',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_ALL3',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_292',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_ALL3',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_293',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_J_ALL3',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_S_CREAM',
		name: 'Creamy Sauce',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_294',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_295',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_296',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_S_CHEESE',
		name: 'Partially-Liquid Cheese',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A consumable liquid, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be ingested as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.SAUCE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_297',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_298',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_299',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHEESE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_300',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_S_CHEESE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCREAM',
						amount: 1,
					},
					{
						id: 'FOOD_R_GCHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_O_CH',
		name: 'Tangy Organ Surprise',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_301',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_O_CH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_ORGAN_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_CHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_V_CH',
		name: 'Tangy Vegetable Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.VEGSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_302',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_V_CH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_VEG_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_CHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_M_CH',
		name: 'Cheese-and-Flesh Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_303',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_M_CH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_MEAT_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_CHEESE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_O_CR',
		name: 'Creamed Organ Soup',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_304',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_O_CR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_ORGAN_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_V_CR',
		name: 'Cream of Vegetable Soup',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.VEGSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_305',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_V_CR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_VEG_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_M_CR',
		name: 'Thick Meat Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_306',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_M_CR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_MEAT_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_O_HOT',
		name: 'Devilled Organs',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_307',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_O_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_ORGAN_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_HOT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_V_HOT',
		name: 'Fiery Vegetable Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.VEGSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_308',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_V_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_VEG_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_HOT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_M_HOT',
		name: 'Spicy Fleshballs',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_309',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_M_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_MEAT_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_HOT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_O_VEG',
		name: 'Flavoursome Organs',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_310',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_O_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_ORGAN_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_VEG',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_V_VEG',
		name: 'Delicious Vegetable Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#79ff7953',
		icon: 'PRODUCT.REFINED.VEGSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_311',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_V_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_VEG_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_VEG',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_STEW_M_VEG',
		name: 'Herb-Encrusted Flesh',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_312',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_STEW_M_VEG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_MEAT_STEW',
						amount: 1,
					},
					{
						id: 'FOOD_S_VEG',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_CAKEMIX',
		name: 'Cake Batter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.BATTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_313',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_315',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_319',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_321',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_325',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_327',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_CAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_GCAKEMIX',
		name: 'Proto-Batter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.BATTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_314',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_316',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_320',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_322',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_326',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_328',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_GCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_BCAKEMIX',
		name: 'Thick, Sweet Batter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.BATTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_317',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_318',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_323',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_324',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_329',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_330',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_BCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_MCAKEMIX',
		name: 'Wailing Batter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.BATTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_331',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_332',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SWEETGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_333',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_334',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_HONEYGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_335',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBGEK',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_336',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MCAKEMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_MERMIX',
		name: 'Extra-Fluffy Batter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.BATTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_337',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERINGUE',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_EGG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_338',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERINGUE',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_339',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MERMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERINGUE',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FOOD_V_DIPLO',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_MMERMIX',
		name: 'Writhing, Roiling Batter',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.BATTER.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_340',
				name: 'Processor Setting: Component Churn',
				result: {
					id: 'FOOD_R_MMERMIX',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERINGUE',
						amount: 1,
					},
					{
						id: 'FOOD_R_FLOUR',
						amount: 1,
					},
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_HONEY',
		name: 'Glittering Honey Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_341',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_CREAM',
		name: 'Cream Buns',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_343',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_BLOBBUT',
		name: 'Questionably Sweet Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_342',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_344',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_378',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_380',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_CHOC',
		name: 'Chocolate Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_345',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_CARM',
		name: 'Caramel-Encrusted Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_346',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_APPLE',
		name: "Spiced 'Apple' Cake",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_348',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_355',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_CACTUS',
		name: 'Esophageal Surprise',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_349',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_353',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_JAM',
		name: 'Traditional Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_352',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_354',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_JHOT',
		name: 'Ever-Boiling Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_351',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_JHOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_JGLITCH',
		name: 'Perpetual Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_350',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_JGLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_CUST',
		name: 'Custard Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_356',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_FCUST',
		name: 'Briney Delight',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_357',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_FCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_MCUST',
		name: 'Horrifying, Gooey Delight',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_358',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_376',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_410',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_411',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_412',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_413',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_MCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CK_SCUST',
		name: 'Interstellar Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Cake Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_359',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CK_SCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_EYEBALLS',
		name: 'Horrifying Mush',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nCan be consumed as it stands or subjected to further processing.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.FIENDCORE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_450',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EYEBALLS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_EYESTEW',
		name: 'Abyssal Stew',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.MEATSTEW.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_451',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'EYEBALL',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_452',
				name: 'Processor Setting: Bind Proteins',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_453',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_454',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_455',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_456',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_457',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_458',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_459',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_460',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_461',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_462',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_463',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_464',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_465',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_466',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_467',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_468',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_469',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_470',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_471',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_472',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_473',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_R_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_474',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_R_SMOKED',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_475',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_MEAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_476',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_477',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_478',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_FLYER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_479',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_GEK',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_480',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_DIPLO',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_481',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_REX',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_482',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_STRIDER',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_483',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_M_COW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_484',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_R_VEG',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_485',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_486',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_487',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_488',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_TOXFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_489',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_490',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_491',
				name: 'Processor Setting: Combine and Reduce',
				result: {
					id: 'FOOD_R_EYESTEW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_R_EYEICE',
		name: 'Iced Screams',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_492',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_R_EYEICE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_493',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_R_EYEICE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_494',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_R_EYEICE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_495',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_R_EYEICE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_EYEBALLS',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE',
		name: 'Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_496',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_497',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_FISH',
		name: 'Briney Rime',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#a3ffa3ee',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_498',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FISH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_499',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FISH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_FIEND',
		name: 'Deathly-Cold Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_500',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FIEND',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_501',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FIEND',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_STAR',
		name: 'Stellar Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#5cff5c77',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_502',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_STAR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_503',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_STAR',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_CHOC',
		name: 'Chocolate Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_504',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_505',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_CARM',
		name: 'Caramel Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_506',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_507',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_FRUIT',
		name: 'Fruity Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_528',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_529',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_530',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_531',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_532',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_533',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_534',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_V_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_535',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_V_CAT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_536',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_537',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_P_ALL2',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_538',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_539',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_FRUIT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_P_LUSHFARM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_APPLE',
		name: "'Apple' Ice Cream",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_508',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_509',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_510',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_511',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_HONEY',
		name: 'Honey Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_512',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_513',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_514',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_515',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_GLITCH',
		name: 'Perpetual Ice Cream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_516',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_GLITCH',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_517',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_P_GLITCH',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_518',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_519',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_GRAH',
		name: "Vy'ice Cream",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_520',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GRAH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_521',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GRAH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_P_RADWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_522',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GRAH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_523',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_GRAH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_ICE_HOT',
		name: 'Spiced Ice',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'PRODUCT.ICECREAM.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_524',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_525',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_526',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'FOOD_P_COLDWILD',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_527',
				name: 'Processor Setting: Rapid Chilling',
				result: {
					id: 'FOOD_ICE_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'FOOD_P_HOTWILD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_BLOB',
		name: 'Most Curious Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEGEK.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_360',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_362',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_CREAM',
		name: 'Cream Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_361',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_CHOC',
		name: 'Chocolate Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_363',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_CARM',
		name: 'Caramel Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_364',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_APPLE',
		name: "'Apple' Curiosity",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_366',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_373',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_CACTUS',
		name: 'Prickly Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_367',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_371',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_JAM',
		name: 'Jam Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_370',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_372',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_JHOT',
		name: 'Startling Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_369',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_JHOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_JGLITCH',
		name: 'Unsolvable Jam Turnover',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_368',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_JGLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_CUST',
		name: 'Custard Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_374',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_FCUST',
		name: 'Salty Surprise',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_375',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_FCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_SCUST',
		name: 'Interstellar Curiosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_377',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_SCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_HONEY',
		name: 'Honey-Soaked Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_383',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_CREAM',
		name: 'Sweet Cream Dreams',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_379',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_CHOC',
		name: 'Gooey Chocolate Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_381',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_CARM',
		name: 'Gooey Caramel Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_382',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_APPLE',
		name: 'Gooey Fruit Surprise',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_384',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_391',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_CACTUS',
		name: 'Honied Throat-Sticker',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_385',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_389',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_JAM',
		name: 'Jam Oozers',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_388',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_390',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_JHOT',
		name: 'Gooey Mouthburner',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_387',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_JHOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_JGLITCH',
		name: 'Perpetual Honeycake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_386',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_JGLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_CUST',
		name: 'Gooey Custard Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_392',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_FCUST',
		name: 'Salt-Laced Honey Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_393',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_FCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CB_SCUST',
		name: 'Starbirth Delight',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Thick, Sweet Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_395',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CB_SCUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_CREAM',
		name: 'Doomed Cream Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_397',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_CHOC',
		name: 'Haunted Chocolate Dreams',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_399',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_CARM',
		name: 'Wailing Caramel Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_400',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_APPLE',
		name: "'Apple' Cake of Lost Souls",
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_402',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_409',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_CACTUS',
		name: 'Choking Monstrosity Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_403',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_407',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_JAM',
		name: 'Appalling Jam Sponge',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_406',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_408',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_JHOT',
		name: 'Cake of Burning Dread',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_405',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_JHOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_JGLITCH',
		name: 'Cake of Glass',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_404',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_JGLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_HONEY',
		name: 'Honied Angel Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_419',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_BLOB',
		name: 'Gooey Honey Puff',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKEBLOB.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_414',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_416',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_CREAM',
		name: 'Extra-Fluffy Cream Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_415',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_CHOC',
		name: 'Chocolate Dream',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_417',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_CARM',
		name: 'Fluffy Caramel Delight',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_418',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_APPLE',
		name: 'Angelic Fruitcake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_420',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_427',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_CACTUS',
		name: 'Soft and Spiky Surprise',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKEFLUFFY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_421',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_425',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_JAM',
		name: 'Jam Fluffer',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKEFLUFFY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_424',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_426',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_JHOT',
		name: 'Burning Jam Fluffer',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKEFLUFFY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_423',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_JHOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_JGLITCH',
		name: 'Perpetual Jam Fluffer',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKEFLUFFY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_422',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_JGLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MC_CUST',
		name: 'Soft Custard Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Extra-Fluffy Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKEFLUFFY.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_428',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_429',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_430',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_431',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MC_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_HONEY',
		name: 'Tortured Honey Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_437',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_BLOB',
		name: 'Itching, Creeping Honey Sponge',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_432',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_434',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_BLOB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_CREAM',
		name: 'Unbound Cream Horn',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_433',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CREAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_CHOC',
		name: 'Volatile Chocolate Fancy',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_435',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CHOC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CHOC',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_CARM',
		name: 'Caramelised Nightmare',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.TARTEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_436',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CARM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CARAMEL',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_APPLE',
		name: 'Cake of Sin',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_438',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_CRAB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_445',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_APPLE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CRAB',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_CACTUS',
		name: 'Fluffy Throatripper',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_439',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_P_DUSTFARM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_443',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CACTUS',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_DUST',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_JAM',
		name: 'Writhing Jam Puff',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_442',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_RAD',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_444',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_JAM',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_CAT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_JHOT',
		name: 'Burning Jam Surprise',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.TART.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_441',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_JHOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_HOT',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_JGLITCH',
		name: 'Unbound Monstrosity',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.TARTEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_440',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_JGLITCH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_JAM_GLITCH',
						amount: 1,
					},
					{
						id: 'FOOD_R_CREAM',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_MM_CUST',
		name: 'Cake of the Lost',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Writhing, Roiling Batter<>. Some caution is advised.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#d0ffd01e',
		icon: 'PRODUCT.REFINED.CCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_446',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_CUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_447',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_FCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_448',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_449',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_MM_CUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MMERMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_SCUSTARD',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_BLOBBUT',
		name: 'Gooey Screamer',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.CUPCAKEEVIL.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_394',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_BCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_MCUSTARD',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_396',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_V_BLOB',
						amount: 1,
					},
				],
			},
			{
				id: 'RECIPE_398',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_BLOBBUT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_BLOBBUT',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CM_HONEY',
		name: 'Monstrous Honey Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <SPECIAL>Wailing Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_401',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CM_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_MCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FOOD_CG_HONEY',
		name: 'Honied Proto-Cake',
		type: 'product',
		subtitle: 'Edible Product',
		description:
			'A highly refined food product, created in the <TECHNOLOGY>Nutrient Processor<>.\n\nThese cake-like nutrients are processed from a base of <STELLAR>Proto-Batter<>.',
		base_value: 800,
		category: 'product_category_consumable',
		trade_category: 'trade_category_none',
		color: '#ffffffff',
		icon: 'PRODUCT.REFINED.CAKE.png',
		ingredients: [],
		recipes: [
			{
				id: 'RECIPE_365',
				name: 'Processor Setting: Assemble Baked Product',
				result: {
					id: 'FOOD_CG_HONEY',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FOOD_R_GCAKEMIX',
						amount: 1,
					},
					{
						id: 'FOOD_R_HONEY',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'TECHFRAG',
		name: 'Nanite Cluster',
		type: 'substance',
		subtitle: 'Technological Currency',
		description:
			'A dense miasma of <TECHNOLOGY>Nanites<>, undulating in its potentiality. These clusters are stable, but unrestricted nanite foam can produce undesirable runaway reactions in the presence of organic matter.\n\nUsed in the construction of advanced technologies. Highly valuable to specialist traders.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#35ff354e',
		icon: 'NANITE.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_1',
				name: 'Requested Operation: Nanite Extraction',
				result: {
					id: 'TECHFRAG',
					amount: 15,
				},
				ingredients: [
					{
						id: 'BP_SALVAGE',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_4',
				name: 'Requested Operation: Doom Cycling',
				result: {
					id: 'TECHFRAG',
					amount: 50,
				},
				ingredients: [
					{
						id: 'FISHCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_6',
				name: 'Requested Operation: NOT RECOMMENDED',
				result: {
					id: 'TECHFRAG',
					amount: 50,
				},
				ingredients: [
					{
						id: 'FIENDCORE',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_11',
				name: 'Requested Operation: Reality Warping',
				result: {
					id: 'TECHFRAG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'ASTEROID3',
						amount: 35,
					},
				],
			},
			{
				id: 'REFINERECIPE_12',
				name: 'Requested Operation: Reality Filtering',
				result: {
					id: 'TECHFRAG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'ROBOT1',
						amount: 25,
					},
				],
			},
			{
				id: 'REFINERECIPE_52',
				name: 'Requested Operation: Recycle Waste Materials',
				result: {
					id: 'TECHFRAG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'SPACEGUNK2',
						amount: 5,
					},
				],
			},
			{
				id: 'REFINERECIPE_78',
				name: 'Requested Operation: Alchemical Construction',
				result: {
					id: 'TECHFRAG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'SPECIAL_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_228',
				name: 'Requested Operation: Transmutation',
				result: {
					id: 'TECHFRAG',
					amount: 1,
				},
				ingredients: [
					{
						id: 'ASTEROID1',
						amount: 15,
					},
					{
						id: 'ASTEROID2',
						amount: 15,
					},
					{
						id: 'ASTEROID3',
						amount: 25,
					},
				],
			},
		],
	},
	{
		id: 'ASTEROID2',
		name: 'Gold',
		type: 'substance',
		subtitle: 'Valuable Asteroid Mineral',
		description:
			'Highly valuable interstellar trading mineral, typically <COMMODITY>mined from asteroids<>. Occasionally found in underground planetary deposits.\n\nUniversally prized for its beauty and versatility.',
		base_value: 353,
		category: 'substance_category_exotic',
		trade_category: 'trade_category_none',
		color: '#6eff6e60',
		icon: 'SUBSTANCE.ASTEROID.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_2',
				name: 'Requested Operation: Calcite Transmutation',
				result: {
					id: 'ASTEROID2',
					amount: 100,
				},
				ingredients: [
					{
						id: 'CLAMPEARL',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_8',
				name: 'Requested Operation: Alchemical Construction',
				result: {
					id: 'ASTEROID2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'SPECIAL_POOP',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_70',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID2',
					amount: 125,
				},
				ingredients: [
					{
						id: 'ALLOY4',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_71',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID2',
					amount: 125,
				},
				ingredients: [
					{
						id: 'ALLOY5',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_72',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID2',
					amount: 125,
				},
				ingredients: [
					{
						id: 'ALLOY6',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_79',
				name: 'Requested Operation: Alchemical Construction',
				result: {
					id: 'ASTEROID2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'SPACEGUNK1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_128',
				name: 'Requested Operation: Organic / Anomaly Synthesis',
				result: {
					id: 'ASTEROID2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CREATURE1',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_161',
				name: 'Requested Operation: Pugneum Alchemy',
				result: {
					id: 'ASTEROID2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_248',
				name: 'Requested Operation: Chromatic Alchemy',
				result: {
					id: 'ASTEROID2',
					amount: 10,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
					{
						id: 'GREEN2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'SPACEGUNK4',
		name: 'Living Slime',
		type: 'substance',
		subtitle: 'Junk',
		description:
			'A heavy, oozing slime. It is moving gently, as if it has a heartbeat of its own.\n\nNutrient source: <FUEL>unknown<>.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#6fff6f35',
		icon: 'SPACEGUNK.4.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_3',
				name: 'Requested Operation: Biological Purge',
				result: {
					id: 'SPACEGUNK4',
					amount: 50,
				},
				ingredients: [
					{
						id: 'EYEBALL',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_55',
				name: 'Requested Operation: Recycle Waste Materials',
				result: {
					id: 'SPACEGUNK4',
					amount: 1,
				},
				ingredients: [
					{
						id: 'SPACEGUNK5',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'CATALYST2',
		name: 'Sodium Nitrate',
		type: 'substance',
		subtitle: 'Refined Catalytic Element',
		description:
			"An <CATALYST>advanced catalyst<>, useful for charging <COMMODITY>defensive technologies<> such as shields or hazard protection.\n \nCreated in a <TECHNOLOGY>Refiner<>, or occasionally found in crystalline form on a planet's surface.\n\nOffers a substantially improved energy-per-gram ratio over regular Sodium.",
		base_value: 82,
		category: 'substance_category_catalyst',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'SUBSTANCE.CATALYST.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_5',
				name: 'Requested Operation: Sulphur Release',
				result: {
					id: 'CATALYST2',
					amount: 50,
				},
				ingredients: [
					{
						id: 'VENTGEM',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_20',
				name: 'Requested Operation: Sodium Stabilisation',
				result: {
					id: 'CATALYST2',
					amount: 150,
				},
				ingredients: [
					{
						id: 'CATAPROD3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_27',
				name: 'Requested Operation: Process Sodium',
				result: {
					id: 'CATALYST2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CATALYST1',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_97',
				name: 'Requested Operation: Oxygenate Sodium',
				result: {
					id: 'CATALYST2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CATALYST1',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_98',
				name: 'Requested Operation: Oxygenate Sodium',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'CATALYST2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_99',
				name: 'Requested Operation: Catalyse Carbon',
				result: {
					id: 'CATALYST2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 1,
					},
					{
						id: 'CATALYST1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_100',
				name: 'Requested Operation: Catalyse Carbon',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 1,
					},
					{
						id: 'CATALYST1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_105',
				name: 'Requested Operation: Sentinel Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CATALYST1',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_106',
				name: 'Requested Operation: Sentinel Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'CATALYST2',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_138',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'CATALYST1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_139',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_148',
				name: 'Requested Operation: Harness Organic Nitrogren',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'CATALYST1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_149',
				name: 'Requested Operation: Harness Organic Nitrogren',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'CATALYST1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_150',
				name: 'Requested Operation: Feed Microbes',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'CATALYST1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_154',
				name: 'Requested Operation: Harness Organic Nitrogren',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_155',
				name: 'Requested Operation: Harness Organic Nitrogren',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_156',
				name: 'Requested Operation: Feed Microbes',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_211',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_214',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_217',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'CATALYST2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'LAND3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FUEL2',
		name: 'Condensed Carbon',
		type: 'substance',
		subtitle: 'Refined Organic Element',
		description:
			'Advanced material, processed from regular <FUEL>carbon<> in a <TECHNOLOGY>Refiner<>.\n\nThe increased molecule density offers a substantially improved energy-per-gram ratio.\n\nOccasionally found in crystalline form. Harvesting large crystals may require a <TECHNOLOGY>Advanced Mining Laser<>.',
		base_value: 24,
		category: 'substance_category_fuel',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'SUBSTANCE.FUEL.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_7',
				name: 'Requested Operation: Algal Processing',
				result: {
					id: 'FUEL2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATERPLANT',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_16',
				name: 'Requested Operation: Carbon Melting',
				result: {
					id: 'FUEL2',
					amount: 150,
				},
				ingredients: [
					{
						id: 'FUELPROD3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_26',
				name: 'Requested Operation: Condense Carbon',
				result: {
					id: 'FUEL2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_81',
				name: 'Requested Operation: Harness Energy',
				result: {
					id: 'FUEL2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 1,
					},
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_95',
				name: 'Requested Operation: Oxygenate Carbon',
				result: {
					id: 'FUEL2',
					amount: 5,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_96',
				name: 'Requested Operation: Oxygenate Carbon',
				result: {
					id: 'FUEL2',
					amount: 6,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_147',
				name: 'Requested Operation: Feed Microbes',
				result: {
					id: 'FUEL2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_153',
				name: 'Requested Operation: Feed Microbes',
				result: {
					id: 'FUEL2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_162',
				name: 'Requested Operation: Feed Microbes',
				result: {
					id: 'FUEL2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'DUSTY1',
		name: 'Pyrite',
		type: 'substance',
		subtitle: 'Localised Earth Element',
		description:
			'Local mineral extract, typically found in large deposits or extracted from common minerals after inspection with an <TECHNOLOGY>Analysis Visor<>.\n\nTypically found on planets with a <FUEL>desert environment<>.',
		base_value: 62,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#70ff7020',
		icon: 'SUBSTANCE.BIOME.DUSTY.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_10',
				name: 'Requested Operation: Metal Restructuring',
				result: {
					id: 'DUSTY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'ASTEROID2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_130',
				name: 'Requested Operation: Mineral Alchemy',
				result: {
					id: 'DUSTY1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'ASTEROID2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_188',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'DUSTY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 2,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_194',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'DUSTY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 2,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_200',
				name: 'Requested Operation: Floral Titration',
				result: {
					id: 'DUSTY1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_DUST',
						amount: 2,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_POOP',
		name: 'Faecium',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A foul-smelling compound that can be harvested from the <TRADEABLE>Gutrot Flower<>, or less desirably from the faecal matter of some species.\n\nCreatures can be fed to encourage the formation and deposition of faecium crystals.',
		base_value: 30,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'SUBSTANCE.PLANT.POOP.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_13',
				name: 'Requested Operation: Assisted Decomposition',
				result: {
					id: 'PLANT_POOP',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CREATURE1',
						amount: 3,
					},
				],
			},
			{
				id: 'REFINERECIPE_86',
				name: 'Requested Operation: Assisted Decomposition',
				result: {
					id: 'PLANT_POOP',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_107',
				name: 'Requested Operation: Runaway Decomposition',
				result: {
					id: 'PLANT_POOP',
					amount: 3,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 2,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_108',
				name: 'Requested Operation: Runaway Decomposition',
				result: {
					id: 'PLANT_POOP',
					amount: 4,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_142',
				name: 'Requested Operation: Oxygenate Microbes',
				result: {
					id: 'PLANT_POOP',
					amount: 3,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_226',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_POOP',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'GAS3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'FUEL1',
		name: 'Carbon',
		type: 'substance',
		subtitle: 'Unrefined Organic Element',
		description:
			'The building block of all organic life. Of critical importance to space travellers, as Carbon is used to <FUEL>recharge mining equipment<>.\n \nThe <TECHNOLOGY>Mining Laser<> will harvest Carbon from trees, plants, and all other forms of vegetable.',
		base_value: 12,
		category: 'substance_category_fuel',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'SUBSTANCE.FUEL.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_14',
				name: 'Requested Operation: Inefficient Burn',
				result: {
					id: 'FUEL1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_25',
				name: 'Requested Operation: Release Carbon',
				result: {
					id: 'FUEL1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_58',
				name: 'Requested Operation: Burn Plantlife',
				result: {
					id: 'FUEL1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_TOXIC',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_60',
				name: 'Requested Operation: Burn Plantlife',
				result: {
					id: 'FUEL1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_RADIO',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_61',
				name: 'Requested Operation: Burn Plantlife',
				result: {
					id: 'FUEL1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_DUST',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_62',
				name: 'Requested Operation: Burn Plantlife',
				result: {
					id: 'FUEL1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_HOT',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_63',
				name: 'Requested Operation: Burn Plantlife',
				result: {
					id: 'FUEL1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_LUSH',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'LAND2',
		name: 'Pure Ferrite',
		type: 'substance',
		subtitle: 'Processed Metallic Minerals',
		description:
			'Processed metal, free of dust and pebbles. Used to construct a wide variety of <EARTH>structures<> and <TECHNOLOGY>technologies<>.\n\nTypically purified from Ferrite dust using a <TECHNOLOGY>Refiner<>, but can occasionally be found in large deposits. Collection may require an <TECHNOLOGY>Advanced Mining Laser<>.',
		base_value: 28,
		category: 'substance_category_metal',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'SUBSTANCE.LAND.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_17',
				name: 'Requested Operation: Rare Metal Detoxification',
				result: {
					id: 'LAND2',
					amount: 150,
				},
				ingredients: [
					{
						id: 'LANDPROD3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_29',
				name: 'Requested Operation: Extract Metallic Elements',
				result: {
					id: 'LAND2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_31',
				name: 'Requested Operation: Demagnetise Metal',
				result: {
					id: 'LAND2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'LAND3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_111',
				name: 'Requested Operation: Matter Expansion',
				result: {
					id: 'LAND2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 2,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'CAVE2',
		name: 'Ionised Cobalt',
		type: 'substance',
		subtitle: 'Processed Subterranean Mineral',
		description:
			'A highly energised form of <TECHNOLOGY>Cobalt<>, this processed metal can be used to create <COMMODITY>Advanced Ion Batteries<>, a conveniently portable source of energy for the <TECHNOLOGY>Exosuit<>.\n\nIn widespread use as a key component in the creation of <TECHNOLOGY>advanced technologies and structures<>.',
		base_value: 401,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#5cff5c83',
		icon: 'SUBSTANCE.CAVE.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_18',
				name: 'Requested Operation: Cobalt Cracking',
				result: {
					id: 'CAVE2',
					amount: 150,
				},
				ingredients: [
					{
						id: 'CAVEPROD3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_23',
				name: 'Requested Operation: Ionise Mineral',
				result: {
					id: 'CAVE2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CAVE1',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_126',
				name: 'Requested Operation: Efficient Cobalt Ionisation',
				result: {
					id: 'CAVE2',
					amount: 5,
				},
				ingredients: [
					{
						id: 'CAVE1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_127',
				name: 'Requested Operation: Efficient Cobalt Ionisation',
				result: {
					id: 'CAVE2',
					amount: 6,
				},
				ingredients: [
					{
						id: 'CAVE2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_140',
				name: 'Requested Operation: Bonded Cobalt Extraction',
				result: {
					id: 'CAVE2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_143',
				name: 'Requested Operation: Pugneum Washing',
				result: {
					id: 'CAVE2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_157',
				name: 'Requested Operation: Ionise Bulbs',
				result: {
					id: 'CAVE2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'CAVE1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_159',
				name: 'Requested Operation: Ionise Bulbs',
				result: {
					id: 'CAVE2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'CAVE2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'WATER2',
		name: 'Chlorine',
		type: 'substance',
		subtitle: 'Processed Aquatic Mineral',
		description:
			'A reactive element most easily harvested by processing the salt-infused minerals found in <TECHNOLOGY>oceans<>.\n\nUsed in the manufacture of advanced technologies.',
		base_value: 602,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#8aff8a42',
		icon: 'SUBSTANCE.WATER.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_19',
				name: 'Requested Operation: Chloride De-latticing',
				result: {
					id: 'WATER2',
					amount: 150,
				},
				ingredients: [
					{
						id: 'WATERPROD3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_46',
				name: 'Requested Operation: Concentrate Salt',
				result: {
					id: 'WATER2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATER1',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_124',
				name: 'Requested Operation: Efficient Salt Evaporation',
				result: {
					id: 'WATER2',
					amount: 5,
				},
				ingredients: [
					{
						id: 'WATER1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_125',
				name: 'Requested Operation: Chlorine Expansion',
				result: {
					id: 'WATER2',
					amount: 6,
				},
				ingredients: [
					{
						id: 'WATER2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_141',
				name: 'Requested Operation: Bonded Chlorine Extraction',
				result: {
					id: 'WATER2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_144',
				name: 'Requested Operation: Pugneum Washing',
				result: {
					id: 'WATER2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_158',
				name: 'Requested Operation: Dissolve Natural Salts',
				result: {
					id: 'WATER2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_160',
				name: 'Requested Operation: Dissolve Natural Salts',
				result: {
					id: 'WATER2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'WATER2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'OXYGEN',
		name: 'Oxygen',
		type: 'substance',
		subtitle: 'Concentrated Liquid Fuel',
		description:
			'Integral to the atmospheric filtering technology at the heart of the exosuit <FUEL>life support system<>.\n\nExosuit material processing allows oxygen to be harvested directly from appropriate planetary flora.\n\nOther plantlife may be scanned with the <TECHNOLOGY>Analysis Visor<> to reveal alternative oxygen supplies.',
		base_value: 34,
		category: 'substance_category_fuel',
		trade_category: 'trade_category_none',
		color: '#38ff3830',
		icon: 'SUBSTANCE.AIR.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_21',
				name: 'Requested Operation: Oxygen Decompression',
				result: {
					id: 'OXYGEN',
					amount: 150,
				},
				ingredients: [
					{
						id: 'OXYPROD3',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_65',
				name: 'Requested Operation: Extract Micro-Bubbles',
				result: {
					id: 'OXYGEN',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_146',
				name: 'Requested Operation: Release Captured Oxygen',
				result: {
					id: 'OXYGEN',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_152',
				name: 'Requested Operation: Release Captured Oxygen',
				result: {
					id: 'OXYGEN',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_238',
				name: 'Requested Operation: Artificial Photosynthesis',
				result: {
					id: 'OXYGEN',
					amount: 10,
				},
				ingredients: [
					{
						id: 'PLANT_TOXIC',
						amount: 1,
					},
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_239',
				name: 'Requested Operation: Artificial Photosynthesis',
				result: {
					id: 'OXYGEN',
					amount: 10,
				},
				ingredients: [
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_240',
				name: 'Requested Operation: Artificial Photosynthesis',
				result: {
					id: 'OXYGEN',
					amount: 10,
				},
				ingredients: [
					{
						id: 'PLANT_DUST',
						amount: 1,
					},
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_241',
				name: 'Requested Operation: Artificial Photosynthesis',
				result: {
					id: 'OXYGEN',
					amount: 10,
				},
				ingredients: [
					{
						id: 'PLANT_HOT',
						amount: 1,
					},
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_242',
				name: 'Requested Operation: Artificial Photosynthesis',
				result: {
					id: 'OXYGEN',
					amount: 10,
				},
				ingredients: [
					{
						id: 'PLANT_RADIO',
						amount: 1,
					},
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_243',
				name: 'Requested Operation: Artificial Photosynthesis',
				result: {
					id: 'OXYGEN',
					amount: 10,
				},
				ingredients: [
					{
						id: 'PLANT_LUSH',
						amount: 1,
					},
					{
						id: 'PLANT_WATER',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'LAUNCHSUB',
		name: 'Di-hydrogen',
		type: 'substance',
		subtitle: 'High Energy Substance',
		description:
			'A stable, crystalline form of hydrogen remarkable both for its extreme energy density and its stability at atmospheric pressures.\n\nCommon to all worlds, Di-hydrogen is found in the form of large <TECHNOLOGY>blue crystals<>. It is a key component of <COMMODITY>Starship Launch Fuel<>.',
		base_value: 34,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#5aff5a7d',
		icon: 'SUBSTANCE.LAUNCHSUB.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_22',
				name: 'Requested Operation: Di-hydrogen Cycling',
				result: {
					id: 'LAUNCHSUB',
					amount: 50,
				},
				ingredients: [
					{
						id: 'JELLY',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_56',
				name: 'Requested Operation: Tritium Cycling',
				result: {
					id: 'LAUNCHSUB',
					amount: 1,
				},
				ingredients: [
					{
						id: 'ROCKETSUB',
						amount: 5,
					},
				],
			},
		],
	},
	{
		id: 'CAVE1',
		name: 'Cobalt',
		type: 'substance',
		subtitle: 'Subterranean Mineral',
		description:
			'Mined from <TECHNOLOGY>underground minerals<>, cobalt is found in plentiful supply in caves and caverns. Useful in the manufacture of <COMMODITY>Ion Batteries<>.\n\nIt is used in the creation of several technologies and structures, and can be processed in a <TECHNOLOGY>Refiner<> to make the most of its inherent charge.',
		base_value: 198,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#5cff5c83',
		icon: 'SUBSTANCE.CAVE.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_24',
				name: 'Requested Operation: Deionise Mineral',
				result: {
					id: 'CAVE1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'CAVE2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'CATALYST1',
		name: 'Sodium',
		type: 'substance',
		subtitle: 'Unrefined Catalytic Element',
		description:
			'A powerful <CATALYST>catalyst<>, useful for charging <COMMODITY>defensive technologies<> such as shields or hazard protection.\n \nExosuit material handling technology allows automatic harvesting from appropriate <CATALYST<>sodium-rich flora<>.\n\nA vital ingredient in the creation of many advanced devices, products and components.',
		base_value: 41,
		category: 'substance_category_catalyst',
		trade_category: 'trade_category_none',
		color: '#6dff6d15',
		icon: 'SUBSTANCE.CATALYST.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_28',
				name: 'Requested Operation: Free Sodium',
				result: {
					id: 'CATALYST1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_64',
				name: 'Requested Operation: Extract Organic Sodium',
				result: {
					id: 'CATALYST1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_145',
				name: 'Requested Operation: Extract Organic Sodium',
				result: {
					id: 'CATALYST1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_151',
				name: 'Requested Operation: Extract Organic Sodium',
				result: {
					id: 'CATALYST1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_CAVE',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'LAND3',
		name: 'Magnetised Ferrite',
		type: 'substance',
		subtitle: 'Charged Metallic Element',
		description:
			'Highly processed metal, requiring several stages of processing in a <TECHNOLOGY>Refiner<>.\n\nUsed in the creation of advanced structures and technologies. Avoid ingestion.',
		base_value: 82,
		category: 'substance_category_metal',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'SUBSTANCE.LAND.3.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_30',
				name: 'Requested Operation: Magnetise Metal',
				result: {
					id: 'LAND3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND2',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_88',
				name: 'Requested Operation: Carbonise Metal',
				result: {
					id: 'LAND3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_89',
				name: 'Requested Operation: Carbonise Metal',
				result: {
					id: 'LAND3',
					amount: 2,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_90',
				name: 'Requested Operation: Carbonise Metal',
				result: {
					id: 'LAND3',
					amount: 2,
				},
				ingredients: [
					{
						id: 'LAND2',
						amount: 1,
					},
					{
						id: 'FUEL1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_91',
				name: 'Requested Operation: Carbonise Metal',
				result: {
					id: 'LAND3',
					amount: 3,
				},
				ingredients: [
					{
						id: 'LAND2',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_112',
				name: 'Requested Operation: Matter Expansion',
				result: {
					id: 'LAND3',
					amount: 3,
				},
				ingredients: [
					{
						id: 'LAND2',
						amount: 2,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_113',
				name: 'Requested Operation: Matter Expansion',
				result: {
					id: 'LAND3',
					amount: 4,
				},
				ingredients: [
					{
						id: 'LAND3',
						amount: 3,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_131',
				name: 'Requested Operation: Mineral Alchemy',
				result: {
					id: 'LAND3',
					amount: 10,
				},
				ingredients: [
					{
						id: 'ASTEROID3',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_163',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 4,
				},
				ingredients: [
					{
						id: 'BLUE2',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_164',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 2,
				},
				ingredients: [
					{
						id: 'RED2',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_165',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 3,
				},
				ingredients: [
					{
						id: 'GREEN2',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_166',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'YELLOW2',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_171',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 4,
				},
				ingredients: [
					{
						id: 'EX_RED',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_172',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 8,
				},
				ingredients: [
					{
						id: 'EX_BLUE',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_173',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 6,
				},
				ingredients: [
					{
						id: 'EX_GREEN',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_174',
				name: 'Requested Operation: Stellar / Metal Fusion',
				result: {
					id: 'LAND3',
					amount: 2,
				},
				ingredients: [
					{
						id: 'EX_YELLOW',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_229',
				name: 'Requested Operation: Deep Metal Compression',
				result: {
					id: 'LAND3',
					amount: 5,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
					{
						id: 'ASTEROID1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_230',
				name: 'Requested Operation: Deep Metal Compression',
				result: {
					id: 'LAND3',
					amount: 8,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
					{
						id: 'ASTEROID2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_231',
				name: 'Requested Operation: Deep Metal Compression',
				result: {
					id: 'LAND3',
					amount: 12,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
					{
						id: 'ASTEROID3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'STELLAR2',
		name: 'Chromatic Metal',
		type: 'substance',
		subtitle: 'Highly Refined Stellar Metal',
		description:
			'A processed metal alloy, created in a <TECHNOLOGY>Refiner<> from the <STELLAR>stellar metals<>: <COMMODITY>Copper<>, <FUEL>Cadmium<>, <TRADEABLE>Emeril<> and <TECHNOLOGY>Indium<>.\n\nThe <SPECIAL>rarer<> the stellar metal, the more Chromatic Metal it will produce.\n\nThis valuable metal is used in the creation of many <TECHNOLOGY>advanced technologies<>.',
		base_value: 245,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'SUBSTANCE.STELLAR.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_32',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RED2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_33',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'BLUE2',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_34',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'GREEN2',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_35',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'YELLOW2',
						amount: 2,
					},
				],
			},
			{
				id: 'REFINERECIPE_36',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'EX_RED',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_37',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'EX_BLUE',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_38',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'EX_GREEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_39',
				name: 'Requested Operation: Extract Chromatic Material',
				result: {
					id: 'STELLAR2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'EX_YELLOW',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_167',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'RED2',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_168',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 3,
				},
				ingredients: [
					{
						id: 'GREEN2',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_169',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'YELLOW2',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_170',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'BLUE2',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_175',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'EX_RED',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_176',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 8,
				},
				ingredients: [
					{
						id: 'EX_BLUE',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_177',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 6,
				},
				ingredients: [
					{
						id: 'EX_GREEN',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_178',
				name: 'Requested Operation: Chromatic Metal Fusion',
				result: {
					id: 'STELLAR2',
					amount: 2,
				},
				ingredients: [
					{
						id: 'EX_YELLOW',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_244',
				name: null,
				result: {
					id: 'STELLAR2',
					amount: 5,
				},
				ingredients: [
					{
						id: 'ASTEROID1',
						amount: 1,
					},
					{
						id: 'ASTEROID2',
						amount: 1,
					},
					{
						id: 'YELLOW2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_245',
				name: null,
				result: {
					id: 'STELLAR2',
					amount: 10,
				},
				ingredients: [
					{
						id: 'ASTEROID1',
						amount: 1,
					},
					{
						id: 'ASTEROID2',
						amount: 1,
					},
					{
						id: 'RED2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_246',
				name: null,
				result: {
					id: 'STELLAR2',
					amount: 20,
				},
				ingredients: [
					{
						id: 'ASTEROID1',
						amount: 1,
					},
					{
						id: 'ASTEROID2',
						amount: 1,
					},
					{
						id: 'GREEN2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_247',
				name: null,
				result: {
					id: 'STELLAR2',
					amount: 30,
				},
				ingredients: [
					{
						id: 'ASTEROID1',
						amount: 1,
					},
					{
						id: 'ASTEROID2',
						amount: 1,
					},
					{
						id: 'BLUE2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'LAND1',
		name: 'Ferrite Dust',
		type: 'substance',
		subtitle: 'Metallic Mineral Extract',
		description:
			'An abundant mineral element, found in <EARTH>rock formations<> and other areas of geological interest. Easily extracted using a <TECHNOLOGY>Mining Laser<>.\n\nTypically requires processing in a <TECHNOLOGY>Refiner<> before use in construction or technology manufacture.',
		base_value: 14,
		category: 'substance_category_metal',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'SUBSTANCE.LAND.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_40',
				name: 'Requested Operation: Ferrite Dust Extraction',
				result: {
					id: 'LAND1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_41',
				name: 'Requested Operation: Ferrite Dust Extraction',
				result: {
					id: 'LAND1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_42',
				name: 'Requested Operation: Ferrite Dust Extraction',
				result: {
					id: 'LAND1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_43',
				name: 'Requested Operation: Ferrite Dust Extraction',
				result: {
					id: 'LAND1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_44',
				name: 'Requested Operation: Ferrite Dust Extraction',
				result: {
					id: 'LAND1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_45',
				name: 'Requested Operation: Ferrite Dust Extraction',
				result: {
					id: 'LAND1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_53',
				name: 'Requested Operation: Recycle Waste Materials',
				result: {
					id: 'LAND1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'SPACEGUNK3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'WATER1',
		name: 'Salt',
		type: 'substance',
		subtitle: 'Aquatic Mineral Extract',
		description:
			'A naturally occuring salt, found in abundance in <TECHNOLOGY>underwater minerals<>.\n\nCan be processed in a <TECHNOLOGY>Refiner<> to create <TRADEABLE>Chlorine<>. This refined form is used in the manufacture of advanced products and technologies.',
		base_value: 299,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#8aff8a42',
		icon: 'SUBSTANCE.WATER.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_47',
				name: 'Requested Operation: Salt Production',
				result: {
					id: 'WATER1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'WATER2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_85',
				name: 'Requested Operation: Rapid Formation / Evaporation',
				result: {
					id: 'WATER1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'GAS2',
		name: 'Radon',
		type: 'substance',
		subtitle: 'Compressed Atmospheric Gas',
		description:
			'A colourless, odourless <TRADEABLE>gas<> with a relatively short half-life. \n\nFound in both <COMMODITY>Radioactive<> and <TECHNOLOGY>Frozen<> atmospheres, this gas is produced by the decay of other high-energy elements.',
		base_value: 20,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#37ff3780',
		icon: 'GAS.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_48',
				name: 'Requested Operation: Gas Transfer',
				result: {
					id: 'GAS2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 3,
					},
				],
			},
			{
				id: 'REFINERECIPE_132',
				name: 'Requested Operation: Gas Transfer',
				result: {
					id: 'GAS2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_135',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'GAS2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'GAS3',
		name: 'Nitrogen',
		type: 'substance',
		subtitle: 'Compressed Atmospheric Gas',
		description:
			'A reactive atmospheric <TRADEABLE>gas<> found wherever there is organic life.\n\nNitrogen is readily harvested from the atmospheres of <TRADEABLE>Lush<> and <TRADEABLE>Toxic<> planets.',
		base_value: 20,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#92ff921f',
		icon: 'GAS.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_49',
				name: 'Requested Operation: Gas Transfer',
				result: {
					id: 'GAS3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 3,
					},
				],
			},
			{
				id: 'REFINERECIPE_133',
				name: 'Requested Operation: Gas Transfer',
				result: {
					id: 'GAS3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_136',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'GAS3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'GAS1',
		name: 'Sulphurine',
		type: 'substance',
		subtitle: 'Compressed Atmospheric Gas',
		description:
			'A pungent atmospheric <TRADEABLE>gas<>. High concentrations are extremely hazardous to organic life.\n\nWith the aid of <TECHNOLOGY>specialised machinery<>, can be extracted from the atmospheres of <FUEL>Scorched<> and <SPECIAL>Desert<> planets.',
		base_value: 20,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#5eff5e3a',
		icon: 'GAS.3.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_50',
				name: 'Requested Operation: Gas Transfer',
				result: {
					id: 'GAS1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 3,
					},
				],
			},
			{
				id: 'REFINERECIPE_134',
				name: 'Requested Operation: Gas Transfer',
				result: {
					id: 'GAS1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_137',
				name: 'Requested Operation: Gas Catalysation',
				result: {
					id: 'GAS1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'SPACEGUNK5',
		name: 'Viscous Fluids',
		type: 'substance',
		subtitle: 'Junk',
		description:
			'An unnaturally thick liquid of dubious colour. Its origins are impossible to fathom.\n\nAppears to have some mild magnetic properties.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#6fff6f35',
		icon: 'SPACEGUNK.5.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_51',
				name: 'Requested Operation: Recycle Waste Materials',
				result: {
					id: 'SPACEGUNK5',
					amount: 1,
				},
				ingredients: [
					{
						id: 'SPACEGUNK1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'SPACEGUNK2',
		name: 'Runaway Mould',
		type: 'substance',
		subtitle: 'Junk',
		description:
			'An out of control mould growth that builds up in poorly-maintained machinery.\n\nLikely to be several different species of mould, merged together into one super-colony.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#6fff6f35',
		icon: 'SPACEGUNK.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_54',
				name: 'Requested Operation: Recycle Waste Materials',
				result: {
					id: 'SPACEGUNK2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'SPACEGUNK4',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'CREATURE1',
		name: 'Mordite',
		type: 'substance',
		subtitle: 'Harvested Substance',
		description:
			'Despite much study, little is known about this haunting, crystalline compound.\n\nIt is released from the cadavers of dying creatures, but can also be specifically <TRADEABLE>cultivated<> and harvested from the <SPECIAL>Mordite Root<> plant.',
		base_value: 40,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#27ff2741',
		icon: 'SUBSTANCE.CREATURE.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_66',
				name: 'Requested Operation: Organic Reassembly',
				result: {
					id: 'CREATURE1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'PLANT_POOP',
						amount: 3,
					},
				],
			},
			{
				id: 'REFINERECIPE_87',
				name: 'Requested Operation: Organic Reassembly',
				result: {
					id: 'CREATURE1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
					{
						id: 'FUEL2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_103',
				name: 'Requested Operation: Anomaly / Organic Hybridisation',
				result: {
					id: 'CREATURE1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_104',
				name: 'Requested Operation: Anomaly / Organic Hybridisation',
				result: {
					id: 'CREATURE1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 1,
					},
					{
						id: 'ROBOT1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'ASTEROID1',
		name: 'Silver',
		type: 'substance',
		subtitle: 'Valuable Asteroid Mineral',
		description:
			'Valuable interstellar trading mineral, typically <COMMODITY>mined from asteroids<>. Occasionally found in underground planetary deposits.\n\nPrized by people in all systems for its lustre and shine.',
		base_value: 186,
		category: 'substance_category_exotic',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'SUBSTANCE.ASTEROID.1.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_67',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID1',
					amount: 250,
				},
				ingredients: [
					{
						id: 'ALLOY1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_68',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID1',
					amount: 250,
				},
				ingredients: [
					{
						id: 'ALLOY2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_69',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID1',
					amount: 250,
				},
				ingredients: [
					{
						id: 'ALLOY3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'ASTEROID3',
		name: 'Platinum',
		type: 'substance',
		subtitle: 'Valuable Asteroid Mineral',
		description:
			'Extremely valuable interstellar trading mineral, typically <COMMODITY>mined from asteroids<>. Occasionally found in underground planetary deposits.\n\nUniversally prized for its hardiness and versatility.',
		base_value: 505,
		category: 'substance_category_exotic',
		trade_category: 'trade_category_none',
		color: '#75ff7575',
		icon: 'SUBSTANCE.ASTEROID.3.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_73',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID3',
					amount: 250,
				},
				ingredients: [
					{
						id: 'ALLOY7',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_74',
				name: 'Requested Operation: Extreme Alloy Separation',
				result: {
					id: 'ASTEROID3',
					amount: 250,
				},
				ingredients: [
					{
						id: 'ALLOY8',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_80',
				name: 'Requested Operation: Transmutation',
				result: {
					id: 'ASTEROID3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'ASTEROID2',
						amount: 1,
					},
					{
						id: 'ASTEROID1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_249',
				name: 'Requested Operation: Chromatic Alchemy',
				result: {
					id: 'ASTEROID3',
					amount: 10,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 250,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_HOT',
		name: 'Solanium',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A powerful chemical that has resisted attempts at synthesis. It can be harvested from the bark of the <TRADEABLE>Solar Vine<>.\n\nThe vine requires a <FUEL>hot climate<> to thrive in the wild, but can be farmed in all environments with the aid of a <TECHNOLOGY>Hydroponics Tray<>.',
		base_value: 70,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#43ff4318',
		icon: 'SUBSTANCE.PLANT.HOT.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_82',
				name: 'Requested Operation: Sulphur Injection',
				result: {
					id: 'PLANT_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_123',
				name: 'Requested Operation: Organic Expansion',
				result: {
					id: 'PLANT_HOT',
					amount: 2,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 1,
					},
					{
						id: 'PLANT_HOT',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_184',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_222',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_HOT',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 1,
					},
					{
						id: 'GAS1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'RADIO1',
		name: 'Uranium',
		type: 'substance',
		subtitle: 'Localised Earth Element',
		description:
			'Local mineral extract, typically found in large deposits or extracted from common minerals after inspection with an <TECHNOLOGY>Analysis Visor<>.\n\nTypically found on planets with a <CATALYST>radioactive environment<>.',
		base_value: 62,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#adffad00',
		icon: 'SUBSTANCE.BIOME.RADIO.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_83',
				name: 'Requested Operation: Catalyse Radiation',
				result: {
					id: 'RADIO1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 1,
					},
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_190',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'RADIO1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 2,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_196',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'RADIO1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'HOT1',
						amount: 2,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_199',
				name: 'Requested Operation: Floral Titration',
				result: {
					id: 'RADIO1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_RADIO',
						amount: 2,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_210',
				name: 'Requested Operation: Metal Enrichment',
				result: {
					id: 'RADIO1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'GAS2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_213',
				name: 'Requested Operation: Metal Enrichment',
				result: {
					id: 'RADIO1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_216',
				name: 'Requested Operation: Metal Enrichment',
				result: {
					id: 'RADIO1',
					amount: 3,
				},
				ingredients: [
					{
						id: 'GAS2',
						amount: 1,
					},
					{
						id: 'LAND3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'TOXIC1',
		name: 'Ammonia',
		type: 'substance',
		subtitle: 'Localised Earth Element',
		description:
			'Local mineral extract, typically found in large deposits or extracted from common minerals after inspection with an <TECHNOLOGY>Analysis Visor<>.\n\nTypically found on planets with a <TRADEABLE>toxic environment<>.',
		base_value: 62,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#a6ffa64d',
		icon: 'SUBSTANCE.BIOME.TOXIC.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_84',
				name: 'Requested Operation: Organic Fusion',
				result: {
					id: 'TOXIC1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS3',
						amount: 1,
					},
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_185',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'TOXIC1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 2,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_191',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'TOXIC1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 2,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_197',
				name: 'Requested Operation: Floral Titration',
				result: {
					id: 'TOXIC1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_TOXIC',
						amount: 2,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'LAUNCHSUB2',
		name: 'Deuterium',
		type: 'substance',
		subtitle: 'High Energy Substance',
		description:
			"A stable hydrogen isotope used heavily in both small-scale fusion reactors and neutron-scattering shield technology.\n\nDeuterium very rarely occurs naturally. Most of the galaxy's supply comes from the processing of <TECHNOLOGY>Di-hydrogen<> in <TECHNOLOGY>Refiners<>.",
		base_value: 34,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#5aff5a7d',
		icon: 'SUBSTANCE.LAUNCHSUB.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_92',
				name: 'Requested Operation: Di-hydrogen Cycling',
				result: {
					id: 'LAUNCHSUB2',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAUNCHSUB',
						amount: 1,
					},
					{
						id: 'ROCKETSUB',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'SPACEGUNK3',
		name: 'Rusted Metal',
		type: 'substance',
		subtitle: 'Junk',
		description:
			'Handfuls of corroded metal, distorted by years of exposure to the harsh environment.\n\nHandle with care.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#6fff6f35',
		icon: 'SPACEGUNK.3.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_93',
				name: 'Requested Operation: Oxidise Metal',
				result: {
					id: 'SPACEGUNK3',
					amount: 2,
				},
				ingredients: [
					{
						id: 'LAND2',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_94',
				name: 'Requested Operation: Oxidise Metal',
				result: {
					id: 'SPACEGUNK3',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LAND1',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'COLD1',
		name: 'Dioxite',
		type: 'substance',
		subtitle: 'Localised Earth Element',
		description:
			'Local mineral extract, typically found in large deposits or extracted from common minerals after inspection with an <TECHNOLOGY>Analysis Visor<>.\n\nTypically found on planets with a <TECHNOLOGY>frozen environment<>.',
		base_value: 62,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#4fff4fd0',
		icon: 'SUBSTANCE.BIOME.COLD.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_101',
				name: 'Requested Operation: Advanced Carbon Processing',
				result: {
					id: 'COLD1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'FUEL1',
						amount: 1,
					},
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_102',
				name: 'Requested Operation: Advanced Carbon Processing',
				result: {
					id: 'COLD1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'FUEL2',
						amount: 1,
					},
					{
						id: 'CATALYST2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_187',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'COLD1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 2,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_193',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'COLD1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 2,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_198',
				name: 'Requested Operation: Floral Titration',
				result: {
					id: 'COLD1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_SNOW',
						amount: 2,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_CAVE',
		name: 'Marrow Bulb',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A glowing organic bulb, harvested from the <TRADEABLE>Cave Marrow plant<> found growing <TECHNOLOGY>underground<>.\n\nThe Cave Marrow has proved resistant to domestication, and no farmable cultivars are known to exist. As such, marrow bulbs must be harvested by hand in the wild.',
		base_value: 41,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#6fff6f35',
		icon: 'SUBSTANCE.PLANT.CAVE.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_109',
				name: 'Requested Operation: Fertiliser Synthesis',
				result: {
					id: 'PLANT_CAVE',
					amount: 3,
				},
				ingredients: [
					{
						id: 'CATALYST1',
						amount: 2,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_110',
				name: 'Requested Operation: Fertiliser Synthesis',
				result: {
					id: 'PLANT_CAVE',
					amount: 4,
				},
				ingredients: [
					{
						id: 'CATALYST2',
						amount: 1,
					},
					{
						id: 'CREATURE1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_224',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_CAVE',
					amount: 1,
				},
				ingredients: [
					{
						id: 'CAVE1',
						amount: 1,
					},
					{
						id: 'GAS3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'RED2',
		name: 'Cadmium',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Red',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star. Such stellar material ends up forming deposits in the crust of local planets.\n\nCadmium is found on planets orbiting <FUEL>red stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<> for use in the manufacture of advanced technologies.',
		base_value: 234,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'SUBSTANCE.RED.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_114',
				name: 'Requested Operation: Chromatic Expansion',
				result: {
					id: 'RED2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'RED2',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'BLUE2',
		name: 'Indium',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Blue',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star. Such stellar material ends up forming deposits in the crust of local planets.\n\nIndium is found on planets orbiting <TECHNOLOGY>blue stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<> for use in the manufacture of advanced technologies.',
		base_value: 464,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#38ff387d',
		icon: 'SUBSTANCE.BLUE.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_115',
				name: 'Requested Operation: Chromatic Expansion',
				result: {
					id: 'BLUE2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'BLUE2',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'GREEN2',
		name: 'Emeril',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Green',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star.\n\nEmeril is found on planets orbiting <TRADEABLE>green stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<> for use in the manufacture of advanced technologies.',
		base_value: 348,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#61ff611c',
		icon: 'SUBSTANCE.GREEN.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_116',
				name: 'Requested Operation: Chromatic Expansion',
				result: {
					id: 'GREEN2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'GREEN2',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'YELLOW2',
		name: 'Copper',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Yellow',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star. Such stellar material ends up forming deposits in the crust of local planets.\n\nCopper is found on planets orbiting <CATALYST>yellow stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<> for use in the manufacture of advanced technologies.',
		base_value: 121,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#90ff9010',
		icon: 'SUBSTANCE.YELLOW.2.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_117',
				name: 'Requested Operation: Chromatic Expansion',
				result: {
					id: 'YELLOW2',
					amount: 4,
				},
				ingredients: [
					{
						id: 'YELLOW2',
						amount: 1,
					},
					{
						id: 'STELLAR2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_LUSH',
		name: 'Star Bulb',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A beautiful gemstone, this prized product is the engorged, luminescent berry of the <TRADEABLE>Star Bramble<>.\n\nThe host plant requires <TRADEABLE>lush conditions<> to thrive in the wild, but can be farmed in all environments with the aid of a <TECHNOLOGY>Hydroponics Tray<>.',
		base_value: 32,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#8dff8dab',
		icon: 'SUBSTANCE.PLANT.LUSH.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_118',
				name: 'Requested Operation: Organic Expansion',
				result: {
					id: 'PLANT_LUSH',
					amount: 2,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 1,
					},
					{
						id: 'PLANT_LUSH',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_179',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_LUSH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_223',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_LUSH',
					amount: 1,
				},
				ingredients: [
					{
						id: 'LUSH1',
						amount: 1,
					},
					{
						id: 'GAS3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_DUST',
		name: 'Cactus Flesh',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'Succulent, edible cactus flesh from the <TRADEABLE>Echinocactus plant<>. As well as being juicy on the tongue, the flesh has many industrial uses.\n\nThe Echinocactus thrives only on <FUEL>desert planets<>, but can be farmed in all environments with the aid of a <TECHNOLOGY>Hydroponics Tray<>..',
		base_value: 28,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#96ff9626',
		icon: 'SUBSTANCE.PLANT.DUSTY.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_119',
				name: 'Requested Operation: Organic Expansion',
				result: {
					id: 'PLANT_DUST',
					amount: 2,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 1,
					},
					{
						id: 'PLANT_DUST',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_180',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_DUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_221',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_DUST',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 1,
					},
					{
						id: 'GAS1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_TOXIC',
		name: 'Fungal Mould',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'An oddly-glowing substance, harvested from the gills of <TRADEABLE>Fungal Clusters<>.\n\nThe host plant requires a <TRADEABLE>toxic climate<> to thrive in the wild, but can be farmed in all environments with the aid of a <TECHNOLOGY>Hydroponics Tray<>.',
		base_value: 16,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#a6ffa64d',
		icon: 'SUBSTANCE.PLANT.TOXIC.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_120',
				name: 'Requested Operation: Organic Expansion',
				result: {
					id: 'PLANT_TOXIC',
					amount: 2,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 1,
					},
					{
						id: 'PLANT_TOXIC',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_181',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_TOXIC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_218',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_TOXIC',
					amount: 1,
				},
				ingredients: [
					{
						id: 'TOXIC1',
						amount: 1,
					},
					{
						id: 'GAS3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_RADIO',
		name: 'Gamma Root',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A strange substance that seems to slowly shift the air around it. It is found in the roots of the <TRADEABLE>Gamma Weed plant<>.\n\nGamma Weed requires <COMMODITY>high background radiation<> to thrive in the wild, but can be farmed in all environments with the aid of a <TECHNOLOGY>Hydroponics Tray<>.',
		base_value: 16,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#87ff871d',
		icon: 'SUBSTANCE.PLANT.RADIO.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_121',
				name: 'Requested Operation: Organic Expansion',
				result: {
					id: 'PLANT_RADIO',
					amount: 2,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 1,
					},
					{
						id: 'PLANT_RADIO',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_182',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_RADIO',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_220',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_RADIO',
					amount: 1,
				},
				ingredients: [
					{
						id: 'RADIO1',
						amount: 1,
					},
					{
						id: 'GAS2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_SNOW',
		name: 'Frost Crystal',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A beautiful blue crystal, this organic compound possesses both great hardiness and a shimmering translucence. It is harvested from the leaves of <TRADEABLE>Frostwort<>.\n\nFrostwort requires <TECHNOLOGY>frozen conditions<> to thrive in the wild, but can be farmed in all environments with the aid of a <TECHNOLOGY>Hydroponics Tray<>.',
		base_value: 12,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#4fff4fd0',
		icon: 'SUBSTANCE.PLANT.SNOW.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_122',
				name: 'Requested Operation: Organic Expansion',
				result: {
					id: 'PLANT_SNOW',
					amount: 2,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 1,
					},
					{
						id: 'PLANT_SNOW',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_183',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_SNOW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 2,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_219',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_SNOW',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 1,
					},
					{
						id: 'GAS2',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'LUSH1',
		name: 'Paraffinium',
		type: 'substance',
		subtitle: 'Localised Earth Element',
		description:
			'Local mineral extract, typically found in large deposits or extracted from common minerals after inspection with an <TECHNOLOGY>Analysis Visor<>.\n\nTypically found on planets with a <TRADEABLE>tropical environment<>.',
		base_value: 62,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#40ff404f',
		icon: 'SUBSTANCE.BIOME.LUSH.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_129',
				name: 'Requested Operation: Mineral Alchemy',
				result: {
					id: 'LUSH1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'ASTEROID1',
						amount: 1,
					},
					{
						id: 'OXYGEN',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_186',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'LUSH1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 2,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_192',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'LUSH1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'DUSTY1',
						amount: 2,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_202',
				name: 'Requested Operation: Floral Titration',
				result: {
					id: 'LUSH1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_LUSH',
						amount: 2,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_209',
				name: 'Requested Operation: Loosen Bonds',
				result: {
					id: 'LUSH1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_212',
				name: 'Requested Operation: Loosen Bonds',
				result: {
					id: 'LUSH1',
					amount: 2,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_215',
				name: 'Requested Operation: Loosen Bonds',
				result: {
					id: 'LUSH1',
					amount: 3,
				},
				ingredients: [
					{
						id: 'GAS1',
						amount: 1,
					},
					{
						id: 'LAND3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'HOT1',
		name: 'Phosphorus',
		type: 'substance',
		subtitle: 'Localised Earth Element',
		description:
			'Local mineral extract, typically found in large deposits or extracted from common minerals after inspection with an <TECHNOLOGY>Analysis Visor<>.\n\nTypically found on planets with a <FUEL>scorched environment<>.',
		base_value: 62,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#24ff2400',
		icon: 'SUBSTANCE.BIOME.HOT.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_189',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'HOT1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 2,
					},
					{
						id: 'LAND1',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_195',
				name: 'Requested Operation: Environmental Element Transfer',
				result: {
					id: 'HOT1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'COLD1',
						amount: 2,
					},
					{
						id: 'LAND2',
						amount: 1,
					},
				],
			},
			{
				id: 'REFINERECIPE_201',
				name: 'Requested Operation: Floral Titration',
				result: {
					id: 'HOT1',
					amount: 1,
				},
				ingredients: [
					{
						id: 'PLANT_HOT',
						amount: 2,
					},
					{
						id: 'WATER1',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'PLANT_WATER',
		name: 'Kelp Sac',
		type: 'substance',
		subtitle: 'Harvested Agricultural Substance',
		description:
			'A rubbery, luminescent sac harvested from <TECHNOLOGY>underwater<> <TRADEABLE>Candle Kelp<> plants.\n\nAgricultural science has not yet tamed the Candle Kelp. As such, these sacs cannot be farmed.',
		base_value: 41,
		category: 'substance_category_flora',
		trade_category: 'trade_category_none',
		color: '#5cff5c83',
		icon: 'SUBSTANCE.PLANT.WATER.png',
		ingredients: [],
		recipes: [
			{
				id: 'REFINERECIPE_225',
				name: 'Requested Operation: Encourage Growth',
				result: {
					id: 'PLANT_WATER',
					amount: 1,
				},
				ingredients: [
					{
						id: 'WATER1',
						amount: 1,
					},
					{
						id: 'GAS3',
						amount: 1,
					},
				],
			},
		],
	},
	{
		id: 'ROCKETSUB',
		name: 'Tritium',
		type: 'substance',
		subtitle: 'Neutron-Rich Fuel Element',
		description:
			'Radioactive isotope commonly used to fuel the fusion reactor at the heart of starship <TECHNOLOGY>Pulse Engines<>.\n\nAbundant in interstellar asteroid fields, Tritium can be <COMMODITY>mined from asteroids<> using starship weaponry.',
		base_value: 6,
		category: 'substance_category_exotic',
		trade_category: 'trade_category_none',
		color: '#dcffdcd1',
		icon: 'SUBSTANCE.ROCKETSUB.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SAND1',
		name: 'Silicate Powder',
		type: 'substance',
		subtitle: 'Abundant Mineral',
		description:
			'An abundant mineral element, found within the geological strata of all rocky worlds. Easily extracted using a <TECHNOLOGY>Terrain Manipulator<>. Create a tunnel anywhere to begin extraction.\n\nProcess in a <TECHNOLOGY>Refiner<> to create <TECHNOLOGY>Glass<>.',
		base_value: 2,
		category: 'substance_category_metal',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'SUBSTANCE.SAND.1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WATERPLANT',
		name: 'Cyto-Phosphate',
		type: 'substance',
		subtitle: 'Organic Compound',
		description:
			'A blue-green organic compound produced during the metabolic cycle of deep-sea plantlife. Rich in soluble energy, cyto-phosphates are crucial in many submarine technologies.\n \nThe <TECHNOLOGY>Mining Laser<> will harvest cyto-phosphate compounds from <TECHNOLOGY>underwater flora<>.',
		base_value: 201,
		category: 'substance_category_earth',
		trade_category: 'trade_category_none',
		color: '#8aff8a42',
		icon: 'SUBSTANCE.WATER.PLANT.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'ROBOT1',
		name: 'Pugneum',
		type: 'substance',
		subtitle: 'Anomalous Material',
		description:
			"This oily, unsettling liquid leaks from the circuitry of <SPECIAL>Sentinels<>.\n\nPrized by the <FUEL>Vy'keen<>, Pugneum is thought to share some essential properties with <TECHNOLOGY>Nanites<>. It hums in a sinister fashion upon contact with organic matter.",
		base_value: 138,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#29ff2957',
		icon: 'SUBSTANCE.ROBOT.1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EX_YELLOW',
		name: 'Activated Copper',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Yellow',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star.\n\nThis Copper has been activated by the extreme conditions in which it was formed, and is highly valuable.\n\nCopper is found on planets orbiting <CATALYST>yellow stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<>.',
		base_value: 245,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#90ff9010',
		icon: 'SUBSTANCE.EXYELLOW.2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EX_RED',
		name: 'Activated Cadmium',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Red',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star.\n\nThis Cadmium has been activated by the extreme conditions in which it was formed, and is highly valuable.\n\nCadmium is found on planets orbiting <FUEL>red stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<>.',
		base_value: 450,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'SUBSTANCE.EXRED.2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EX_GREEN',
		name: 'Activated Emeril',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Green',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star.\n\nThis Emeril has been activated by the extreme conditions in which it was formed, and is highly valuable.\n\nEmeril is found on planets orbiting <TRADEABLE>green stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<>.',
		base_value: 696,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#61ff611c',
		icon: 'SUBSTANCE.EXGREEN.2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EX_BLUE',
		name: 'Activated Indium',
		type: 'substance',
		subtitle: 'Refined Stellar Metal: Blue',
		description:
			'A <STELLAR>chromatic metal<>, generated by fusion in the heart of a star.\n\nIndium is found on planets orbiting <TECHNOLOGY>blue stars<>, and can be placed in a <TECHNOLOGY>Refiner<> to create purified <STELLAR>Chromatic Metal<>.\n\nThis Indium has been activated by the extreme conditions in which it was formed, and is highly valuable.',
		base_value: 949,
		category: 'substance_category_stellar',
		trade_category: 'trade_category_none',
		color: '#38ff387d',
		icon: 'SUBSTANCE.EXBLUE.2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPACEGUNK1',
		name: 'Residual Goop',
		type: 'substance',
		subtitle: 'Junk',
		description:
			'A pulsating, foul smelling goop that builds up in poorly-maintained machinery.\n\nSkin contact is not advised.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#6fff6f35',
		icon: 'SPACEGUNK.1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'SPECIAL_POOP',
		name: 'Hexite',
		type: 'substance',
		subtitle: 'Unrefined Organic Element',
		description:
			'An odourless, mineral-rich substance with a hexagonal crystalline structure, harvested from the faecal matter of a creature.',
		base_value: 654,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#50ff502e',
		icon: 'PRODUCT.HEXCORE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TECHFRAG_R',
		name: 'NANITES',
		type: 'substance',
		subtitle: 'Technological Currency',
		description:
			'A dense miasma of <TECHNOLOGY>Nanites<>, undulating in its potentiality. These clusters are stable, but unrestricted nanite foam can produce undesirable runaway reactions in the presence of organic matter.\n\nUsed in the construction of advanced technologies. Highly valuable to specialist traders.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'CURRENCY.NANITES.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'QUICKSILVER',
		name: 'QUICKSILVER',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'CURRENCY.QUICKSILVER.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'UNITS',
		name: 'UNITS',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'CURRENCY.UNITS.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_STANDING_UP',
		name: 'GEK',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'MISSIONFACTION.GEK.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TRA_STANDING_DN',
		name: 'GEK',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'MISSIONFACTION.GEK.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EXP_STANDING_UP',
		name: 'KORVAX',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'MISSIONFACTION.KORVAX.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EXP_STANDING_DN',
		name: 'KORVAX',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'MISSIONFACTION.KORVAX.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WAR_STANDING_UP',
		name: "VY'KEEN",
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'MISSIONFACTION.VYKEEN.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WAR_STANDING_DN',
		name: "VY'KEEN",
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'MISSIONFACTION.VYKEEN.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TGUILD_STAND_UP',
		name: 'MERCHANTS',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'FACTIONS.TRADEGUILD.ON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'TGUILD_STAND_DN',
		name: 'MERCHANTS',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'FACTIONS.TRADEGUILD.ON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EGUILD_STAND_UP',
		name: 'EXPLORERS',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'FACTIONS.EXPLORERGUILD.ON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'EGUILD_STAND_DN',
		name: 'EXPLORERS',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'FACTIONS.EXPLORERGUILD.ON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WGUILD_STAND_UP',
		name: 'MERCENARIES',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#7fff7f72',
		icon: 'FACTIONS.WARRIORGUILD.ON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'WGUILD_STAND_DN',
		name: 'MERCENARIES',
		type: 'substance',
		subtitle: 'Reward Item',
		description: 'Currency or faction standing, given as a reward.',
		base_value: 20,
		category: 'substance_category_special',
		trade_category: 'trade_category_none',
		color: '#00ff0000',
		icon: 'FACTIONS.WARRIORGUILD.ON.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'PROTECT',
		name: 'Hazard Protection',
		type: 'technology',
		subtitle: 'Exosuit Environmental Shielding',
		description:
			"The Exosuit's <CATALYST>Hazard Protection<> system continually monitors and stabilises the user's environment. \n\nGeneral reactive protection may be augmented with <TECHNOLOGY>Environmental Shields<>, offering increased protection against specific conditions.\n\nThe device is charged with <CATALYST>sodium-based substances<>. User is advised that a failure to charge the Hazard Protection system may allow their environment to become incompatible with life.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTGENERIC.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_PROTECT',
		name: 'Shield Lattice',
		type: 'technology',
		subtitle: 'Hazard Protection Upgrade',
		description:
			'Increases the base capacity of the <COMMODITY>Hazard Protection<> system, allowing the user to spend longer in hazardous environments without recharging their Exosuit.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTGENERICMOD.png',
		ingredients: [
			{
				id: 'CATA_CRAFT',
				amount: 1,
			},
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'ENERGY',
		name: 'Life Support',
		type: 'technology',
		subtitle: 'Suit Survival Power Pack',
		description:
			'The core of the Exosuit, the <TECHNOLOGY>Life Support System<> continually filters and pumps breathable <FUEL>Oxygen<>.\n\nIn addition to its role in the continued existence of the Exosuit user, the Life Support Unit uses surplus oxygen to generate power for secondary systems, such as the <TECHNOLOGY>Jetpack<>, <TECHNOLOGY>Speed Augmentation<> and <TECHNOLOGY>Torch<>.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.CELL.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_ENERGY',
		name: 'Oxygen Recycler',
		type: 'technology',
		subtitle: 'Life Support Upgrade',
		description:
			'Increases the base capacity of the <FUEL>Life Support<> system, allowing the user to go longer between charges.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.CELLMOD.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 60,
			},
		],
		recipes: [],
	},
	{
		id: 'JET1',
		name: 'Jetpack',
		type: 'technology',
		subtitle: 'Aerial Propulsion Booster',
		description:
			'Provides the Exosuit with <TECHNOLOGY>advanced movement capabilities<>, including temporary flight.\n\nControl thrust with <IMG>JUMP<>. The flightpack uses energy from the <FUEL>Exosuit Life Support<> system to pressurise and vent bursts of gas, propelling the user into the air.\n\nJetpack can be temporarily overloaded by gathering <TECHNOLOGY>Deuterium-rich plants<>, causing a dramatic increase in available thrust.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.JETPACK.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_JET',
		name: 'Neural Stimulator',
		type: 'technology',
		subtitle: 'Exosuit Movement Upgrade',
		description:
			"Increases the capacity of the Exosuit's <STELLAR>Jetpack Tanks<> and <STELLAR>Adrenal Pump Reserves<>, allowing the user to both fly and sprint longer.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.JETPACKMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'FUEL2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_JUMP',
		name: 'Rocket Boots',
		type: 'technology',
		subtitle: 'Exosuit Upgrade',
		description:
			'Equips the Exosuit jetpack with <STELLAR>advanced jump capabilities<>, allowing the user to take huge leaps with ease.\n\nActivate jump systems by rapidly pressing <IMG>JUMP<>.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.JETPACKMOD.png',
		ingredients: [
			{
				id: 'ROCKETSUB',
				amount: 100,
			},
			{
				id: 'WATER_CRAFT',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_HOT',
		name: 'Coolant Network',
		type: 'technology',
		subtitle: 'Hazard Protection Unit',
		description:
			"User is guarded from extreme heat damage on scorched worlds.\n\nProvides relief from intense atmospheric and solar heat through a threaded dermal distribution network of liquid frenium.\n\nDevice is charged by <EARTH>mineral extracts<> found in hot environments. Operates automatically once constructed within user's exosuit inventory.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTHEAT.png',
		ingredients: [
			{
				id: 'HOT1',
				amount: 150,
			},
			{
				id: 'ASTEROID1',
				amount: 60,
			},
			{
				id: 'YELLOW2',
				amount: 75,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_COLD',
		name: 'Thermic Layer',
		type: 'technology',
		subtitle: 'Hazard Protection Unit',
		description:
			"User is guarded from extreme cold damage on frozen worlds.\n\nHeat capillaries threaded through a user's suit that evenly distributes liquid calidium to maintain a comfortable body temperature.\n\nDevice is charged by <EARTH>mineral extracts<> found in frozen environments. Operates automatically once constructed within user's exosuit inventory.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTCOLD.png',
		ingredients: [
			{
				id: 'COLD1',
				amount: 150,
			},
			{
				id: 'ASTEROID1',
				amount: 60,
			},
			{
				id: 'YELLOW2',
				amount: 75,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_TOX',
		name: 'Toxic Suppressor',
		type: 'technology',
		subtitle: 'Hazard Protection Unit',
		description:
			"User is protected from toxic damage.\n\nReactive compounds within the Suppressor remove toxic liquids that fall on the user, thereby reducing peril and choking hazards.\n\nDevice is charged by <EARTH>mineral extracts<> found in toxic environments. Operates automatically once constructed within user's exosuit inventory.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTTOXIC.png',
		ingredients: [
			{
				id: 'TOXIC1',
				amount: 150,
			},
			{
				id: 'ASTEROID1',
				amount: 60,
			},
			{
				id: 'YELLOW2',
				amount: 75,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_RAD',
		name: 'Radiation Deflector',
		type: 'technology',
		subtitle: 'Hazard Protection Unit',
		description:
			"User is shielded from radiation damage.\n\nGreatly reduces user peril during the exploration of irradiated worlds. Micro-vibrations increase electromagnetic wave reflection, thereby reducing absorption.\n\nDevice is charged by <EARTH>mineral extracts<> found in radioactive environments. Operates automatically once constructed within user's exosuit inventory.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTRADS.png',
		ingredients: [
			{
				id: 'RADIO1',
				amount: 150,
			},
			{
				id: 'ASTEROID1',
				amount: 60,
			},
			{
				id: 'YELLOW2',
				amount: 75,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_WATER',
		name: 'Aeration Membrane',
		type: 'technology',
		subtitle: 'Aquatic Respiration Aid',
		description:
			"User is able to swim underwater for extended periods.\n\nAbsorbs gases dissolved in water through a membrane contactor that, if user is of a conventionally structured species, is placed over the mouth or facial breathing hole.\n\nOperates automatically once constructed within user's exosuit inventory.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.HELMET.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 150,
			},
			{
				id: 'ASTEROID1',
				amount: 60,
			},
			{
				id: 'YELLOW2',
				amount: 75,
			},
		],
		recipes: [],
	},
	{
		id: 'POWERGLOVE',
		name: 'Haz-Mat Gauntlet',
		type: 'technology',
		subtitle: 'Exosuit Augmentation',
		description:
			"Upgrades the metallic shielding of the <TECHNOLOGY>Exosuit's gloves<>.\n\nAn advanced blend of reinforced metal and catalytic shielding allows the user to safely handle <CATALYST>hazardous substances<>, as well perform the necessary feats of strength required to harvest certain <TRADEABLE>farmable flora<>.",
		base_value: 120,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TECH.POWERGLOVE.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
			{
				id: 'CATALYST2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'ATLASSUIT',
		name: 'Remembrance',
		type: 'technology',
		subtitle: 'A relic of another place',
		description: 'Everything you ever knew is within.',
		base_value: 120,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.ATLASSTONE.png',
		ingredients: [
			{
				id: 'ATLAS_SEED_10',
				amount: 1,
			},
			{
				id: 'ASTEROID3',
				amount: 16,
			},
		],
		recipes: [],
	},
	{
		id: 'STARSUIT',
		name: 'Star Seed',
		type: 'technology',
		subtitle: 'Priceless Fragment',
		description:
			'The smallest of sparks, housed within a containment field of unknown origins.\n\nThe seed glows with life, desperate to escape and fulfill its potential.',
		base_value: 120,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.HEXCORE.png',
		ingredients: [
			{
				id: 'ASTEROID3',
				amount: 16,
			},
			{
				id: 'ROCKETSUB',
				amount: 16,
			},
			{
				id: 'ASTEROID2',
				amount: 16,
			},
		],
		recipes: [],
	},
	{
		id: 'OBSOLETE',
		name: 'Obsolete Technology',
		type: 'technology',
		subtitle: 'Old, unusable technology',
		description:
			'A piece of <TECHNOLOGY>technology<>, corrupted by interference from the Atlas.\n\nCan be recycled for usable components.',
		base_value: 120,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.TECHMODULE.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 4,
			},
			{
				id: 'TECHFRAG',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_WATERJET',
		name: 'Efficient Water Jets',
		type: 'technology',
		subtitle: 'Jetpack Upgrade Unit',
		description:
			"Improves the <STELLAR>fuel efficiency<> of the jetpack's marine jets, reducing the drain on Exosuit life support systems.\n\nAqueous compressor units are installed into the jetpack's turbines, bypassing the large energy requirements of underwater ignition.",
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.JETPACKWATERMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'OXYGEN',
				amount: 100,
			},
			{
				id: 'CLAMPEARL',
				amount: 6,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_WATERENERGY',
		name: 'Oxygen Rerouter',
		type: 'technology',
		subtitle: 'Emergency Life Support System',
		description:
			'Upgrades the <TECHNOLOGY>Aeration Membrane<> of the Exosuit to harvest oxygen from the Life Support system in the event of a breathing emergency, allowing the user to resurface and seek conventional fuel supplies.\n\nNote: Long-term conversion of life support energy to breathable gas is not recommended, and may result in life no longer being supported.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.CELLMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'WATER_CRAFT',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 6,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_TRANSLATE1',
		name: 'Simple Translator',
		type: 'technology',
		subtitle: 'Automatic Language Parser',
		description:
			'A automatic translation device. It records and parses nearby conversations before running the data through a contextual learning system to determine intended meaning.\n\nLow memory capacity on this entry-level model limits translation capacity.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'AUTOTRANSLATOR.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_TRANSLATE2',
		name: 'Superior Translator',
		type: 'technology',
		subtitle: 'Automatic Language Parser',
		description:
			'A automatic translation device. It records and parses nearby conversations before running the data through a contextual learning system to determine intended meaning.\n\nParallel language processors enable a greater proportion of recorded speech to be translated.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'AUTOTRANSLATOR.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 2,
			},
			{
				id: 'CATA_CRAFT',
				amount: 1,
			},
			{
				id: 'STELLAR2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_TRANSLATE3',
		name: 'Advanced Translator',
		type: 'technology',
		subtitle: 'Automatic Language Parser',
		description:
			'A automatic translation device. It records and parses nearby conversations before running the data through a contextual learning system to determine intended meaning.\n\nA large memory array and overclocked language processors allow the real-time translation of significant chunks of speech.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'AUTOTRANSLATOR.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 3,
			},
			{
				id: 'EXP_CURIO2',
				amount: 2,
			},
			{
				id: 'ASTEROID3',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'STORY_TRANSLATE',
		name: "Artemis' Translator",
		type: 'technology',
		subtitle: 'Automatic Language Parser',
		description:
			'A automatic translation device. Device must be calibrated by pre-loading with existing translation data. Device must have <STELLAR>network connection to Artemis<> to function.\n\nWithout access to host translation service, on-board circuit allows limited real-time translation of a small number of words.',
		base_value: 10,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'ARTEMISTRANSLATOR.png',
		ingredients: [
			{
				id: 'MICROCHIP',
				amount: 1,
			},
			{
				id: 'YELLOW2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPJUMP1',
		name: 'Pulse Engine',
		type: 'technology',
		subtitle: 'Starship Flight Booster',
		description:
			'Spaceflight propulsion, boosts and on-demand Pulse Jumps through local system.\n \nUser is advised that <EXOTIC>Tritium<> is required to charge Pulse Engine. Tritium is abundant in <COMMODITY>near-space asteroid fields<>.\n\nHold <IMG>ROLLLEFT<> and <IMG>ROLLRIGHT<> together to engage Pulse Jump.\nHold <IMG>BOOST<> to initiate in-flight speed boost.',
		base_value: 10,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PULSEDRIVE.png',
		ingredients: [
			{
				id: 'CARBON_SEAL',
				amount: 1,
			},
			{
				id: 'CASING',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'PHOTONIX_CORE',
		name: 'Photonix Core',
		type: 'technology',
		subtitle: 'Pulse Engine Companion Unit',
		description: 'Provides increased manoeuvrability and longer boosts during spaceflight.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PULSEDRIVE.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'FUEL2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'LAUNCHER',
		name: 'Launch Thruster',
		type: 'technology',
		subtitle: 'Vertical Take-off System',
		description:
			'Vital launch and landing gear system.\n \nUser is advised that specialised, Deuterium-derived fuel is required to recharge thruster. Launch procedures require sufficient fuel levels before activation.\n \nHold <IMG>THRUST<> to take off from planet.\nHold <IMG>BOOST<> to initiate in-flight speed boost.',
		base_value: 5,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.LANDINGGEAR.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'JELLY',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_LAUNCHER',
		name: 'Efficient Thrusters',
		type: 'technology',
		subtitle: 'Starship Launch System Upgrade',
		description:
			'Upgrades the starship launch systems, decreasing the <STELLAR>fuel cost<> of takeoff.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.LANDINGGEARMOD.png',
		ingredients: [
			{
				id: 'JELLY',
				amount: 1,
			},
			{
				id: 'ROCKETSUB',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_LAUNCHCHARGE',
		name: 'Launch System Recharger',
		type: 'technology',
		subtitle: 'Starship Launch System Upgrade',
		description:
			'Photovoltaic panels fitted to the starship <TECHNOLOGY>Launch Thrusters<> allow for a slow trickle charge while the ship is not in operation.\n\nHarvested light is used to fuse di-hydrogen from the atmosphere and over time will <STELLAR>refuel the Launch Thrusters automatically<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.LANDINGGEARMOD.png',
		ingredients: [
			{
				id: 'ANTIMATTER',
				amount: 5,
			},
			{
				id: 'CAVE_CRAFT',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIP_TELEPORT',
		name: 'Teleport Receiver',
		type: 'technology',
		subtitle: 'Ship-Mounted Teleportation Device',
		description:
			"A device that modulates standard starship communication signals to <TECHNOLOGY>enable the transport of matter<> as well as data.\n\nStarships fitted with such a device can send and receive products and substances to a user's exosuit over a <VAL_ON>long distance<>.",
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.SHIPTELEPORT.png',
		ingredients: [
			{
				id: 'ANTIMATTER',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'HYPERDRIVE',
		name: 'Hyperdrive',
		type: 'technology',
		subtitle: 'Lightspeed Warp Drive',
		description:
			'FTL propulsion drive that allows starship to attain warp speed and jump between neighbouring systems.\n\nUser is advised to access Hyperdrive systems through Galactic Map.',
		base_value: 10,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.HYPERDRIVE.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 125,
			},
			{
				id: 'MICROCHIP',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'HDRIVEBOOST1',
		name: 'Cadmium Drive',
		type: 'technology',
		subtitle: 'Hyperdrive Upgrade: Red Systems',
		description:
			'Hyperdrive computational matrix is upgraded, preventing rapid disassembly when attempting to reach rare-class <FUEL>red stellar bodies<>.\n\nUser is advised to access Hyperdrive systems via the <VAL_ON>Galactic Map<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'TECHNOLOGY.CADMIUMDRIVE.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'HDRIVEBOOST2',
		name: 'Emeril Drive',
		type: 'technology',
		subtitle: 'Hyperdrive Upgrade: Green Systems',
		description:
			'Hyperdrive shield matrix is upgraded, preventing temporal anomalies when attempting to reach rare-class <TRADEABLE>green stellar bodies<>.\n\nUser is advised to access Hyperdrive systems via the <VAL_ON>Galactic Map<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'TECHNOLOGY.EMERILDRIVE.png',
		ingredients: [
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 4,
			},
		],
		recipes: [],
	},
	{
		id: 'HDRIVEBOOST3',
		name: 'Indium Drive',
		type: 'technology',
		subtitle: 'Hyperdrive Upgrade: Blue Systems',
		description:
			'Hyperdrive protection matrix is upgraded, preventing reality glitches when attempting to reach rare-class <TECHNOLOGY>blue stellar bodies<>.\n\nUser is advised to access Hyperdrive systems via the <VAL_ON>Galactic Map<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'TECHNOLOGY.INDIUMDRIVE.png',
		ingredients: [
			{
				id: 'GREEN2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSHIELD',
		name: 'Deflector Shield',
		type: 'technology',
		subtitle: 'Spacecraft Hull Protection',
		description:
			"Energy shield that protects spacecraft from laser fire, in-flight projectiles and accidental space debris interaction.\n\nUser is advised that <CATALYST>catalytic elements<> are required to recharge device.\n\nOperates automatically once constructed within user's starship inventory.",
		base_value: 5,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SHIELD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'CATALYST2',
				amount: 25,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHIPSHIELD',
		name: 'Ablative Armour',
		type: 'technology',
		subtitle: 'Starship Shield Upgrade',
		description:
			"Adds a layer of superheated shielding to the starship's defense array, vaporising incoming fire.\n\nSignificantly increases <STELLAR>starship shield performance<>.",
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SHIELDMOD.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 1,
			},
			{
				id: 'ASTEROID2',
				amount: 100,
			},
			{
				id: 'CATALYST2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPROCKETS',
		name: 'Rocket Launcher',
		type: 'technology',
		subtitle: 'Spacecraft Projectile Weapon',
		description:
			'Highly destructive weapon that facilitates rapid ship-to-ship destruction.\n\nPress <IMG>SHIPFIRE<> to activate.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#3eff3e4f',
		icon: 'RENDER.ROCKET.png',
		ingredients: [
			{
				id: 'YELLOW2',
				amount: 200,
			},
			{
				id: 'FUEL2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_ROCKETS',
		name: 'Large Rocket Tubes',
		type: 'technology',
		subtitle: 'Starship Rockets Upgrade',
		description:
			'Expands the loading chamber of the starship <TECHNOLOGY>Rocket Launcher<>, improving exhaust performance and allowing for significantly faster <STELLAR>heat recovery<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#3eff3e4f',
		icon: 'RENDER.ROCKETMOD.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 2,
			},
			{
				id: 'GRENFUEL1',
				amount: 4,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPGUN1',
		name: 'Photon Cannon',
		type: 'technology',
		subtitle: 'Spacecraft Projectile Weapon',
		description:
			'Highly destructive weapon that facilitates rapid ship-to-ship destruction.\n\nPress <IMG>SHIPFIRE<> to activate.',
		base_value: 10,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SHIPPROJECTILE1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'CATALYST2',
				amount: 60,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHIPGUN',
		name: 'Nonlinear Optics',
		type: 'technology',
		subtitle: 'Photon Cannon Upgrade',
		description:
			'Replaces the conventional <TECHNOLOGY>Photon Cannon<> optics with an experimental glass array, boosting combat performance.\n\nSignificantly improves <STELLAR>heat sink capacity<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SHIPPROJECTILE1MOD.png',
		ingredients: [
			{
				id: 'CARBON_SEAL',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
			{
				id: 'ROCKETSUB',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSCAN_ECON',
		name: 'Economy Scanner',
		type: 'technology',
		subtitle: 'Long-range Sensor Technology',
		description:
			"An upgrade to the starship's galactic-scale sensors. This device allows the user to access detailed economic data about a system without having to visit.",
		base_value: 10,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.SHIPSCAN_ECON.png',
		ingredients: [
			{
				id: 'MICROCHIP',
				amount: 5,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSCAN_COMBAT',
		name: 'Conflict Scanner',
		type: 'technology',
		subtitle: 'Long-range Sensor Technology',
		description:
			"An upgrade to the starship's galactic-scale sensors. This device allows the user to access conflict data in the galaxy map, without having to put themselves in harm's way.",
		base_value: 10,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.SHIPSCAN_COMBAT.png',
		ingredients: [
			{
				id: 'WALKER_PROD',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPLAS1',
		name: 'Phase Beam',
		type: 'technology',
		subtitle: 'Spacecraft Laser Device',
		description:
			'Spacefaring beam weapon and asteroid mining tool.\n\nUser is advised that <FUEL>organic elements<> are required to recharge device.\n\nPress <IMG>SHIPFIRE<> to activate.',
		base_value: 5,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#58ff5846',
		icon: 'RENDER.PHASEBEAM.png',
		ingredients: [
			{
				id: 'ROCKETSUB',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHIPLAS',
		name: 'Fourier De-Limiter',
		type: 'technology',
		subtitle: 'Phase Beam Upgrade',
		description:
			'Rewires the <TECHNOLOGY>Phase Beam<> with nanite-based circuitry, bypassing conventional reality limits on laser power.\n\nSignificantly improves <STELLAR>heat performance<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#58ff5846',
		icon: 'RENDER.PHASEBEAMMOD.png',
		ingredients: [
			{
				id: 'WATER_CRAFT',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSHOTGUN',
		name: 'Positron Ejector',
		type: 'technology',
		subtitle: 'High Energy Starship Weapon',
		description:
			'Shots are granted a wide cone of destruction.\n\nWith reduced range and rate of fire, users are encouraged to engage their targets in close proximity.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#6fff6f2c',
		icon: 'RENDER.PHOTONBLAST.png',
		ingredients: [
			{
				id: 'RADIO1',
				amount: 200,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHIPSHOT',
		name: 'Fragment Supercharger',
		type: 'technology',
		subtitle: 'Starship Positron Ejector Upgrade',
		description:
			'Overhauls the firing mechanism of the <TECHNOLOGY>Positron Ejector<>, resulting in faster, more accurate particles.\n\nImproves <STELLAR>range<> and <STELLAR>accuracy<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#6fff6f2c',
		icon: 'RENDER.PHOTONBLASTMOD.png',
		ingredients: [
			{
				id: 'LANDPROD3',
				amount: 3,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPMINIGUN',
		name: 'Infra-Knife Accelerator',
		type: 'technology',
		subtitle: 'Rapid Fire Starship Weapon',
		description:
			'Releases sustained rapid sequences of fire.\n\nUser is advised to limit bursts as overheating can occur very rapidly.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#30ff3030',
		icon: 'RENDER.PHOTONACCEL.png',
		ingredients: [
			{
				id: 'HOT1',
				amount: 200,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHIPMINI',
		name: 'Nonlinear Optics',
		type: 'technology',
		subtitle: 'Photon Cannon Upgrade',
		description:
			'Replaces the conventional <TECHNOLOGY>Photon Cannon<> optics with an experimental glass array, boosting combat performance.\n\nSignificantly improves <STELLAR>heat sink capacity<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#30ff3030',
		icon: 'RENDER.PHOTONACCELMOD.png',
		ingredients: [
			{
				id: 'CATAPROD3',
				amount: 3,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPPLASMA',
		name: 'Cyclotron Ballista',
		type: 'technology',
		subtitle: 'Non-guided Starship Weapon',
		description:
			'Fires a large, concentrated ball of charged particles at forward targets, causing heavy damage. The charge is non-guided and will continue on its trajectory until it impacts with an obstacle.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#3eff3e4f',
		icon: 'RENDER.IONBLAST.png',
		ingredients: [
			{
				id: 'COLD1',
				amount: 200,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHIPBLOB',
		name: 'Dyson Pump',
		type: 'technology',
		subtitle: 'Starship Cyclotron Upgrade',
		description:
			'Replaces the hint sink of the <TECHNOLOGY>Cyclotron Ballista<> by encompassing the entire unit with a heat-absorbing megastructure. Heat output is recycled to boost combat efficiency.\n\nSignificantly improves <STELLAR>heat performance<>.',
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#3eff3e4f',
		icon: 'RENDER.IONBLASTMOD.png',
		ingredients: [
			{
				id: 'CAVEPROD3',
				amount: 3,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HYPERDRIVE',
		name: 'Freighter Hyperdrive',
		type: 'technology',
		subtitle: 'Lightspeed Warp Drive',
		description:
			'FTL propulsion drive that allows starship to attain warp speed and jump between neighbouring systems.',
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.FREIGHTERHD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 500,
			},
			{
				id: 'ANTIMATTER',
				amount: 3,
			},
			{
				id: 'AM_HOUSING',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HDRIVEBOOST1',
		name: 'Freighter Warp Reactor Sigma',
		type: 'technology',
		subtitle: 'Hyperdrive Companion Unit',
		description:
			'Hyperdrive is granted more robust deep space exploration capabilities and ability to leap to stars previously out of reach.',
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'TECHNOLOGY.FREIGHTERSIGMA.png',
		ingredients: [
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'OXY_CRAFT',
				amount: 1,
			},
			{
				id: 'AM_HOUSING',
				amount: 4,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HDRIVEBOOST2',
		name: 'Freighter Warp Reactor Tau',
		type: 'technology',
		subtitle: 'Hyperdrive Companion Unit',
		description:
			"Hyperdrive benefits from advanced fusion that brings starship to higher warp speed and intensity. User's craft will become able to leap deeper into space, and into more distant planetary systems.",
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'TECHNOLOGY.FREIGHTERTAU.png',
		ingredients: [
			{
				id: 'GREEN2',
				amount: 250,
			},
			{
				id: 'CATA_CRAFT',
				amount: 1,
			},
			{
				id: 'AM_HOUSING',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HDRIVEBOOST3',
		name: 'Freighter Warp Reactor Theta',
		type: 'technology',
		subtitle: 'Hyperdrive Companion Unit',
		description:
			"Uncapped, yet stabilised, fusion systems are threaded into user's hyperdrive. Allows starship to jump ever longer distances in deep space.",
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'TECHNOLOGY.FREIGHTERTHETA.png',
		ingredients: [
			{
				id: 'BLUE2',
				amount: 250,
			},
			{
				id: 'WATER_CRAFT',
				amount: 1,
			},
			{
				id: 'AM_HOUSING',
				amount: 6,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HACCESS1',
		name: 'Warp Shielding Sigma',
		type: 'technology',
		subtitle: 'Hyperdrive Upgrade: Red Systems',
		description:
			'Hyperdrive computational matrix is upgraded, preventing rapid disassembly when attempting to reach rare-class <FUEL>red stellar bodies<>.\n\nUser is advised to access Hyperdrive systems via the <VAL_ON>Galactic Map<>.',
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#00ff0000',
		icon: 'TECHNOLOGY.FREIGHTERSIGMA.png',
		ingredients: [
			{
				id: 'AM_HOUSING',
				amount: 2,
			},
			{
				id: 'OXYPROD3',
				amount: 2,
			},
			{
				id: 'RED2',
				amount: 250,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HACCESS2',
		name: 'Warp Shielding Tau',
		type: 'technology',
		subtitle: 'Hyperdrive Upgrade: Green Systems',
		description:
			'Hyperdrive shield matrix is upgraded, preventing temporal anomalies when attempting to reach rare-class <TRADEABLE>green stellar bodies<>.\n\nUser is advised to access Hyperdrive systems via the <VAL_ON>Galactic Map<>.',
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#58ff5846',
		icon: 'TECHNOLOGY.FREIGHTERTAU.png',
		ingredients: [
			{
				id: 'AM_HOUSING',
				amount: 2,
			},
			{
				id: 'WATERPROD3',
				amount: 2,
			},
			{
				id: 'GREEN2',
				amount: 250,
			},
		],
		recipes: [],
	},
	{
		id: 'F_HACCESS3',
		name: 'Warp Shielding Theta',
		type: 'technology',
		subtitle: 'Hyperdrive Upgrade: Blue Systems',
		description:
			'Hyperdrive protection matrix is upgraded, preventing reality glitches when attempting to reach rare-class <TECHNOLOGY>blue stellar bodies<>.\n\nUser is advised to access Hyperdrive systems via the <VAL_ON>Galactic Map<>.',
		base_value: 100,
		category: 'technology_category_freighter',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TECHNOLOGY.FREIGHTERTHETA.png',
		ingredients: [
			{
				id: 'AM_HOUSING',
				amount: 2,
			},
			{
				id: 'CAVEPROD3',
				amount: 2,
			},
			{
				id: 'BLUE2',
				amount: 250,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSLOT_DMG1',
		name: 'Hull Fracture',
		type: 'technology',
		subtitle: 'Damaged Starship Component',
		description:
			'Starship subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used for <STELLAR>storage<> or <TECHNOLOGY>technology<> until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#00ff0000',
		icon: 'TRADEPROD.ENERGY2.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 700,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSLOT_DMG2',
		name: 'Rusted Circuits',
		type: 'technology',
		subtitle: 'Damaged Starship Component',
		description:
			'Starship subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used for <STELLAR>storage<> or <TECHNOLOGY>technology<> until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#00ff0000',
		icon: 'MAINTTECH.FARM5.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 500,
			},
			{
				id: 'WATER2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSLOT_DMG3',
		name: 'Shattered Bulwark',
		type: 'technology',
		subtitle: 'Damaged Starship Component',
		description:
			'Starship subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used for <STELLAR>storage<> or <TECHNOLOGY>technology<> until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#00ff0000',
		icon: 'PRODUCT.METALLIC.SHEET1.png',
		ingredients: [
			{
				id: 'ASTEROID3',
				amount: 400,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSLOT_DMG4',
		name: 'Radiation Leak',
		type: 'technology',
		subtitle: 'Damaged Starship Component',
		description:
			'Starship subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used for <STELLAR>storage<> or <TECHNOLOGY>technology<> until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#00ff0000',
		icon: 'FARMPROD.1.png',
		ingredients: [
			{
				id: 'LUSH1',
				amount: 820,
			},
			{
				id: 'ROBOT1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSLOT_DMG5',
		name: 'Containment Failure',
		type: 'technology',
		subtitle: 'Damaged Starship Component',
		description:
			'Starship subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used for <STELLAR>storage<> or <TECHNOLOGY>technology<> until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#00ff0000',
		icon: 'TRADEPROD.ALLOY4.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 200,
			},
			{
				id: 'STELLAR2',
				amount: 300,
			},
			{
				id: 'ASTEROID2',
				amount: 180,
			},
		],
		recipes: [],
	},
	{
		id: 'SHIPSLOT_DMG6',
		name: 'Damaged Gears',
		type: 'technology',
		subtitle: 'Damaged Starship Component',
		description:
			'Starship subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used for <STELLAR>storage<> or <TECHNOLOGY>technology<> until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#00ff0000',
		icon: 'TRADEPROD.COMPONENT4.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 600,
			},
			{
				id: 'TECH_COMP',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'SCANBINOC1',
		name: 'Analysis Visor',
		type: 'technology',
		subtitle: 'Binocular Tagging Device',
		description:
			"Specialist <TECHNOLOGY>Discovery<> and <TECHNOLOGY>Survey<> unit.\n\nAugments standard <TECHNOLOGY>Scanner<> capabilities by projecting detailed environmental data directly over the user's visor. Allows the identification of <STELLAR>distant points of interest<>.\n\nThe Visor will generate <COMMODITY>valuable data<> when used to study <TRADEABLE>flora<>, <FUEL>fauna<> and <TECHNOLOGY>minerals<>.\n\nHold <IMG>AIM<> to operate. Press <IMG>ZOOM<> to zoom.",
		base_value: 15,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.BINOCULARS.png',
		ingredients: [
			{
				id: 'NANOTUBES',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'SCAN1',
		name: 'Scanner',
		type: 'technology',
		subtitle: 'Topographic Survey',
		description:
			"A <TECHNOLOGY>Personal Surface Radar<> augmentation for the Multi-Tool. \n\nThe Scanner releases a high-energy pulse that reveals any <COMMODITY>critical survival resources<> in the immediate area. Data is transmitted via the Exosuit directly into the user's visual nervous system.\n \nPress <IMG>SCAN<> to activate a local scan.",
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SCAN.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 150,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SCAN',
		name: 'Waveform Recycler',
		type: 'technology',
		subtitle: 'Multi-Tool Upgrade',
		description:
			'A powerful lateral processor inserted into the Multi-Tool <TECHNOLOGY>Scanning System<> allows the device to recharge at a significantly improved rate.\n\nIncreases <STELLAR>potential scan frequency<>.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SCANMOD.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SURVEY',
		name: 'Survey Device',
		type: 'technology',
		subtitle: 'Analysis Visor Upgrade',
		description:
			'A self-contained circuitry upgrade for the <TECHNOLOGY>Analysis Visor<>, adding real-time terrain analysis to the scanning array.\n\nToggle between Visor modes with <IMG>SURVEYFILTERL<>/<IMG>SURVEYFILTERR<>. Use <STELLAR>Surveying Mode<> to detect hidden terrain resources.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.BINOCSMOD.png',
		ingredients: [
			{
				id: 'CATA_CRAFT',
				amount: 3,
			},
			{
				id: 'CAVE_CRAFT',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'TERRAINEDITOR',
		name: 'Terrain Manipulator',
		type: 'technology',
		subtitle: 'Landscape Shaping Tool',
		description:
			'Advanced terraforming device. This module overloads existing multi-tool systems, allowing the user to reshape regions as they wish.\n\nCharged with <EARTH>metallic elements<>.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.TERRAINEDITOR.png',
		ingredients: [
			{
				id: 'NANOTUBES',
				amount: 2,
			},
			{
				id: 'JELLY',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'GROUND_SHIELD',
		name: 'Personal Forcefield',
		type: 'technology',
		subtitle: 'Defensive Shield Technology',
		description:
			'On activation, this module draws power from <VAL_ON>Exosuit Life Support<> systems to overload the Multi-Tool, distorting the electromagnetic field around the user and creating a <COMMODITY>powerful personal shield<>.\n\nWhile this field offers substantial protection against incoming laser fire, the user is advised that the Multi-Tool cannot be used for other functions while powering the shield.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.GROUNDSHIELD.png',
		ingredients: [
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'SCOPE',
		name: 'Combat Scope',
		type: 'technology',
		subtitle: 'Weapon Precision Enhancement',
		description: 'A recoil-stabilising weapon scope for precise combat.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.BINOCSMOD.png',
		ingredients: [
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'LASER',
		name: 'Mining Beam',
		type: 'technology',
		subtitle: 'Mineral Extraction Laser',
		description:
			'Multi-Tool <TECHNOLOGY>Mining Beam<> powered by <FUEL>Carbon-based Elements<>. Fire the beam with <IMG>ATTACK<>.\n\nInstalls focusing optics within the Multi-Tool, allowing it to emit a <STELLAR>high-energy beam<>. The beam is calibrated to excite molecules within common <STELLAR>organic or geological objects<>, allowing it to operate as a highly effective mining device.\n\n<FUEL>WARNING<>: Destruction of flora, fauna or minerals may attract Sentinel attention.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#58ff5846',
		icon: 'RENDER.LASER1.png',
		ingredients: [
			{
				id: 'LAND1',
				amount: 60,
			},
		],
		recipes: [],
	},
	{
		id: 'STRONGLASER',
		name: 'Advanced Mining Laser',
		type: 'technology',
		subtitle: 'Mining Beam Companion Unit',
		description:
			'Replaces standard <TECHNOLOGY>Mining Beam<> optics with high-grade Living Glass, allowing the beam to be effective against <STELLAR>large and/or rare resource deposits<>.\n\nThe lens adapts automatically to minute fluctuations in the beam waveform, minimising scatter and <STELLAR>increasing device mining potential<>.',
		base_value: 15,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#94ff9452',
		icon: 'TECH.STRONGLASER.png',
		ingredients: [
			{
				id: 'NANOTUBES',
				amount: 1,
			},
			{
				id: 'CARBON_SEAL',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_MINER',
		name: 'Optical Drill',
		type: 'technology',
		subtitle: 'Material Gain Amplifier',
		description:
			'Wafer-thin lens arrays are arranged in a highly calibrated matrix, focusing the <TECHNOLOGY>Mining Beam<> on an atomic level.\n\nThis extra precision allows for highly efficient mining. Elements are extracted more efficiently, <STELLAR>increasing the yield<> from items harvested with the Multi-Tool.',
		base_value: 15,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#94ff9452',
		icon: 'TECH.STRONGLASER.png',
		ingredients: [
			{
				id: 'CATA_CRAFT',
				amount: 3,
			},
			{
				id: 'WATER_CRAFT',
				amount: 3,
			},
			{
				id: 'TECH_COMP',
				amount: 5,
			},
		],
		recipes: [],
	},
	{
		id: 'BOLT',
		name: 'Boltcaster',
		type: 'technology',
		subtitle: 'Energy Projectile Weapon',
		description:
			'Generalist weapon attachment for the <TECHNOLOGY>Multi-Tool<>. Access fire mode by pressing <IMG>CYCLEWEAPON<> and fire weapon with <IMG>ATTACK<>.\n\nThe <TECHNOLOLY>Boltcaster<> reconfigures the Multi-Tool to supercharge <EARTH>Metallic Elements<>, firing them as <STELLAR>high-velocity projectiles<> capable of causing extreme damage.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROJECTILE1.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'NANOTUBES',
				amount: 3,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_BOLT',
		name: 'Barrel Ioniser',
		type: 'technology',
		subtitle: 'Boltcaster Upgrade',
		description:
			'Inserts a powerful field ionisation device into the barrel of the <TECHNOLOGY>Boltcaster<>, increasing projectile stability through the air.\n\nImproves <STELLAR>device accuracy<> and allows the user to fire for longer periods without degrading combat performance.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROJECTILE1MOD.png',
		ingredients: [
			{
				id: 'FARMPROD3',
				amount: 4,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'BOLT_SM',
		name: 'Boltcaster SM',
		type: 'technology',
		subtitle: 'Boltcaster Companion Unit',
		description:
			"Boltcaster shots deliver added physical damage upon impact.\n\nGrants additional kinetic energy to the user's ionised plasma distribution systems.\n\nOperates automatically once constructed within user's Multi-Tool inventory.",
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#81ff81a7',
		icon: 'RENDER.PROJECTILE1MOD.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'LASER_XO',
		name: 'Plasma Resonator',
		type: 'technology',
		subtitle: 'Mining Beam Upgrade',
		description:
			"A <TECHNOLOGY>significant<> upgrade for the <TECHNOLOGY>Mining Beam<>.\n\nUpgrades the Mining Laser's primary crystal chamber, boosting core <STELLAR>beam energy<> while decreasing unwanted <STELLAR>heat spill<>.",
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#94ff9452',
		icon: 'RENDER.LASER1MOD.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'GRENADE',
		name: 'Plasma Launcher',
		type: 'technology',
		subtitle: 'Explosive Grenades',
		description:
			'High-impact projectile weapon. Launched plasma shells bounce off surfaces until their internal timer triggers a large explosion.\n \nCharged with <FUEL>Unstable Plasma<>. Careless use can result in damage to user.\n \nPress <IMG>ALTATTACK<> to activate.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#e8ffe883',
		icon: 'RENDER.GRENADE.png',
		ingredients: [
			{
				id: 'OXYPROD3',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'TERRAIN_GREN',
		name: 'Geology Cannon',
		type: 'technology',
		subtitle: 'Terrain Destruction Device',
		description:
			'Large-bore projectile launcher. Propels plasma shells designed for <STELLAR>rapid ground excavation<>.\n \nCharged with <FUEL>Unstable Plasma<>. Warning: Explosive hole creation may also damage nearby organic matter.\n \nPress <IMG>ALTATTACK<> to activate.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#9fff9f9f',
		icon: 'RENDER.TERRAINGRENADE.png',
		ingredients: [
			{
				id: 'LANDPROD3',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'RAILGUN',
		name: 'Blaze Javelin',
		type: 'technology',
		subtitle: 'Energy Beam Weapon',
		description:
			'Aggressive weapon attachment for the <TECHNOLOGY>Multi-Tool<>. Access fire mode by pressing <IMG>CYCLEWEAPON<> and fire weapon with <IMG>ATTACK<>.\n\nThe Blaze Javelin delivers instantaneous damage on targets.\n\nPlasma charge process creates an ionised gas arc to propel projectiles at great speed. User will perceive destructive results simultaneous to the pull of the trigger.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#30ff3030',
		icon: 'RENDER.BLAZEJAVELIN.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 200,
			},
			{
				id: 'FUEL2',
				amount: 150,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_RAIL',
		name: 'Mass Accelerator',
		type: 'technology',
		subtitle: 'Blaze Javelin Upgrade',
		description:
			'Extends the firing chamber of the <TECHNOLOGY>Blaze Javelin<>, allowing the internal particle accelerators to reach both greater mass and speed.\n\nSignificantly improves <STELLAR>weapon damage<>.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#30ff3030',
		icon: 'RENDER.BLAZEJAVELINMOD.png',
		ingredients: [
			{
				id: 'OXYPROD3',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'SHOTGUN',
		name: 'Scatter Blaster',
		type: 'technology',
		subtitle: 'Scatter Shot Projectile Weapon',
		description:
			'Specialist <STELLAR>close combat<> weapon attachment for the <TECHNOLOGY>Multi-Tool<>. Access fire mode by pressing <IMG>CYCLEWEAPON<> and fire weapon with <IMG>ATTACK<>.\n\nThe <TECHNOLOGY>Scatter Blaster<> reconfigures the Multi-Tool to heat and shatter <EARTH>Metallic Elements<>, firing them in a <STELLAR>wide cone of destruction<>. Range is limited, but the shrapnel is highly effective at close range.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#6fff6f2c',
		icon: 'RENDER.SCATTERBLASTER.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 200,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SHOT',
		name: 'Shell Greaser',
		type: 'technology',
		subtitle: 'Scatter Blaster Upgrade',
		description:
			'Advanced self-lubricating components decrease friction within the <TECHNOLOGY>Scatter Blaster<>, offering significant improves to <STELLAR>reload times<>.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#6fff6f2c',
		icon: 'RENDER.SCATTERBLASTERMOD.png',
		ingredients: [
			{
				id: 'WATERPROD3',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'SMG',
		name: 'Pulse Spitter',
		type: 'technology',
		subtitle: 'Rapid Fire Projectile Weapon',
		description:
			'Specialist <STELLAR>rapid fire<> weapon attachment for the <TECHNOLOGY>Multi-Tool<>. Access fire mode by pressing <IMG>CYCLEWEAPON<> and fire weapon with <IMG>ATTACK<>.\n\nThe <TECHNOLOGY>Pulse Spitter<> redirects Multi-Tool optics to ionise inserted <EARTH>Metallic Elements<>. These projectiles are launched in a rapid-fire spread, bombarding potential targets with a <STELLAR>wave of high-energy plasma<>.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#6dff6d4c',
		icon: 'RENDER.PULSESPITTER.png',
		ingredients: [
			{
				id: 'LAUNCHSUB2',
				amount: 200,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'UT_SMG',
		name: 'Amplified Cartridges',
		type: 'technology',
		subtitle: 'Pulse Spitter Upgrade',
		description:
			'Specialist harmonic resonators allow the <TECHNOLOGY>Pulse Spitter<> to split inserted ammunition, effective manufacturing more shots from fewer materials.\n\nIncreases <STELLAR>weapon clip size<>.',
		base_value: 10,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#6dff6d4c',
		icon: 'RENDER.PULSESPITTERMOD.png',
		ingredients: [
			{
				id: 'CAVEPROD3',
				amount: 1,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPSLOT_DMG1',
		name: 'Short Circuit',
		type: 'technology',
		subtitle: 'Damaged Multi-Tool Component',
		description:
			'Multi-Tool subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#00ff0000',
		icon: 'MAINTTECH.FUEL2.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 400,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPSLOT_DMG2',
		name: 'Blown Transistor',
		type: 'technology',
		subtitle: 'Damaged Multi-Tool Component',
		description:
			'Multi-Tool subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#00ff0000',
		icon: 'FARMPROD.4.png',
		ingredients: [
			{
				id: 'TECH_COMP',
				amount: 4,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPSLOT_DMG3',
		name: 'Damaged Wiring',
		type: 'technology',
		subtitle: 'Damaged Multi-Tool Component',
		description:
			'Multi-Tool subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#00ff0000',
		icon: 'TRADEPROD.TECH1.png',
		ingredients: [
			{
				id: 'MICROCHIP',
				amount: 10,
			},
			{
				id: 'CARBON_SEAL',
				amount: 16,
			},
			{
				id: 'POWERCELL',
				amount: 12,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPSLOT_DMG4',
		name: 'Rusted Power Core',
		type: 'technology',
		subtitle: 'Damaged Multi-Tool Component',
		description:
			'Multi-Tool subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#00ff0000',
		icon: 'FARMPRODBASIC.2.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPSLOT_DMG5',
		name: 'Corrupt Module',
		type: 'technology',
		subtitle: 'Damaged Multi-Tool Component',
		description:
			'Multi-Tool subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#00ff0000',
		icon: 'MAINTTECH.TECH2.png',
		ingredients: [
			{
				id: 'HOT1',
				amount: 100,
			},
			{
				id: 'TOXIC1',
				amount: 100,
			},
			{
				id: 'RADIO1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'WEAPSLOT_DMG6',
		name: 'Loom Damage',
		type: 'technology',
		subtitle: 'Damaged Multi-Tool Component',
		description:
			'Multi-Tool subsystem <FUEL>critically damaged<>.\n\nSlot cannot be used until damage is repaired. Use <IMG>REPAIR<> to begin repair process.',
		base_value: 100,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#00ff0000',
		icon: 'MAINTTECH.FARM5.png',
		ingredients: [
			{
				id: 'DUSTY1',
				amount: 100,
			},
			{
				id: 'COLD1',
				amount: 100,
			},
			{
				id: 'LUSH1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_ENGINE',
		name: 'Fusion Engine',
		type: 'technology',
		subtitle: 'Exocraft Power System',
		description: 'A compact fusion core common to all Exocraft.\n\nRequires fuel to function.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.ENGINE.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 25,
			},
			{
				id: 'PRODFUEL1',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_GRIP1',
		name: 'Drift Suspension',
		type: 'technology',
		subtitle: 'Exocraft Handling Modification',
		description:
			'Overhauls Exocraft handling values through a combination of software tweaks, pressure adjustments and the insertion of microgravity wells into key suspension components.\n\nSpecifically tuned to increase the ability of the Exocraft to <STELLAR>drift<>.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.TRACTION.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'LUSH1',
				amount: 50,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_GRIP2',
		name: 'Grip Boost Suspension',
		type: 'technology',
		subtitle: 'Exocraft Handling Modification',
		description:
			'Overhauls Exocraft handling values through a combination of software tweaks, pressure adjustments and the insertion of microgravity wells into key suspension components.\n\nSpecifically tuned to increase the ability of the Exocraft to <STELLAR>turn sharply<>.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.TRACTION.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'ROCKETSUB',
				amount: 50,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_GRIP3',
		name: 'Hi-Slide Suspension',
		type: 'technology',
		subtitle: 'Exocraft Handling Modification',
		description:
			'Overhauls Exocraft handling values through a combination of software tweaks, pressure adjustments and the insertion of microgravity wells into key suspension components.\n\nSpecifically tuned to increase the ability of the Exocraft to <STELLAR>slide<>.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.TRACTION.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'COLD1',
				amount: 50,
			},
			{
				id: 'TECH_COMP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_SCAN',
		name: 'Exocraft Signal Booster',
		type: 'technology',
		subtitle: 'Exocraft Scan Equipment',
		description:
			'A large and complex field-based subspace radar.\n\nDue to their large power consumption and inherent subatomic instability, they are found only installed on Exocraft.\n\nPress <IMG>QUICK_MENU<> to activate the Signal Booster.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SCAN.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
			{
				id: 'MICROCHIP',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_SCAN1',
		name: 'Exocraft Signal Booster Upgrade Sigma',
		type: 'technology',
		subtitle: 'Exocraft Signal Booster Upgrade',
		description:
			'Allows for additional building types to be acquired by the Exocraft Signal Booster.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.SCANU1.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'MICROCHIP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_SCAN2',
		name: 'Exocraft Signal Booster Upgrade Tau',
		type: 'technology',
		subtitle: 'Exocraft Signal Booster Upgrade',
		description:
			'Allows for additional building types to be acquired by the Exocraft Signal Booster.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.SCANU1.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 150,
			},
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'ASTEROID2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_BOOST',
		name: 'Exocraft Acceleration Module',
		type: 'technology',
		subtitle: 'Exocraft Engine Upgrade',
		description:
			'An efficient plasma injector coupled to the engine that allows short bursts of speed.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.BOOST.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 15,
			},
			{
				id: 'STELLAR2',
				amount: 50,
			},
			{
				id: 'NANOTUBES',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_LASER',
		name: 'Exocraft Mining Laser',
		type: 'technology',
		subtitle: 'Exocraft Mining Attachment',
		description:
			'A mining laser too cumbersome for handheld operation, they are found only installed on Exocraft.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.VEHICLE_LASER.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 25,
			},
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'PRODFUEL1',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_LASER1',
		name: 'Exocraft Mining Laser Upgrade Sigma',
		type: 'technology',
		subtitle: 'Exocraft Mining Upgrade',
		description: 'Increases power of the Exocraft Mining Laser.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.VEHICLE_LASERU1.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 50,
			},
			{
				id: 'STELLAR2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'VEHICLE_GUN',
		name: 'Exocraft Mounted Cannon',
		type: 'technology',
		subtitle: 'Exocraft Weapon Attachment',
		description:
			'Due to the energy requirements of this powerful weapon, they can only be fired from an Exocraft mount.',
		base_value: 10,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.VEHICLE_GUN.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 50,
			},
			{
				id: 'YELLOW2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'SUB_ENGINE',
		name: 'Humboldt Drive',
		type: 'technology',
		subtitle: 'Exocraft Power System',
		description:
			'A thermally-efficient, inversion-proof reactor engine capable of powering the Nautilon even at extreme depths.\n\nPowered by <FUEL>Hydrothermal Fuel Cells<>.',
		base_value: 10,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SUBMARINEENGINE.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 25,
			},
			{
				id: 'PRODFUEL1',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'SUB_GUN',
		name: 'Nautilon Cannon',
		type: 'technology',
		subtitle: 'Submarine Weapon',
		description:
			'A mounted cannon specifically designed for the <STELLAR>Nautilon Submarine<>.\n\nA high-energy weapon system, it superheats a small body of water before launching it rapidly towards the intended target.\n\nDesigned primarily for damage against biological entities and inefficient when deployed as a mining device.',
		base_value: 10,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SUBMARINECANNON.png',
		ingredients: [
			{
				id: 'WATER2',
				amount: 100,
			},
			{
				id: 'VENTGEM',
				amount: 6,
			},
			{
				id: 'CLAMPEARL',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'SUB_LASER',
		name: 'Tethys Beam',
		type: 'technology',
		subtitle: 'Submarine Mining Laser',
		description:
			'A mounted laser system specifically designed for the <STELLAR>Nautilon Submarine<>.\n\nFires a concentrated plasma beam towards the intended target, which is then ignited. Such a trigger mechanism allows the use of high-energy optical mining systems in a liquid medium.',
		base_value: 10,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.VEHICLE_LASER.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 50,
			},
			{
				id: 'WATER2',
				amount: 100,
			},
			{
				id: 'CLAMPEARL',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'SUB_BINOCS',
		name: 'High-Power Sonar',
		type: 'technology',
		subtitle: 'Submarine Analysis Device',
		description:
			'A high-detail sonar device, capable of upgrading the scanner technology aboard a Nautilon-class submarine to Analysis Visor levels.\nPress <IMG>SCAN<> to activate the High-Power Sonar.',
		base_value: 10,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SUBSCAN.png',
		ingredients: [
			{
				id: 'WATER_CRAFT',
				amount: 1,
			},
			{
				id: 'VENTGEM',
				amount: 3,
			},
			{
				id: 'LAND1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'SUB_RECHARGE',
		name: 'Osmotic Generator',
		type: 'technology',
		subtitle: 'Humboldt Drive Upgrade',
		description:
			'Installed into the drive system aboard the <STELLAR>Nautilon Submarine<>.\n\nCaptures energy by exploiting the saline gradient in deep water environments, allowing a slow recharge of the <TECHNOLOGY>Humboldt Drive<> in the event of fuel emergencies.',
		base_value: 10,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SUBMARINEENGINEMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 150,
			},
			{
				id: 'CLAMPEARL',
				amount: 6,
			},
			{
				id: 'WATERPROD3',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FARM1',
		name: 'Soil De-Wormer',
		type: 'technology',
		subtitle: 'Autonomous Agriculture Unit',
		description:
			'A control unit for a brigade of tiny robots. These are directed to burrow through the soil and eliminate yield-depleting pests. Control unit maintenance is crucial to prevent accidental robot swarms.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FARM1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FARM2',
		name: 'Auto Sprinkler',
		type: 'technology',
		subtitle: 'Autonomous Agriculture Unit',
		description:
			'An automatic sprinkler system that tunes itself to the needs of the plants, deploying water as a fine mist, a heavy downpour, or anything in-between.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FARM2.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'PRODFUEL1',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FARM3',
		name: 'Light Balancer',
		type: 'technology',
		subtitle: 'Autonomous Agriculture Unit',
		description:
			'A bank of LEDs controlled by a photosensitive processing unit, designed to carefully deliver exactly the mix of red, green or blue light that the plant requires.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FARM3.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FARM4',
		name: 'Auto-Propagator',
		type: 'technology',
		subtitle: 'Autonomous Agriculture Unit',
		description:
			'This advanced bank of lasers prunes and propagates plants as required, the cauterising light offering unequaled precision.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FARM4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'PRODFUEL1',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FARM5',
		name: 'Nutrient Distributor',
		type: 'technology',
		subtitle: 'Autonomous Agriculture Unit',
		description:
			'A hybrid fabricator/distributor that tests the soil for missing nutrients, so that it can create and spray the perfect fertiliser.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FARM5.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FUEL1',
		name: 'Fuel Inverter',
		type: 'technology',
		subtitle: 'Chargeable Power Unit',
		description:
			'A piece of rechargeable power technology. The fuel inverter ensures an even flow of power to autonomous machines.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_FUEL2',
		name: 'Membrane Battery',
		type: 'technology',
		subtitle: 'Chargeable Power Unit',
		description:
			"The membrane battery is an almost maintenance-free piece of rechargeable power technology. Nestled among in the machine's circuits, it supplies power safely and directly.",
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_FUEL3',
		name: 'Power Condenser',
		type: 'technology',
		subtitle: 'Chargeable Power Unit',
		description:
			"A piece of rechargeable power technology. The power condenser harvests any heat energy wasted during the machine's operation, and uses it to generate extra power.",
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_FUEL4',
		name: 'Generator Coupling',
		type: 'technology',
		subtitle: 'Chargeable Power Unit',
		description:
			"The generator coupling is an important piece of the machine's rechargeable power systems. Without it, the generator would fruitlessly spin, pumping power out into the void.",
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_FUEL5',
		name: 'Kinetic Dynamo',
		type: 'technology',
		subtitle: 'Chargeable Power Unit',
		description:
			'The kinetic dynamo takes a small initial charge and uses it to run power-harvesting systems that tap into the orbit of the planet. This frees autonomous machinery from frequent fuel inspections, allowing them to endure extremely long maintenance cycles.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_TECH1',
		name: 'Locking mechanism',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A simple locking device, designed to keep out unauthorised pilferers. Damage has locked it permanently.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.TECH1.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH2',
		name: 'Magnetic Lock',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'An advanced locking device. A polarity incident has caused it to seal shut permanently.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.TECH2.png',
		ingredients: [
			{
				id: 'CAVE1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH3',
		name: 'Superconductive Lock',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A highly advanced locking device. Damage to the circuits supplying the magnet has caused it to lock permanently.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.TECH3.png',
		ingredients: [
			{
				id: 'CATALYST2',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH4',
		name: 'Input terminal',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A terminal designed to allow manual control of the device. Damage prevents it actually receiving any input.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.TECH4.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 40,
			},
			{
				id: 'STELLAR2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH5',
		name: 'Bio-input sensor',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'An advanced control unit, designed to allow device/flesh interaction. Damage prevents it functioning correctly. Interfacing while it is in this state is not advised.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.TECH5.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH6',
		name: 'Boiler Unit',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small boiler, generating heat to allow the device to function in difficult climates. A malfunction has resulted in a damaging boiler overflow.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.EXOTICS4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH7',
		name: 'Tiny motor',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A very small motor, designed to power very small parts. It has corroded, and is full of very small rust.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL2.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 40,
			},
			{
				id: 'FUEL2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH8',
		name: 'Cooling system',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A pump and heat exchange system designed to keep the device from overheating. It has itself overheated, and is no longer functional.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.TECH5.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH9',
		name: 'Output screen',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			"A display terminal designed to communicate the device's status to the user. As the terminal is broken, the user cannot be made aware that the terminal is broken.",
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'BUILDABLE.WALLSCREEN.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH10',
		name: 'Tamper Prevention Device',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A unit designed to destroy vital systems in the event that the device is tampered with by an unauthorised party. Unfortunately, it has itself malfunctioned and will continue to damage other systems until repaired.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TECH.POWERGLOVE.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH11',
		name: 'Security Alarm',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small light/klaxon hybrid, designed to warn of unauthorised access to the device. Damage to the alarm has caused it to overload and short other nearby circuits.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'COMPOUND.4.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH12',
		name: 'Spring Casing',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The casing for a high-compression spring. The casing has ruptured, causing the spring to shoot out and damage the rest of the device.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'COMPOUND.6.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH13',
		name: 'Thermoregulator',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A control unit designed to keep temperatures even across the device. The sensor unit is damaged, causing it to vent or generate heat at inappropriate times.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL3.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 40,
			},
			{
				id: 'CAVE1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH14',
		name: 'Fuel Pump',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A high-capacity pump, ensuring that fuel reaches every part of the device in all gravitational conditions. The filter is clogged with a strange substance, causing it to lose power.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL1.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 100,
			},
			{
				id: 'LAND2',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH15',
		name: 'Servo Arm',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small mechanical joint, used to correct small mechanical errors across the device. A malfunction is causing it to take functional components and push them into the wrong place, creating even more damage.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.COMPONENT4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 60,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH16',
		name: 'Solenoid',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A relay switch, intended to aid the powering up of the device. The connectors have become corroded, and the solenoid is no longer functioning.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.COMMIDITY3.png',
		ingredients: [
			{
				id: 'FUEL1',
				amount: 50,
			},
			{
				id: 'LAND3',
				amount: 6,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH17',
		name: 'Pressure Chamber',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small pressurised chamber, designed to create the compressed gas necessary for the device to function. Cracks have appeared in the chamber, causing it to leak.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'OXYGEN',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH18',
		name: 'Master Circuit',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The control circuit for all the other components in the device. Damage to this circuitry is fatal.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MEGAPROD.2.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH19',
		name: 'Power Distributor',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The central power unit for the device. Damage to the unit means it is currently distributing all the power to one particular circuit, causing a dangerous short.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.TECH1.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
			{
				id: 'LAND3',
				amount: 6,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH20',
		name: 'Load Balancer',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small unit designed to regulate the flow of power across the device. A malfunction is causing it to short, damaging other components.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.ENERGY5.png',
		ingredients: [
			{
				id: 'YELLOW2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH21',
		name: 'Network Interface',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A universal network interface, allowing the device to connect to a remote control centre. Damage to this interface is causing it to interpret background radiation as network signals, corrupting data in other circuits.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MEGAPROD.3.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 10,
			},
			{
				id: 'FUEL2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH22',
		name: 'Safety Panel',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The safety panel seals off potentially dangerous components in the event of a malfunction. An over sensitive trigger has caused it to activate, preventing the device from operating.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.EXOTICS5.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 100,
			},
			{
				id: 'YELLOW2',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH23',
		name: 'Alternator',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The alternator generates and regulates power for the device. A strange corrosion seeps through it, preventing it from working.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.ENERGY2.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
			{
				id: 'LAND3',
				amount: 6,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH24',
		name: 'Photovoltaic Panel',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small but efficient panel, designed to harvest light and convert it to power. However, the panel is now cracked and dusty, and can no longer be relied on.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'FARMPROD.3.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 50,
			},
			{
				id: 'LAND3',
				amount: 6,
			},
			{
				id: 'CAVE1',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_TECH25',
		name: 'Transmission Box',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The gearing mechanism for the device. The lubricant that keeps it operational appears to have been replaced with an otherworldly green goo, and the gears are now stuck.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.COMPONENT4.png',
		ingredients: [
			{
				id: 'CREATURE1',
				amount: 50,
			},
			{
				id: 'PLANT_POOP',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL1',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '1 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.0.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL2',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '2 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL3',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '3 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.2.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL4',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '4 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.3.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL5',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '5 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.4.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL6',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '6 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.5.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL7',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '7 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.6.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL8',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '8 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.7.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL9',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '9 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.8.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL10',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '10 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.9.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL11',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '11 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.A.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL12',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '12 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.B.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL13',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '13 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.C.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL14',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '14 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.D.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL15',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '15 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.E.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_PORTAL16',
		name: 'Portal Glyph',
		type: 'technology',
		subtitle: 'Ancient Technology',
		description: '16 / 16',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PORTALSYMBOL.F.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_REFINER',
		name: 'Refinery Output',
		type: 'technology',
		subtitle: 'Storage Hopper',
		description: 'A hopper for storing the materials generated by the refinery',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'EMPTYSLOTCIRCLE.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_BURNER',
		name: 'Furnace Tank',
		type: 'technology',
		subtitle: 'Fuel Incineration Device',
		description:
			'High-temperature burn unit, designed to consume a wide range of biological material. Insert materials to initiate burn.\n\nWhen active, drives an internal turbine to generate <STELLAR>power<>.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL1.png',
		ingredients: [],
		recipes: [],
	},
	{
		id: 'MAINT_ARTIFACT',
		name: 'Ancient Lock',
		type: 'technology',
		subtitle: 'Heavy Locking Mechanism',
		description:
			'A mysterious lock with several keyholes, this relic protects what must surely be a valuable treasure.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.VORTEXCUBE.png',
		ingredients: [
			{
				id: 'ARTIFACT_KEY',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_SEALOCK1',
		name: 'Pearl Offering',
		type: 'technology',
		subtitle: 'Offering to the Sea',
		description:
			'The chest requires a <SPECIAL>Living Pearl<>, harvested from the giant mother-molluscs that grow on the ocean floor.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.CLAMPEARL.png',
		ingredients: [
			{
				id: 'CLAMPEARL',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_SEALOCK2',
		name: 'Trident Key',
		type: 'technology',
		subtitle: 'Offering to the Sea',
		description:
			'The chest requires a <TECHNOLOGY>Trident Key<>, given to those who study the mysterious sites in the deep ocean.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.TRIDENTKEY.png',
		ingredients: [
			{
				id: 'TRIDENT_KEY',
				amount: 1,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG1',
		name: 'Tiny motor',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A very small motor, designed to power very small parts. It has corroded, and is full of very small rust.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL2.png',
		ingredients: [
			{
				id: 'ASTEROID3',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG2',
		name: 'Cooling system',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A pump and heat exchange system designed to keep the device from overheating. It has itself overheated, and is no longer functional.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.TECH5.png',
		ingredients: [
			{
				id: 'ASTEROID2',
				amount: 40,
			},
			{
				id: 'OXYGEN',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG3',
		name: 'Thermoregulator',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A control unit designed to keep temperatures even across the device. The sensor unit is damaged, causing it to vent or generate heat at inappropriate times.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL3.png',
		ingredients: [
			{
				id: 'ASTEROID2',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG4',
		name: 'Servo Arm',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small mechanical joint, used to correct small mechanical errors across the device. A malfunction is causing it to take functional components and push them into the wrong place, creating even more damage.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.COMPONENT4.png',
		ingredients: [
			{
				id: 'LAND2',
				amount: 50,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG5',
		name: 'Solenoid',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A relay switch, intended to aid the powering up of the device. The connectors have become corroded, and the solenoid is no longer functioning.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.COMMIDITY3.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 50,
			},
			{
				id: 'LAND1',
				amount: 20,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG6',
		name: 'Pressure Chamber',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small pressurised chamber, designed to create the compressed gas necessary for the device to function. Cracks have appeared in the chamber, causing it to leak.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MAINTTECH.FUEL4.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 100,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG7',
		name: 'Master Circuit',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The control circuit for all the other components in the device. Damage to this circuitry is fatal.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'MEGAPROD.2.png',
		ingredients: [
			{
				id: 'ASTEROID3',
				amount: 10,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG8',
		name: 'Power Distributor',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The central power unit for the device. Damage to the unit means it is currently distributing all the power to one particular circuit, causing a dangerous short.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.TECH1.png',
		ingredients: [
			{
				id: 'ASTEROID2',
				amount: 20,
			},
			{
				id: 'ASTEROID1',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG9',
		name: 'Photovoltaic Panel',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'A small but efficient panel, designed to harvest light and convert it to power. However, the panel is now cracked and dusty, and can no longer be relied on.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'FARMPROD.3.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 20,
			},
			{
				id: 'ASTEROID2',
				amount: 40,
			},
		],
		recipes: [],
	},
	{
		id: 'MAINT_FRIG10',
		name: 'Transmission Box',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'The gearing mechanism for the device. The lubricant that keeps it operational appears to have been replaced with an otherworldly green goo, and the gears are now stuck.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.COMPONENT4.png',
		ingredients: [
			{
				id: 'ROCKETSUB',
				amount: 30,
			},
		],
		recipes: [],
	},
	{
		id: 'EXOPOD_TECH1',
		name: 'Faulty Hologram',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'This <TECHNOLOGY>Exosuit Upgrade Module<> is critically damaged. Repair systems to restore upgrade functionality.\n\nIf repaired, User <STELLAR>will not be charged<> for any Exosuit Upgrades.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TREASUREPROD.PLANT.png',
		ingredients: [
			{
				id: 'ANTIMATTER',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'EXOPOD_TECH2',
		name: 'Damaged Electrode',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'This <TECHNOLOGY>Exosuit Upgrade Module<> is critically damaged. Repair systems to restore upgrade functionality.\n\nIf repaired, User <STELLAR>will not be charged<> for any Exosuit Upgrades.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'PRODUCT.NANOTUBES.png',
		ingredients: [
			{
				id: 'CAVE2',
				amount: 110,
			},
		],
		recipes: [],
	},
	{
		id: 'EXOPOD_TECH3',
		name: 'Shattered Power Core',
		type: 'technology',
		subtitle: 'Damaged Component',
		description:
			'This <TECHNOLOGY>Exosuit Upgrade Module<> is critically damaged. Repair systems to restore upgrade functionality.\n\nIf repaired, User <STELLAR>will not be charged<> for any Exosuit Upgrades.',
		base_value: 10,
		category: 'technology_category_maintenance',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'TRADEPROD.ALLOY4.png',
		ingredients: [
			{
				id: 'CATALYST2',
				amount: 90,
			},
			{
				id: 'OXYGEN',
				amount: 80,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPJUMP',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PULSEDRIVEMOD.png',
		ingredients: [
			{
				id: 'LAUNCHSUB2',
				amount: 150,
			},
			{
				id: 'RED2',
				amount: 150,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_HDRIVE',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#77ff77c8',
		icon: 'RENDER.HYPERDRIVEMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 150,
			},
			{
				id: 'LAND3',
				amount: 25,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPSHLD',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 60,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SHIELD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 100,
			},
			{
				id: 'CATALYST1',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPGUN',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 20,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#81ff81a7',
		icon: 'RENDER.SHIPPROJECTILE1MOD.png',
		ingredients: [
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPLAS',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 20,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#94ff9452',
		icon: 'RENDER.PHASEBEAMMOD.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 150,
			},
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPSHOT',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#bfffbf38',
		icon: 'RENDER.PHOTONBLASTMOD.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 150,
			},
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPMINI',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#4eff4e4f',
		icon: 'RENDER.PHOTONACCELMOD.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 150,
			},
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIPBLOB',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_ship',
		trade_category: null,
		color: '#45ff4562',
		icon: 'RENDER.IONBLASTMOD.png',
		ingredients: [
			{
				id: 'ASTEROID1',
				amount: 150,
			},
			{
				id: 'RED2',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SCAN',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#81ff81a7',
		icon: 'RENDER.SCANMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_LASER',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 20,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#94ff9452',
		icon: 'RENDER.LASER1MOD.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 150,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_BOLT',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 15,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#81ff81a7',
		icon: 'RENDER.PROJECTILE1MOD.png',
		ingredients: [
			{
				id: 'ROBOT1',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_GRENADE',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#ffffffcc',
		icon: 'RENDER.GRENADEMOD.png',
		ingredients: [
			{
				id: 'GRENFUEL1',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_T_GREN',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#cdffcdcd',
		icon: 'RENDER.GRENADEMOD.png',
		ingredients: [
			{
				id: 'JELLY',
				amount: 4,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_RAIL',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#4eff4e4f',
		icon: 'RENDER.BLAZEJAVELINMOD.png',
		ingredients: [
			{
				id: 'FUEL2',
				amount: 150,
			},
			{
				id: 'GRAVBALL',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHOTGUN',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 60,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#bfffbf38',
		icon: 'RENDER.SCATTERBLASTERMOD.png',
		ingredients: [
			{
				id: 'LAND3',
				amount: 250,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SMG',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 80,
		category: 'technology_category_weapon',
		trade_category: null,
		color: '#bcffbc79',
		icon: 'RENDER.PULSESPITTERMOD.png',
		ingredients: [
			{
				id: 'CAVE1',
				amount: 150,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_ENERGY',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 50,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.CELLMOD.png',
		ingredients: [
			{
				id: 'OXYGEN',
				amount: 100,
			},
			{
				id: 'NANOTUBES',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_JET',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.JETPACKMOD.png',
		ingredients: [
			{
				id: 'LAUNCHSUB',
				amount: 100,
			},
			{
				id: 'NANOTUBES',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SHIELD',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SHIELDMOD.png',
		ingredients: [
			{
				id: 'CATALYST1',
				amount: 100,
			},
			{
				id: 'POWERCELL',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_UNW',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTWATER.png',
		ingredients: [
			{
				id: 'PRODFUEL1',
				amount: 2,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_RAD',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTRADS.png',
		ingredients: [
			{
				id: 'RADIO1',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_TOX',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTTOXIC.png',
		ingredients: [
			{
				id: 'TOXIC1',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_COLDPROT',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTCOLD.png',
		ingredients: [
			{
				id: 'COLD1',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_HOTPROT',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_suit',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.PROTECTHEAT.png',
		ingredients: [
			{
				id: 'HOT1',
				amount: 100,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_EXGUN',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.VEHICLE_GUNMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_EXLAS',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.VEHICLE_LASERU1.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_BOOST',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.BOOSTMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_EXENG',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_exocraft',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.ENGINEMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SUB',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SUBMARINEENGINEMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
	{
		id: 'T_SUBGUN',
		name: 'Upgrade Module',
		type: 'technology',
		subtitle: null,
		description: null,
		base_value: 30,
		category: 'technology_category_submarine',
		trade_category: null,
		color: '#5cff5c77',
		icon: 'RENDER.SUBMARINECANNONMOD.png',
		ingredients: [
			{
				id: 'STELLAR2',
				amount: 80,
			},
			{
				id: 'TECH_COMP',
				amount: 2,
			},
		],
		recipes: [],
	},
];

function compare(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

posts.sort(compare);

const refiner = [];
const food = [];
posts.forEach(async function (item) {
	if (item.recipes) {
		item.recipes.forEach(async function (r) {
			if (r.id.includes('REFINERECIPE_')) {
				refiner.push(r);
			}
		});
	} else {
		if (item.id.includes('FOOD_')) {
			food.push(item);
		}
	}
});

export default posts;
