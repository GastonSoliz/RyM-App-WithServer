const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

server.listen(PORT, "0.0.0.0", () => {
  conn.sync();
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
