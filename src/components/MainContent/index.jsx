import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ToDoList from "../ToDoList";
import { addToDoItem } from "../../actions";
import "./index.css";

const MainContent = () => {
  const toDoList = useSelector((store) => store.toDoItems);
  const [toDoItem, setToDoItem] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setToDoItem(event.target.value);
  };

  const saveToDoItem = () => {
    dispatch(addToDoItem(toDoItem));
  };

  return (
    <div className="main-content">
      <div>
        <input type="text" value={toDoItem} onChange={handleInputChange} />
        <input type="submit" value="submit" onClick={saveToDoItem} />
      </div>

      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default MainContent;
