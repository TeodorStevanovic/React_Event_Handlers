import { createRoot } from "react-dom/client";
import MyButton from "./Mybutton";
import Myinput from "./MyInput";
import MyList from "./MyList";
import MyListTwo from "./MyListTwo";

const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" },
];

createRoot(document.getElementById("root")).render(
  <>
    <MyButton>Click</MyButton>
    <Myinput>Enter Your Name:</Myinput>
    <MyList>Reverse</MyList>
    <MyListTwo items={items}/>
  </>
);
