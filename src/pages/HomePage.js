import React, { useState, useDebugValue } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/productList/selectors";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [tag, setTag] = useState("all");
  const [sort, setSort] = useState("popularity");

  const products = useSelector(selectProducts(tag, sort));

  const allTags = products.map((product) => {
    return product.tags;
  });
  const uniqueTags = [...new Set([].concat.apply([], allTags))];

  return (
    <div>
      <section>
        <h2>Products</h2>
        <div>
          Filter by
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            <option value="all">all</option>
            {uniqueTags.map((tag, index) => {
              return (
                <option key={index} value={tag}>
                  {tag}
                </option>
              );
            })}
            Sort by
          </select>
        </div>
        <div>
          Sort by {""}
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="popularity">popularity</option>
            <option value="price">price</option>
          </select>
        </div>
        <div>
          <ul>
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  tags={product.tags}
                  image={product.image}
                  price={product.price}
                />
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
