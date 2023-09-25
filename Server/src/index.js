// const express = require("express");

//const axios = require("axios");
// const router = require("./routes/index");

// const server = express();
const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

//const URL = "https://rickandmortyapi.com/api/character/";

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log(`Servidor levantado en el puerto ${PORT}`);
});

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });
// server.use(express.json());

// server.use("/rickandmorty", router);

// function getCharById(res, id) {
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
//         : res.status(400).end("Not found");
//     })
//     .catch((error) => {
//       res.writeHead(400, { "Content-type": "text/plain" });
//       res.end(error.message);
//     });
// }

// module.exports = { getCharById };

// const http = require("http");
// const PORT = 3001;
// //const characters = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const url = req.url.split("/").pop();
//     // if (url.includes("rickandmorty/character")) {
//     //   const urlID = url.split("/").pop();
//     //   let chFound = characters.find((ch) => ch.id === Number(urlID));

//     //   res.writeHead(200, { "content-type": "application/json" });
//     //   const obj = JSON.stringify(chFound);
//     //   res.end(obj);
//     // }
//     if (req.url.includes("rickandmorty/character")) {
//       getCharById(res, url);
//     }
//   })
//   .listen(PORT);
