const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;
  try {
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
    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getCharById;
