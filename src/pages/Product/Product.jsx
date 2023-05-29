import React from "react";
import { usePagesStore } from "../../stores/pagesStorage";

const Product = () => {
  const { isLoading } = usePagesStore();

  return isLoading ? <div>Loading</div> : <div>Product</div>;
};

export default Product;
