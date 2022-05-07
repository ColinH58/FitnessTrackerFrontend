import React from "react";
import { deleteRoutine } from "../api";

const DeletedRoutine = (props) => {
  const { routineId } = props;
  const userRoutines = props.userRoutines;
  const setUserRoutines = props.setUserRoutines;

  const handleDeleteRoutine = async (e) => {
    e.preventDefault();
    const results = await deleteRoutine(routineId);
    if (results) {
      const newRoutines = userRoutines.filter(
        (activity) => activity.id !== routineId
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

export default DeletedRoutine;