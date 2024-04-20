import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './ProductDetails.module.css'
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        });
        const data = await res.json();
        data ? setProduct(data) : navigate("/not-found-product-details");
      } catch (error) {
        alert("Error Product details fetch ");
      }
    })();
  }, [id]);
  return (
    <div className={`card mb-3 ${style.cardDetailsContainer} `}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.description}
              <br/>
              Price : {product.price}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
