import React, { useState, useEffect } from "react";
import MyRoutineForm from "./MyRoutineForm";
import EditRoutine from "./EditRoutine";
import DeleteRoutine from "./DeleteRoutine";
import { getMyRoutines } from "../api";

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
      <MyRoutineForm
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
            <DeleteRoutine
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