import { createRoot } from "react-dom/client";
import MyButton from "./Mybutton";
import Myinput from "./Myinput";
import MyList from "./MyList";

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
  </>
);
