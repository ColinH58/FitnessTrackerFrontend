import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({ id }) => {
  const handleClick = async (e) => {
    e.preventDefault();
    await deleteRoutine(id);
  };

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default DeleteRoutine;
