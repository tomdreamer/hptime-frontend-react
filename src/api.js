import axios from "axios";

const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_TOKEN;

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export function errorHandler(err) {
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

export function getDistanceDuration(userLong, userLatt, long, latt) {
  return axios.get(
    `https://api.mapbox.com/directions-matrix/v1/mapbox/walking/${userLong},${userLatt};${long},${latt}?sources=1&annotations=distance,duration&access_token=${MAPBOX_KEY}`
  );
}

export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function getStructureDetails(oneStructure) {
  return backendApi
    .get(`/api/structure-details/${oneStructure}`)
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

export function getHospitalsbyLocation(latt, long) {
  return backendApi.get(
    `/api/hospitals/near?latitude=${latt}&longitude=${long}&radius=50000`
  );
}

export function getAtlStructuresbyLocation(latt, long) {
  return backendApi.get(
    `/api/alternatives-structures/near?latitude=${latt}&longitude=${long}&radius=50000`
  );
}
// example function
// export function getLogOut() {
//   return backendApi.get("/api/logout").catch(errorHandler);
// }
