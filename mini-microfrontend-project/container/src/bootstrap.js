// if webpack cannot find the "products" directory in node_modules
// it will look in the `remotes` property of the ModuleFederationPlugin, and check
// if the key of `products` exists.
import { mount as productsMount} from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
