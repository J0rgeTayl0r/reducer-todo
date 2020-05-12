import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TodoForms = ({ addTodo }) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState(Date.now());

  //HANDLE CHANGES
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  //HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(item, date);
    setItem("");
  };

  //DATE CHANGER
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h3>Add Something New</h3>
        <input
          name="title"
          type="text"
          value={item}
          onChange={(event) => handleChange(event)}
          placeholder="Todo Title"
        />
        <h5>Deadline:</h5>
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          minDate={Date.now()}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default TodoForms;

