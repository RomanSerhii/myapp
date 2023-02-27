import React, { useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [todos, setTodos] = useState(["hello", "react"]);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  };

  const toggleVisible = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const changeSmthInTodo = () => {
    const newArr = [...todos];
    newArr[0] = Math.random();
    setTodos(newArr);
  };

  return (
    <div>
      {isHeaderVisible && (
        <div>
          <h1>Header: {counter}</h1>
          <button className="btn" onClick={incrementCount}>
            Increment
          </button>
          <button className="btn" onClick={decrementCount}>
            Decrement
          </button>
          <button onClick={changeSmthInTodo}>Change smth in todo</button>
          <div>{todos[0]}</div>
          <div>{todos[1]}</div>
          <hr />
        </div>
      )}
      <button className="btn" onClick={toggleVisible}>
        Toggle header
      </button>
      <hr />
    </div>
  );
}

export default Header;
