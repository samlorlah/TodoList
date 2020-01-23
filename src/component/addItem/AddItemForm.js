import React from "react";

export const AddItemForm = ({ item, change, submit, updateEdit }) => {
  return (
    <div className="itemForm">
      <form onSubmit={submit}>
        <div className="input-group my-3 px-5">
          <div className="input-group-prepend">
            <div className="input-group-text">ADD TODO ITEM</div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="What Do You Plan To Do Today?"
            value={item}
            onChange={change}
          />
        </div>
        <div className="justify-content-center mx-5">
          <button
            type="submit"
            className={
              updateEdit.edit
                ? "btn btn-success mt-2 btn-block"
                : "btn btn-primary mt-2 btn-block"
            }
          >
            {updateEdit.edit ? "UPDATE ITEM" : "ADD ITEM"}
          </button>
        </div>
      </form>
    </div>
  );
};
