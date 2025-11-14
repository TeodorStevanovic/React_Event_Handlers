import { createRoot } from "react-dom/client";
import MyButton from "./Mybutton";
import Myinput from "./Myinput";
import Mylist from "./Mylist";

createRoot(document.getElementById("root")).render(
  <>
    <MyButton />
    <Myinput />
    <Mylist />
  </>
);
