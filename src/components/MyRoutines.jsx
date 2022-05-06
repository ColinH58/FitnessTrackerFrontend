import React, { useState, useEffect } from "react";
import { getMyRoutines } from "../api";
import RoutineForm from "./RoutineForm";
import EditRoutine from "./EditRoutine";
import DeletedRoutine from "./DeleteRoutine";

const MyRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getMyRoutines();
      setUserRoutines(result);
    }
    fetchData();
  }, []); //I think this will need to be fixed...maybe username needs to be added.idkidk

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
            <h3>Goal: {item.goal}</h3>
            <EditRoutine
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
              origName={item.name}
              origGoal={item.goal}
              id={item.id}
            />
            <DeletedRoutine
              userRoutines={userRoutines}
              setUserRoutines={setUserRoutines}
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
