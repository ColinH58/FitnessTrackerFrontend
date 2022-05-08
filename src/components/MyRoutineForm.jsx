import React, { useState } from "react";
import { newRoutine } from "../api";

const MyRoutineForm = ({ userRoutines, setUserRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  // const [routineActivities, setRoutineActivities] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await newRoutine(name, goal);
    // const token = localStorage.getItem("token");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  return (
    <div>
      <h1>Create a Routine</h1>
      <form className="Cards" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
        />
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          name="goal"
          value={goal}
          onChange={handleGoalChange}
        />
        <button type="submit">Submit New Routine</button>
      </form>
    </div>
  );
};

export default MyRoutineForm;