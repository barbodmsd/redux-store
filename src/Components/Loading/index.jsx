import React from "react";
import { DNA } from "react-loader-spinner";

export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed "
      style={{ inset: 0 }}
    >
      <DNA />
    </div>
  );
}
