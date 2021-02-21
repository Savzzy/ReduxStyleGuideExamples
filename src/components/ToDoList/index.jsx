import React from "react";

import { TodoItem } from "./ToDoItem";

import "./index.css";

// const TodoItem = ({ toDoItem, index }) => {
//   const [editing, setEditing] = useState(false);
//   const [editedValue, setEditedValue] = useState(toDoItem);
//   const dispatch = useDispatch();

//   const updateToDoItem = (event, index) => {
//     setEditedValue(event.target.value);
//   };

//   return (
//     <div className="todo-item">
//       {!editing && <li key={index.toString()}>{toDoItem}</li>}
//       {editing && (
//         <input
//           type="text"
//           value={editedValue}
//           onChange={(event) => {
//             updateToDoItem(event, index);
//           }}
//           onKeyPress={(event) => {
//             if (event.key === "Enter") {
//               dispatch(editToDoItem(editedValue, index));
//               setEditing(false);
//             }
//           }}
//         />
//       )}
//       <i
//         className="fa fa-pencil"
//         onClick={() => {
//           setEditing(true);
//         }}
//       ></i>
//       <i className="fa fa-close"></i>
//     </div>
//   );
// };

const ToDoList = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((toDoItem, index) => {
        return <TodoItem toDoItem={toDoItem} index={index} />;
      })}
    </div>
  );
};

export default ToDoList;
