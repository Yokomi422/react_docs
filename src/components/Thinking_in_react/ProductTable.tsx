import React from "react";
import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import { table } from "console";

type Product = {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

type ProductTableProps = {
    products: Product[];
    filterText: string;
    isStockOnly: boolean;
}

export default function ProductTable( { products, filterText, isStockOnly }: ProductTableProps) {
  const rows = [];
  let lastCategory = "";
  //除外する商品たちを上から抽出していっている
  // ユーザが入力したテキストと一致する商品を抽出
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText) === -1) {
      return;
    }
    // 在庫切れの商品を表示しない場合、在庫切れの商品は表示しない
    if (isStockOnly && !product.stocked) {
      return;
    }
    //この分類方法は、jsonがcategoryでソートされていることを前提にした処理をしている。
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />);
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
