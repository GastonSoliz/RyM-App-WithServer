const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
// function getCharById(res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data) => {
//       const char = {
//         id: id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin?.name,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, { "content-type": "application/json" });
//       res.end(JSON.stringify(char));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "content-type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = getCharById;

// function getCharById(req, res) {
//   const { id } = req.params;
//   axios
//     .get(URL + id)
//     .then((response) => response.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         status: data.status,
//         name: data.name,
//         species: data.species,
//         origin: data.origin?.name,
//         image: data.image,
//         gender: data.gender,
//       };
//       character.name
//         ? res.status(200).json(character)
//         : res.status(404).send("Not found");
//     })
//     .catch((error) => {
//       //res.writeHead(400, { "Content-type": "text/plain" });
//       //res.end(error.message);
//       res.status(500).json({ message: error.message });
//     });
// }
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
