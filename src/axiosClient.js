import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWYyMzM1OWFhZDI3NjlhOTdiODg0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzA4NjUxMCwiZXhwIjoxNjQzMzQ1NzEwfQ.2oyawBYcnPfU-XPNwyzAdzF5wzD3yAjvDnko49Ml-J0";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
