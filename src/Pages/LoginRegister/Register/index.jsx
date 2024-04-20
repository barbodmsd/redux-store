import React from "react";

export default function Register({ handlePageType }) {
  return (
    <div>
      <button className="btn btn-success " onClick={handlePageType}>
        Already have An Account?
      </button>
    </div>
  );
}
