import React, {useState} from "react";
import { reverse } from "./reverse";

const Mylist = ({ items }) => {
  const [listItems, setListItems] = useState(items);

  const onClickReverse = () =>  setListItems(reverse(listItems));

  const onClick = (id) => {
    const item = items.find((i) => i.id === id);
    console.log(`clicked, ${item.name}`);
  };

  return (
    <section>
      <button onClick={onClickReverse}>Reverse</button>
      <ul>
        {listItems.map((item) => (
          <li key={item.id} onClick={onClick.bind(null, item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Mylist;
