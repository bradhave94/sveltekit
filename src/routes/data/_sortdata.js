import data from './_nmsdata.js';

function compare(a, b) {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
}

data.sort(compare);

const refiner = [];
const food = [];
const products = [];
const base = [];

data.forEach(async function (item) {
	if (item.recipes) {
		item.recipes.forEach(async function (r) {
			if (r.id.includes('REFINERECIPE_')) {
				refiner.push(r);
			}
		});
	}

	if (item.id.includes('FOOD_')) {
		food.push(item);
	}

	if (item.icon.includes('BUILDABLE')) {
		base.push(item);
	}

	if (
		item.type == 'product' &&
		item.name != null &&
		// !item.id.includes('FOOD_') &&
		!item.id.includes('BOOST') &&
		!item.id.includes('BAIT') &&
		!item.id.includes('FRIGATE_FUEL') &&
		!item.id.includes('ATLAS_SEED') &&
		!item.icon.includes('BUILDABLE') &&
		item.category != 'product_category_building_part' &&
		item.ingredients.length
	) {
		products.push(item);
	}
});

const getById = (id) => {
	return data.find((p) => p.id === id);
};

export { data, refiner, food, products, base, getById };
