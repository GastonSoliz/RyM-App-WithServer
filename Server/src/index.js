const server = require("./app");
const { SERVER_PORT } = process.env;
const { conn } = require("./DB_connection");

server.listen(SERVER_PORT, () => {
  conn.sync();
  console.log(`Servidor levantado en el puerto ${SERVER_PORT}`);
});
