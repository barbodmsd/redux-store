import React from "react";
import useForm from "../../../Utils/useForm";

export default function Login({ handlePageType }) {
  const [fields, handleChange] = useForm();

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Username
        </label>
        <input
        name="username"
        onChange={handleChange}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
        name="password"
        onChange={handleChange}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button className="btn btn-success " onClick={handlePageType}>
        Don't have an Account?
      </button>
    </form>
  );
}
