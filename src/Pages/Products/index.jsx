import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Loading from "../../Components/Loading";

export default function Products() {
  const [products, setProducts] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        alert('Error Products Fetch');
      }
    })();
  }, []);
  const items = products?.map((e, index) => (
    <Card key={index} img={e.image} id={e.id} name={e.title} price={e.price} />
  ));
  return (
    <>
      {products ? (
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap ">
          {items}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
