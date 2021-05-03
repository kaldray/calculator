import "./App.css";
import "./Components/base.css";
import { useState } from "react";
import Todos from "./Components/Calculator/Calculator.js";
// import uniqid from "uniqid";

function App() {
  let [type, setType] = useState("");

  let [storage, setStorage] = useState([]);

  let [sign, setSign] = useState([]);

  const onTypeOnScreen = (event) => {
    let value = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    let value2 = ["+", "-", "/", "*", "=", "C"];

    //display the value
    for (let i = 0; i < value.length; i++) {
      if (event.target.value === value[i]) {
        setType((type += value[i]));
      }
      if (event.target.value === ".") {
        setType((type += "."));
        break;
      }
    }

    //set calul sign
    for (let j = 0; j < value2.length; j++) {
      if (event.target.value === "+") {
        setSign((sign = "+"));
        setStorage((storage = type));
        window.setTimeout(() => {
          setType((type = ""));
        }, 10);
      } else if (event.target.value === "-") {
        setSign((sign = "-"));
        setStorage((storage = type));
        window.setTimeout(() => {
          setType((type = ""));
        }, 10);
      } else if (event.target.value === "*") {
        setSign((sign = "*"));
        setStorage((storage = type));
        window.setTimeout(() => {
          setType((type = ""));
        }, 10);
      } else if (event.target.value === "/") {
        setSign((sign = "/"));
        setStorage((storage = type));
        window.setTimeout(() => {
          setType((type = ""));
        }, 10);
      }
    }

    //#region operation result
    if (event.target.value === "C") {
      setType((type = ""));
      setStorage((storage = ""));
      setSign((sign = ""));
    }

    if (event.target.value === "=" && sign === "+") {
      let n = +type;
      let n2 = +storage;
      setType((type = n + n2));
    } else if (event.target.value === "=" && sign === "-") {
      let n = +type;
      let n2 = +storage;
      setType((type = n2 - n));
    } else if (event.target.value === "=" && sign === "*") {
      let n = +type;
      let n2 = +storage;
      setType((type = n2 * n));
    } else if (event.target.value === "=" && sign === "/") {
      let n = +type;
      let n2 = +storage;
      setType((type = n2 / n));
    }
    //#endregion
  };

  return (
    <section className="container">
      <div className="calculator">
        <div className="inputDisplay">{type}</div>
        <div className="sectionNumber">
          <Todos type={type} onTypeOnScreen={onTypeOnScreen}></Todos>
        </div>
      </div>
    </section>
  );
}
export default App;
