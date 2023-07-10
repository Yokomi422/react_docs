import React from "react";

type ProductRowProps = {
  product: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  };
};

export default function ProductRow({ product }: ProductRowProps) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-red-400">{product.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
