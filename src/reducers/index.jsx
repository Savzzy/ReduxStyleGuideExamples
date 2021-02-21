import { combineReducers } from "redux";

const rootReducers = (toDoList = [], action) => {
  switch (action.type) {
    case "toDos/toDoItemAdded": {
      return [...toDoList, action.payload];
    }

    case "toDos/editToDoItem": {
      return Object.assign([], toDoList, {
        [action.payload.indexOfItem]: action.payload.editedToDoItem,
      });
    }

    case "toDos/DeleteToDoItem": {
      return toDoList.filter(
        (toDoItem) => toDoItem !== action.payload.toDoItemToDelete
      );
    }

    default: {
      return toDoList;
    }
  }
};

export default combineReducers({
  toDoItems: rootReducers,
});
