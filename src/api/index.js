import axios from "axios";
const API_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export const api = axios.create({
    baseUrl: `${API_URL}`
});

export const callApi = async () => {
    try {
        //something here...
    } catch (err) {
        console.error(err)
    }
};
