import React, { useState } from "react";

const ActivityForm = ({ activities, setActivities }) => {
  const [newActivity, setNewActivity] = useState("");
  const [newActivityDesc, setNewActivityDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const activityCheck = activities.find(
      (activity) => activity.name === newActivity
    );

    if (activityCheck) {
      alert("This Activity Already Exists");
    } else {
      return await fetch(
        "http://fast-plateau-20949.herokuapp.com/api/activities",
        {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: newActivity,
            name: newActivity,
            description: newActivityDesc,
          }),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          setActivities([result, ...activities]);
        })
        .catch(console.error);
    }
    setNewActivity("");
    setNewActivityDesc("");
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h3>Create an Activity</h3>
        <label>Activity Name</label>
        <br />
        <input
          type="text"
          placeholder="Name Your Activity"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
        />
        <hr />
        <label>Description</label>
        <br />
        <input
          type="text"
          placeholder="Describe the Activity"
          value={newActivityDesc}
          onChange={(e) => setNewActivityDesc(e.target.value)}
        />
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ActivityForm;
