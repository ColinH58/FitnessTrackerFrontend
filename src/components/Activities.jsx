import React, { useState, useEffect } from "react";
import { getActivities } from "../api";
import { ActivityForm } from "./index";


const Activities = ({ loggedIn }) => {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
      const fetchActivities = async() => {
          await getActivities().then(result => {
                  setActivities(result)
              })
              .catch(console.error);
      }
      fetchActivities();
  }, [])

  console.log("SKDFJLKSDJFSLKDJF" + loggedIn)

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
      {loggedIn ? <ActivityForm /> : null}
    </div>
  );
};

export default Activities;
