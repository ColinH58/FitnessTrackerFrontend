import React, { useState, useEffect } from "react";
import { getMyRoutines } from "../api";
import RoutineForm from "./RoutineForm";
import EditRoutine from "./EditRoutine";

const MyRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getMyRoutines();
      setUserRoutines(result);
    }
    fetchData();
  }, []);

  return (
    <div className="Components">
      <RoutineForm
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
      {userRoutines ? (
        userRoutines.map((item, index) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h4>Goal: {item.goal}</h4>
            <EditRoutine
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
              origName={item.name}
              origGoal={item.goal}
              id={item.id}
            />
          </div>
        ))
      ) : (
        <p>No Routines to display</p>
      )}
    </div>
  );
};

export default MyRoutines;
