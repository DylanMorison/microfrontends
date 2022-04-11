import faker from "faker";

const mount = (el) => {
	const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

	el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
	const el = document.querySelector("#cart-dev");

	// Assuming our container doesnt have an element
	// with id `dev-products`
	if (el) {
		// We are probably running in isolation
		mount(el);
	}
}

export { mount };
