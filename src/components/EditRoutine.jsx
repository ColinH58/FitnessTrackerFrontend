import React, { useState } from "react";
import { updateRoutine } from "../api";

const EditRoutine = async () => {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleMessageChange = (event) => {
    setName(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleEditRouteSubmit = async (e) => {
    e.preventDefault();
  };
  await updateRoutine(name, goal);
  setClicked(false);

  return clicked ? (
    <div>
      <div>
        <form onSubmit={handleEditRouteSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleMessageChange}
            name="name"
          />
          <label htmlFor="goal">Goal:</label>
          <input
            type="text"
            name="goal"
            value={goal}
            onChange={handleGoalChange}
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
