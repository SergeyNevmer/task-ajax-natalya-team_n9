import axios from "axios";

const baseUrl = "https://swapi.dev/api/";

export const getActorFromStarWars = async (position = 1) => {
  const response = await axios.get(`${baseUrl}people/${position}/`);
  return response.data;
};

export const getPlanetFromStarWars = async (position = 1) => {
  const response = await axios.get(`${baseUrl}planets/${position}/`);
  return response.data;
};

export const getStarshipFromStarWars = async () => {
  const response = await axios.get(`${baseUrl}starships/`);
  return response.data;
};
