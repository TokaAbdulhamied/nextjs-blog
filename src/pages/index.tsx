import React from "react";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>This is home Page </h1>
      <Link href="./product">products</Link>
    </div>
  );
}
