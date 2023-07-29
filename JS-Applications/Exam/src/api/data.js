import { del, get, post, put } from "./api.js";

export async function getAll() {
  return get("/data/facts?sortBy=_createdOn%20desc");
}
export async function getById(id) {
  return get("/data/facts/" + id);
}
export async function deleteById(id) {
  return del("/data/facts/" + id);
}
export async function createAlbum(data) {
  return post("/data/facts", data);
}
export async function editAlbum(id, albumData) {
  return put(`/data/facts/${id}`, albumData);
}
export async function like(factId) {
  return post("/data/likes", {factId})
}
export async function getLikes(factId) {
  return get(`/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`)
}
export async function getUserLikes(factId, userId) {
  return get(`/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}