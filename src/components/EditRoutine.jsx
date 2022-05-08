import React, { useState } from "react";
import { updateRoutine } from "../api";

const EditRoutine = ({ id, isPublic, setIsPublic }) => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleEditRouteSubmit = async (e) => {
    e.preventDefault();
    await updateRoutine(id, name, goal, isPublic);
    setClicked(false);
  };

  return clicked ? (
    <div>
      <div>
        <form onSubmit={handleEditRouteSubmit}>
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
          <label>Goal</label>
          <input
            type="checkbox"
            value={isPublic}
            onChange={(e) => setIsPublic(e.target.value)}
          />
          <button type="submit">Submit Edits</button>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={() => setClicked(true)}>Edit Routine</button>
    </div>
  );
};

export default EditRoutine;
