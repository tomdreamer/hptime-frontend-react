import axios from "axios";
const backendApi = axios.create({
  baseURL: "http://localhost:5555",
  withCredentials: true
});

function errorHandler(err) {
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }
  alert("Sorry! Something went wrong.");

  throw err;
}

// example function
// export function getLogOut() {
//   return backendApi.get("/api/logout").catch(errorHandler);
// }
