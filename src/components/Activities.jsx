import React, { useState, useEffect } from "react";
import { getActivities } from "../api";


const Activities = () => {
  const [activities, setActivities] = useState([]);
  // const token = localStorage.getItem("userToken");
  useEffect(() => {
      const fetchActivities = async() => {
          await getActivities().then(result => {
                  setActivities(result)
              })
              .catch(console.error);
      }
      fetchActivities();
  }, [])

  return (
    <div className="Components">
      {activities.map((activity) => {
        return (
          <div className="Card" key={activity.id}>
            <p>{activity.name}</p>
            <p>{activity.description}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Activities;
