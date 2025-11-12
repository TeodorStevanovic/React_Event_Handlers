import React, { useState } from "react";
import { reverse } from "./reverse";

const Mylist = () => {
  const [items, setItems] = useState(["Angular", "Ember", "React"]);

  const onReverseClick = () => {
    setItems(reverse(items))
  };

  return (
    <section>
      <button onClick={onReverseClick}>Reverse</button>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
};

export default Mylist;
