import instance from "./instance";

async function fetchShows() {
  // throw new Error("Simulated error: something went wrong before loading!");
  const res = await instance.get("/shows");
  return res.data;
}
export default fetchShows;
