import axios from "axios";
const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export const api = axios.create({
  apiURL: `${API_URL}`,
});

export const hitApi = async ({ url, method }) => {
  try {
    //something here...
  } catch (err) {
    console.error(err);
  }
};
