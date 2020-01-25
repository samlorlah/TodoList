import React, { useState, useEffect } from "react";
import uuid from "uuid";

import AddItem from "./component/addItem/AddItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { List } from "./component/itemList/List";

const DUMMY_TASKS = [
  {
    id: 1,
    item: "wake Up",
    completed: false,
    edit: false
  },
  {
    id: 2,
    item: "cook",
    completed: true,
    edit: false
  },
  {
    id: 3,
    item: "Eat",
    completed: false,
    edit: false
  },
  {
    id: 4,
    item: "Sleep",
    completed: false,
    edit: false
  }
];

const App = () => {
  const [addItem, setAddItem] = useState("");

  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [newItem, setNewItem] = useState({
    id: "",
    item: "",
    completed: false,
    edit: false
  });

  const addItemChangeHandler = e => {
    setAddItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (addItem !== "") {
      const newTask = {
        id: newItem.edit ? newItem.id : uuid(),
        item: addItem,
        completed: false,
        edit: false
      };

      // if (localStorage.getItem("todo") == null) {
      //   let initialTask = [];
      //   initialTask.push(newTask);
      //   localStorage.setItem("todo", JSON.stringify(initialTask));
      // } else {
      //   let getLocal = JSON.parse(localStorage.getItem("todo"));
      //   getLocal.push(newTask);
      //   localStorage.setItem("todo", JSON.stringify(getLocal));
      // }

      setNewItem(newTask);

      setTask(tasks => tasks.concat(newTask));

      setAddItem("");
    }
  };

  const handleCompleted = taskId => {
    const updatedTask = tasks.map(task => {
      if (taskId === task.id) {
        console.log(task.id);

        task.completed = !task.completed;
      }
      return task;
    });

    setTask(updatedTask);
  };

  const handleEdit = taskId => {
    if (addItem === "") {
      const removeItem = tasks.filter(task => {
        return taskId !== task.id;
      });
      setTask(removeItem);
      const editItem = tasks.find(task => {
        return taskId === task.id;
      });

      setAddItem(editItem.item);

      const updatedItem = {
        id: editItem.id,
        item: editItem.item,
        completed: editItem.completed,
        edit: true
      };
      setNewItem({
        id: updatedItem.id,
        item: updatedItem.item,
        completed: updatedItem.completed,
        edit: updatedItem.edit
      });
    }
  };

  const handleDelete = taskId => {
    if (addItem === "") {
      const removeItem = tasks.filter(task => {
        return taskId !== task.id;
      });
      setTask(removeItem);
    }
  };

  const clearListHandler = event => {
    event.preventDefault();
    setTask([]);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="row">
      <div className="col-12 col-md-6 offset-md-3">
        <h3>
          Keep track of your daily / weekly activities with our TODO List
          Application.
        </h3>
        <p>
          No data would be lost even. Browser can be closed and opened later
          Thank you for using our TODO List.
        </p>
        <AddItem
          item={addItem}
          change={addItemChangeHandler}
          submit={handleSubmit}
          changeEdit={newItem}
        />
        <List
          tasks={tasks}
          isCompleted={handleCompleted}
          edit={handleEdit}
          handleDelete={handleDelete}
        />
        <button
          className="btn btn-danger btn-block mt-2"
          onClick={clearListHandler}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default App;
