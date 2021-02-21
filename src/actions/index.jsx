export const addToDoItem = (toDoItem) => {
  return {
    type: "toDos/toDoItemAdded",
    payload: toDoItem,
  };
};

export const editToDoItem = (editedToDoItem, indexOfItem) => {
  return {
    type: "toDos/editToDoItem",
    payload: { editedToDoItem, indexOfItem },
  };
};

export const deleteToDoItem = (toDoItemToDelete) => {
  return {
    type: "toDos/DeleteToDoItem",
    payload: toDoItemToDelete,
  };
};
