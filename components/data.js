import faker from "faker";

const cardDetails = [
	{
		title: faker.commerce.productName(),
		dept: faker.commerce.department(),
		price: faker.commerce.price(),
		description: faker.commerce.productDescription()
	},
	{
		title: faker.commerce.productName(),
		dept: faker.commerce.department(),
		price: faker.commerce.price(),
		description: faker.commerce.productDescription()
	},
	{
		title: faker.commerce.productName(),
		dept: faker.commerce.department(),
		price: faker.commerce.price(),
		description: faker.commerce.productDescription()
	},
	{
		title: faker.commerce.productName(),
		dept: faker.commerce.department(),
		price: faker.commerce.price(),
		description: faker.commerce.productDescription()
	}
];
export default cardDetails;
