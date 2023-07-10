import React from "react";

type SearchBarProps = {
  filterText: string;
  isStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyChange: (isStockOnly: boolean) => void;
};

export default function SearchBar({
  filterText,
  isStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
  return (
    //stateが変更されたら、再レンダリングされるという設定のため、変更されたら、トップのstateの状態が変更される。つまり逆方向に情報を飛ばしている。
    //inputなどを含むときは、formで囲うといいことがある
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={e => onFilterTextChange(e.target.value)}
      />
      <label className="block">
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={() => onInStockOnlyChange(!isStockOnly)}
        />
      </label>
    </form>
  );
}
