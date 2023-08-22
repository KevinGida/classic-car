export const getAuthToken = () => {
  return window.localStorage.getItem("auth_token");
};

export const setAuthToken = (token) => {
  window.localStorage.setItem("auth_token", token);
};

export async function GetAllCars() {
  let header = {};
  if (getAuthToken() !== null && getAuthToken() !== "null") {
    header = { Authorization: `Bearer ${getAuthToken()}` };
  }
  const response = await fetch(`http://localhost:8080/cars`, {
    method: "get",
    headers: header,
  });
  const result = await response.json();
  return result;
}

export async function login(username, password) {
  fetch(`http://localhost:8080/user/login`, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: username,
      password: password,
    }),
  });
}
