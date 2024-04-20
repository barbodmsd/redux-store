import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Store/Slices/Auth";

export default function Navbar() {
  const { token } = useSelector((state) => state.authSlice);
  const listLength = useSelector((state) => state.cartSlice.list).length;
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <span className="nav-link" onClick={() => dispatch(logout())}>
                  Logout
                </span>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login-register">
                  Login/Register
                </Link>
              </li>
            )}
          </ul>
          <Link to={'/cart'}><h2>Cart {listLength>0&&listLength}</h2></Link>
        </div>
      </div>
    </nav>
  );
}
