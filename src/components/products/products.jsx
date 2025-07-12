import { useEffect, useState } from "react";
import Product from "../product/product";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="py-5">
      <div className="container d-flex flex-wrap gap-4 my-5">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
