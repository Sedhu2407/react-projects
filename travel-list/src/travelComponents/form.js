import React, { useState } from "react";
import "./form.css";

function Form(props) {
  const [item, setItem] = useState("");
  const [number, setNumber] = useState(1);

  const getValues = (e) => {
    e.preventDefault();
    if (!item) {
      return;
    }
    const obj = { number, item, isPacked: false, id: Date.now() };
    props.onGetData(obj);
    setItem("");
    setNumber(1);
  };
  return (
    <form className="add-form " onSubmit={getValues}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}

export default Form;
