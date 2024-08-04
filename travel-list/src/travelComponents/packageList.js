import React, { useState } from "react";

import Item from "./item";
import "./packageList.css";
function PackageList({
  sendData,
  handleDeleteItem,
  handleChangeData,
  clearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedData;
  if (sortBy === "input") {
    sortedData = sendData;
  }
  if (sortBy === "description") {
    sortedData = sendData.slice().sort((a, b) => a.item.localeCompare(b.item));
  }

  if (sortBy === "packed") {
    sortedData = sendData
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }
  const handleClear = () => {
    if (sendData.length === 0) {
      setSortBy("input");
      alert("No items are there to clear!");
      return;
    }
    const confirmed = window.confirm("Do you really want to clear items?");
    if (confirmed) {
      setSortBy("input");
      clearList();
    }
  };
  return (
    <div className="list">
      <ul>
        {sortedData.map((e) => (
          <Item
            item={e}
            deleteItem={handleDeleteItem}
            changeData={handleChangeData}
            key={e.id}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}

export default PackageList;
