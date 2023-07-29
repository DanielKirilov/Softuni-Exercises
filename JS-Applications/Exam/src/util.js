export function getUserData() {
  const data = JSON.parse(sessionStorage.getItem("userData"));
  return data; 
}
export function setUserData(data) {
  sessionStorage.setItem("userData", JSON.stringify(data));
}
export function clearUserData() {
  sessionStorage.removeItem("userData");
}
export function createSubmitHandler(callback) {
  return function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    callback(data, data["re-password"]);
  }
}