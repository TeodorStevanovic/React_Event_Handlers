import { createRoot } from "react-dom/client";
import MyButton from "./Mybutton";
import Myinput from "./Myinput";
import Mylist from "./Mylist";

const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" },
];

createRoot(document.getElementById("root")).render(
  <>
    <MyButton>Click</MyButton>
    <Myinput />
    <Mylist items={items}/>
  </>
);
