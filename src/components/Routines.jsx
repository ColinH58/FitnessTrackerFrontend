import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  // const token = localStorage.getItem("userToken");
  useEffect(() => {
      const fetchRoutines = async() => {
          await getRoutines().then(result => {
            setRoutines(result)
              })
              .catch(console.error);
      }
      fetchRoutines();
  }, [])

  return (
    <div className="Components">
      {routines.map((routine) => {
        return (
          <div className="Card" key={routine.id}>
            <p>Creator Name: {routine.creatorName}</p>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            {routine.activities.map((activity) => {
              return (
                <div key={activity.id}>
                    <p>Duration: {activity.duration}</p>
                    <p>Count: {activity.count}</p>
                    <p>Name: {activity.name}</p>
                    <p>Description: {activity.description}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
};

export default Routines;

/*
Create Cards for Each Routine with a .map() function
*/