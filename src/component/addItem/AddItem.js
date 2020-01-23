import React from "react";

import { AddItemHeader } from "./AddItemHeader";
import { AddItemForm } from "./AddItemForm";

import "./AddItem.css";

const AddItem = ({ item, change, submit, changeEdit }) => {
  return (
    <div className="add-input">
      <AddItemHeader />
      <AddItemForm
        item={item}
        change={change}
        submit={submit}
        updateEdit={changeEdit}
      />
    </div>
  );
};

export default AddItem;
