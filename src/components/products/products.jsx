import { useEffect, useState } from "react";
import Product from "../product/product";
import { getProducts } from "../../data/products";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="container d-flex flex-wrap gap-4 mt-4">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
