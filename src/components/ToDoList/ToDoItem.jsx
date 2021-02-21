import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { editToDoItem } from "../../actions";

export const TodoItem = ({ toDoItem, index }) => {
  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(toDoItem);
  const dispatch = useDispatch();

  const updateToDoItem = (event) => {
    setEditedValue(event.target.value);
  };

  return (
    <div className="todo-item">
      {!editing && <li key={index.toString()}>{toDoItem}</li>}
      {editing && (
        <input
          type="text"
          value={editedValue}
          onChange={(event) => {
            updateToDoItem(event);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              dispatch(editToDoItem(editedValue, index));
              setEditing(false);
            }
          }}
        />
      )}
      <i
        className="fa fa-pencil"
        onClick={() => {
          setEditing(true);
        }}
      ></i>
      <i className="fa fa-close"></i>
    </div>
  );
};
