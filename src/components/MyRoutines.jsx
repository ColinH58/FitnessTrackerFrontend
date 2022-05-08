import React, { useState, useEffect } from "react";
import MyRoutineForm from "./MyRoutineForm";
import EditRoutine from "./EditRoutine";
import DeleteRoutine from "./DeleteRoutine";
import { getMyRoutines } from "../api";

const MyRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchRoutines = async () => {
      await getMyRoutines(username)
        .then((result) => {
          setUserRoutines(result);
        })
        .catch(console.error);
    };
    fetchRoutines();
  }, [username]);

  return (
    <div className="Components">
      <MyRoutineForm
        userRoutines={userRoutines}
        setUserRoutines={setUserRoutines}
      />
      {userRoutines ? (
        userRoutines.map((routine) => {
          return (
            <div className="Cards" key={routine.id}>
              <h3>Routine Creator: {routine.creatorName}</h3>
              <h3>Routine Name: {routine.name}</h3>
              <h3>Routine Goal: {routine.goal}</h3>
              <EditRoutine
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                origName={routine.name}
                origGoal={routine.goal}
                id={routine.id}
              />
              <DeleteRoutine
                userRoutines={userRoutines}
                setUserRoutines={setUserRoutines}
                id={routine.id}
              />
            </div>
          );
        })
      ) : (
        <p>No Routines to display</p>
      )}
    </div>
  );
};

export default MyRoutines;
