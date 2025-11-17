import React from "react";

const MyListTwo = ({ items }) => {
  const clickedId = (id) => {
    const item = items.find((i) => i.id === id);
    console.log("Clicked", item.name);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => clickedId(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default MyListTwo;
