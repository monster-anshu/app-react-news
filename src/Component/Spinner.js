import loading from "./loading.png";
import React from "react";

const Spinner = () => {
  return (
    <div className="text-center" style={{
      padding: '10px 0'
    }} >

      <img src={loading} className="loading" alt="Loading" />
    </div>
  );
};

export default Spinner;
