import React from "react";
// import uniqid from "uniqid";

const Todos = (props) => {
  const styleButton0 = {
    gridColumn: "1 / span 2",
  };
  const styleButtonC = {
    gridColumn: "1 / span 3",
  };

  return (
    <div className="number">
      <button style={styleButtonC} onClick={props.onTypeOnScreen} value="C">
        C
      </button>

      <button onClick={props.onTypeOnScreen} value="/">
        /
      </button>
      <button onClick={props.onTypeOnScreen} value="7">
        7
      </button>
      <button onClick={props.onTypeOnScreen} value="8">
        8
      </button>
      <button onClick={props.onTypeOnScreen} value="9">
        9
      </button>
      <button onClick={props.onTypeOnScreen} value="*">
        *
      </button>
      <button onClick={props.onTypeOnScreen} value="4">
        4
      </button>
      <button onClick={props.onTypeOnScreen} value="5">
        5
      </button>
      <button onClick={props.onTypeOnScreen} value="6">
        6
      </button>
      <button onClick={props.onTypeOnScreen} value="-">
        -
      </button>
      <button onClick={props.onTypeOnScreen} value="1">
        1
      </button>
      <button onClick={props.onTypeOnScreen} value="2">
        2
      </button>
      <button onClick={props.onTypeOnScreen} value="3">
        3
      </button>
      <button onClick={props.onTypeOnScreen} value="+">
        +
      </button>
      <button style={styleButton0} onClick={props.onTypeOnScreen} value="0">
        0
      </button>
      <button onClick={props.onTypeOnScreen} value=".">
        .
      </button>
      <button onClick={props.onTypeOnScreen} value="=">
        =
      </button>
    </div>
  );
};

export default Todos;
