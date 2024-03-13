import React, { useState } from 'react';
import { getProducts } from '../../data/get-products';

export default function MainPage() {
  const [products, setProducts] = useState([]);

  getProducts().then((res) => {
    setProducts(res.data.products);
  });

  return (
    <div>
      {products.map((el) => (
        <p>{el.title}</p>
      ))}
    </div>
  );
}
