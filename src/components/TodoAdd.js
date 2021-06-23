import React, { useState } from "react";

// props = props.TodoAdd
const TodoAdd = (props) => {
  const [inputValue, setInputvalue] = useState("");
  const onHandLeSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue);
  };
  const onHandLeChange = (e) => {
    setInputvalue(e.target.value);
  };
  return (
    <div>
      {inputValue}
      <form action='' onSubmit={onHandLeSubmit}>
        <input type='text' name='' id='' onChange={onHandLeChange} />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};
export default TodoAdd;
