import React from "react";

type ProductCategoryRowProps = {
    category: string;
}

export default function ProductCategoryRow( { category}: ProductCategoryRowProps) {
  return (
    <div className="text-center border border-cyan-200">
      <span>
        {category}
      </span>
    </div>
  );
}
