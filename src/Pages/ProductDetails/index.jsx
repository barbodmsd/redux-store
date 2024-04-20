import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./ProductDetails.module.css";
import Loading from "../../Components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slices/Cart";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cartSlice.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;
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
    <>
      {product ? (
        <div
          className={`card mb-3 my-2 mx-auto  ${style.cardDetailsContainer} `}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.description}
                  <br />
                  <strong> Price : {product.price}</strong>
                  <button
                    className="btn btn-danger mx-2 "
                    disabled={!quantity}
                    onClick={() => dispatch(removeItem(product.id))}
                  >
                    -
                  </button>
                  {quantity && <span>{quantity}</span>}
                  <button
                    className="btn btn-success mx-2 "
                    onClick={() => dispatch(addItem(product))}
                  >
                    +
                  </button>
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
      ) : (
        <Loading />
      )}
    </>
  );
}
