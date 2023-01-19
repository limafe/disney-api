import axios from "axios";
import { Character } from "../protocols/character-interface";

const baseUrl = "https://api.disneyapi.dev";

export const api = {
  async getCharacters(num: number): Promise<{ data: Character[] }> {
    const characters = await axios.get(
      baseUrl + "/characters?page=" + num.toString()
    );
    return characters.data;
  },
};
