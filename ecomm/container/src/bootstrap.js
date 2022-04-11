// if webpack cannot find the "products" directory in node_modules
// it will look in the `remotes` property of the ModuleFederationPlugin, and check
// if the key of `products` exists.
import { mount } from "products/ProductsIndex";
import "cart/CartShow";

console.log("Container!");

mount(document.querySelector("#my-products"));
