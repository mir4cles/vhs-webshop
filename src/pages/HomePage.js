import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../store/productList/selectors";
import ProductCard from "../components/ProductCard";
import AddToCart from "../components/AddToCartButtons";

export default function HomePage() {
  const products = useSelector(selectProducts);
  console.log("products are", products);

  return (
    <div>
      <div>
        <section>
          <h2>Products</h2>
          <div>
            {products.products.map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    tags={product.tags}
                    image={product.image}
                    price={product.price}
                  />
                  <AddToCart id={product.id} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
