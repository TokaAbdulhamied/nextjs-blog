import React from "react";
import { useRouter } from "next/router";
export default function ProductDetail() {
  const productId = useRouter().query.productId;
  return <div>ProductDetail {productId}</div>;
}
