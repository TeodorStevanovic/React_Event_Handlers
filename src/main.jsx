import { createRoot } from "react-dom/client";
import Mybutton from "./Mybutton";
import Myinput from "./Myinput";
import Mylist from "./Mylist";

createRoot(document.getElementById("root")).render(
  <>
    <Mybutton>Click Me</Mybutton>
    <Myinput />
    <Mylist />
  </>
);
