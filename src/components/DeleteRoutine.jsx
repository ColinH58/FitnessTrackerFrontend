import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({ id, userRoutines, setUserRoutines }) => {

  const handleDeleteRoutine = async (e) => {
    e.preventDefault();
    const results = await deleteRoutine(id);
    if (results) {
      const newRoutines = userRoutines.filter(
        (activity) => activity.id !== id
      );
      setUserRoutines([...newRoutines]);
    }
  };
  return (
    <div>
      <button onClick={handleDeleteRoutine}>Delete</button>
    </div>
  );
};

export default DeleteRoutine;