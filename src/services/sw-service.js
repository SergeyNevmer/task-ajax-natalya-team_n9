import axios from "axios";

const baseUrl = "https://swapi.dev/api/";

export const getActorFromStarWars = async (position = 1) => {
  const response = await axios.get(`${baseUrl}people/${position}/`);
  return response.data;
};
