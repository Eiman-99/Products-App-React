import { useEffect, useState } from "react";
import Product from "../product/product";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-5">
      <div className="container py-5">
        <input
          type="text"
          placeholder="Search products..."
          className="form-control mb-4"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="d-flex flex-wrap gap-4">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="text-decoration-none"
            >
              <Product {...product} />
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-muted mt-4">No matching products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
