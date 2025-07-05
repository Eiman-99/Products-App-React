import Product from "../product/product";
import { products } from "../../data/products";

function Products() {
  return (
    <div className="container d-flex flex-wrap gap-4 mt-4">
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          stock={product.stock}
        />
      ))}
    </div>
  );
}
export default Products;
