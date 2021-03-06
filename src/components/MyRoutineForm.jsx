import React, { useState } from "react";

const MyRoutineForm = ({ userRoutines, setUserRoutines, isPublic, setIsPublic }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const routineCheck = userRoutines.find(
      (routine) => routine.name === name
      );
      
      if (routineCheck) {
        alert("This Routine Already Exists");
      } else {
        const token = localStorage.getItem("token")
        return await fetch(
          "https://fast-plateau-20949.herokuapp.com/api/routines",
        {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic
          }),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setUserRoutines([result, ...userRoutines])
        })
        .catch(console.error);
    }
    setName("");
    setGoal("");
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
      <h3>Create a Routine</h3>
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Name your Routine"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <hr />
        <label>Goal</label>
        <br />
        <input
          type="text"
          placeholder="Write your Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <hr />
        <label>Post Publicly?</label>
        <br />
        <input
          type="checkbox"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default MyRoutineForm;