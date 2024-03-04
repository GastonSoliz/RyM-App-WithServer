const server = require("./app");
const { SERVER_PORT } = process.env;
const { conn } = require("./DB_connection");

server.listen(SERVER_PORT || 3001, "0.0.0.0", () => {
  conn.sync();
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
