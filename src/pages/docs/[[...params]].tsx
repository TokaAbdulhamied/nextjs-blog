import React from "react";
import { useRouter } from "next/router";
export default function Doc() {
  const route = useRouter();

  const params = route.query.params || [];
  console.log(params);
  if (params.length === 2) {
    return (
      <h2>
        docs for featuer {params[0]} and concept {params[1]}
      </h2>
    );
  } else if (params.length === 1) {
    return <h2>docs for featuer {params[0]}</h2>;
  }
  return <h1>Docs Home Page </h1>;
}
