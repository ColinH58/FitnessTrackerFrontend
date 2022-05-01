import axios from "axios";
const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export const api = axios.create({
  apiURL: `${API_URL}`,
});

export const testAuthentication = async () => {
  const token = localStorage.getItem('token')
  const response = await fetch(API_URL, {
      method: "GET",
      headers: {
          'Authorization': `Bearer ${token}`
      }
  });
  const json = await response.json();
  return json.success;
};

export const getActivities = async () => {
  const url =
  "https://fitnesstrac-kr.herokuapp.com/api/users/activities";
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
  "https://fitnesstrac-kr.herokuapp.com/api/users/routines";
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

export const getMyRoutines = async () => {
  const url =
  "https://fitnesstrac-kr.herokuapp.com/api/users/myroutines";
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

export const accountLogin = async (username, password) => {
  await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.data.token);
      console.log(result);
    })
    .catch(console.error);
};

export const accountCreation = async (username, password) => {
  await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem("token", result.data.token);
    })
    .catch(console.error);
};
