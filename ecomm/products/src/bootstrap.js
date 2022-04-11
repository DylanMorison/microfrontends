import faker from "faker";

const mount = (el) => {
	let products = "";

	for (let i = 0; i < 5; i++) {
		const name = faker.commerce.productName();
		products += `<div>${name}</div>`;
	}

	el.innerHTML = products;

	// not great... assumes that an element exists...  needs a refactor...
	// document.querySelector("#dev-products").innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which DEFINITELY has an element with an id of `dev-products`
// we want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#dev-products");

	// Assuming our container doesnt have an element
	// with id `dev-products`
	if (el) {
		// We are probably running in isolation
		mount(el);
	}
}

// Context/situation #2
// we are running this file in dev or prod
// through the container app
// and there is no guarantee that an element with an id of `dev-products` exists
// WE DO NOT WANT TO TRY TO IMMEDIATELY RENDER THE APP

export { mount };
