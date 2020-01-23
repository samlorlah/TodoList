import React from "react";

import "./List.css";
import { ListItem } from "./ListItem";

export const List = ({ tasks, isCompleted, edit, handleDelete }) => {
  return (
    <div className="mt-4">
      <ul className="list-group">
        {tasks.map(task => (
          <ListItem
            key={task.id}
            id={task.id}
            task={task.item}
            completed={id => isCompleted(id)}
            taskCompleted={task.completed}
            edit={id => edit(id)}
            handleDelete={id => handleDelete(id)}
          />
        ))}
      </ul>
    </div>
  );
};
