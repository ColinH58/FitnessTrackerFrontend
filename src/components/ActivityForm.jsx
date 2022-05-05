import React, { useState } from "react";

const ActivityForm = () => {
    const { newActivity, setNewActivity } = useState("");
    const { newActivityDesc, setNewActivityDesc } = useState("")

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Acivity Name</label>
        <input
          type="text"
          placeholder="Name Your Activity"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Describe it"
          value={newActivityDesc}
          onChange={(e) => setNewActivityDesc(e.target.value)}
        />
      </form>
    </div>
  )
};

export default ActivityForm;
