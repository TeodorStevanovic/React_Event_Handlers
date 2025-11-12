import React, { useState } from "react";

const Mylist = () => {
  const [items, setItems] = useState(["Angular", "Ember", "React"]);

  const onReverseClick = () => {
    setItems([...items].reverse())
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
