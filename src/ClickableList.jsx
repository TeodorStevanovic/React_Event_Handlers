import React from "react";

const ClickableList = ({ items }) => {
  const onItemClick = (id) => {
    const item = items.find((i) => i.id === id);
    console.log("Clicked", item.name);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ClickableList;