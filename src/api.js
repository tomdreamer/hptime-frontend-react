import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://localhost:2999",
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

export function getHospitalList() {
  return backendApi.get("/api/hospitals?size=60&offset=60").catch(errorHandler);
}
export function getAltStructureList() {
  return backendApi
    .get("/api/alternatives-structures?size=20&offset=20")
    .catch(errorHandler);
}

export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogin(loginCredentials) {
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogout() {
  return backendApi.get("/api/logout").catch(errorHandler);
}

// example function
// export function getLogOut() {
//   return backendApi.get("/api/logout").catch(errorHandler);
// }
