const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function get5Char(req, res) {
  try {
    let memoria = [];
    let characters = {};
    let randomId = (Math.random() * 826).toFixed();
    randomId = Number(randomId);
    if (!memoria.includes(randomId)) {
      memoria.push(randomId);
      const { data } = await axios.get(URL + id);
      const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        gender: data.gender,
      };
      characters = { ...characters, character };
      console.log(characters);
      res.status(200).json(characters);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = get5Char;
