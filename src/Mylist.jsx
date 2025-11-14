import React from "react";
import { reverse } from "./reverse";

const Mylist = ({ items }) => {
  const onClick = (id) => {
    const item = items.find((i) => i.id === id);
    console.log(`clicked, ${item.name}`);
  };

  return (
    <section>
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={onClick.bind(null, item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Mylist;
