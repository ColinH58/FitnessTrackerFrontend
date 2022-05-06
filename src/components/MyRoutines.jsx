import React, { useState, useEffect } from "react";
import { getMe, getMyRoutines } from "../api";
import RoutineForm from "./RoutineForm";
import EditRoutine from "./EditRoutine";

const MyRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    async function fetchData() {
      await getMe().then((result) => {
        setUsername(result.username);
      });
      await getMyRoutines()
        .then((results) => {
          setUserRoutines(results);
        })
        .catch((error) => {
          console.error(error);
        });
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
