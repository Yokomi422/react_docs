import React from "react";

type ProductCategoryRowProps = {
  category: string;
};

export default function ProductCategoryRow({
  category,
}: ProductCategoryRowProps) {
  return (
    <tr>
      <td>{category}</td>
    </tr>
  );
}
