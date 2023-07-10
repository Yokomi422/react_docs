import React from "react";
import Header from "@/components/Header";
import { useState } from "react";

import SearchBar from "@/components/Thinking_in_react/SearchBar";
import ProductTable from "@/components/Thinking_in_react/ProductTable";

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function ThinkingInReact() {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);
  return (
    <div>
      <Header title="Thinking in React" />
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setIsStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </div>
  );
}
