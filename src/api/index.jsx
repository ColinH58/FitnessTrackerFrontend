export const getActivities = async () => {
  const url =
  "https://fast-plateau-20949.herokuapp.com/api/activities";
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
  });
  const json = await response.json();
  return json;
};

export const getRoutines = async () => {
  const url =
  "https://fast-plateau-20949.herokuapp.com/api/routines";
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
  });
  const json = await response.json();
  return json;
};

export const getMyRoutines = async (username) => {
  return await fetch(
    `https://fast-plateau-20949.herokuapp.com/api/users/${username}/routines`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return(result);
    })
    .catch(console.error);
};

export const accountLogin = async (username, password) => {
  return await fetch(
    "https://fast-plateau-20949.herokuapp.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: username,
          password: password,
      }),
    }
    )
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("token", result.token)
      localStorage.setItem("username", result.user.username)
      return (
        result.user.username
      )
    })
    .catch(console.error);
};

export const accountCreation = async (username, password) => {
  await fetch(
    "https://fast-plateau-20949.herokuapp.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: username,
          password: password,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.token)
      localStorage.setItem("username", result.user.username)
    })
    .catch(console.error);
};

export const getMe = async () => {
  const token = localStorage.getItem("token");
  return await fetch("https://fast-plateau-20949.herokuapp.com/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};

export const newRoutine = async (name, goal) => {
  return await fetch("https://fast-plateau-20949.herokuapp.com/api/routines", {
    method: "POST",
    token: localStorage.getItem("token"),
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: true,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};

export const updateRoutine = async (routineId, name, goal) => {
  return await fetch(
    `https://fast-plateau-20949.herokuapp.com/api/routines/${routineId}`,
    {
      method: "PATCH",
      token: localStorage.getItem("token"),
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};

export const deleteRoutine = async (routineId) => {
  const token = localStorage.getItem("token");
  fetch(`https://fast-plateau-20949.herokuapp.com/api/routines/${routineId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
};