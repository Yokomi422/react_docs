import React from "react";

type SearchBarProps = {
  filterText: string;
  isStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyChange: (isStockOnly: boolean) => void;
}

export default function SearchBar( {filterText, isStockOnly, onFilterTextChange, onInStockOnlyChange}: SearchBarProps) {
  return (
    <form action="">
      <input 
        type="text" 
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox" 
          checked={isStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        { " " }
      </label>
    </form>
  );
}
