import React, { useState } from "react";
import { updateRoutine } from "../api";

const EditRoutine = ({
  id,
  isPublic,
  setIsPublic,
  userRoutines,
  setUserRoutines,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsClicked(false);
    const updatedRoutine = await updateRoutine(id, name, goal, isPublic);
    const updated = userRoutines.map((update) => {
      if (update.id === id) {
        return updatedRoutine
      } else {
        return update
      };
    })
    setUserRoutines(updated);
  };

  return isClicked ? (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Goal</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <label>Public?</label>
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
        <button type="submit">Submit Edits</button>
      </form>
    </div>
  )  : (
    <div>
      <button onClick={() => setIsClicked(true)}>Edit Routine</button>
    </div>
  );
};

export default EditRoutine;
