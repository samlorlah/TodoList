import React from "react";

export const ListItem = ({
  task,
  completed,
  taskCompleted,
  id,
  edit,
  handleDelete
}) => {
  const notCompleted =
    "list-group-item text-capitalize d-flex justify-content-between mb-2";
  const isCompleted =
    "list-group-item text-capitalize bg-secondary d-flex justify-content-between mb-2";
  return (
    <li className={taskCompleted ? isCompleted : notCompleted}>
      <div className="list_item d-flex">
        <input
          type="checkbox"
          onChange={() => completed(id)}
          checked={taskCompleted}
        />
        <h6 className="ml-3">{task}</h6>
      </div>
      <div className="list_item2 d-flex">
        <button className="badge badge-primary" onClick={() => edit(id)}>
          Edit
        </button>
        <button className="badge badge-danger" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
