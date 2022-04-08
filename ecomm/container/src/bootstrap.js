// if webpack cannot find the "products" directory in node_modules
// it will look in the `remotes` property of the ModuleFederationPlugin, and check
// if the key of `products` exists.  
import "products/ProductsIndex";

console.log("Container!");
