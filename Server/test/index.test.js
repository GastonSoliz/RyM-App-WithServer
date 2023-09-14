const app = require("../src/app");
const session = require("supertest");
const { email, password } = require("../src/utils/users");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1").expect(200);
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("status");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/1234").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Informacion correcta para ingresar", async () => {
      const { body } = await agent.get(
        `/rickandmorty/login?email=ejemplo@mail.com&password=1password`
      );
      expect(body.access).toEqual(true);
    });
    it("Informacion incorrecta no ingresa", async () => {
      const { body } = await agent.get(
        `/rickandmorty/login?email=${email}&password=asdasdasd`
      );
      expect(body.access).toEqual(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const char1 = { id: "", name: "" };
    const char2 = { id: "", name: "" };
    it("Devuelve un array con el personaje", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(char1);
      expect(body).toContainEqual(char1);
    });
    it("Al volver a enviar un nuevo elemento, sera devuelto en array", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(char2);
      expect(body).toContainEqual(char1);
      expect(body).toContainEqual(char2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const char1 = { id: "", name: "" };
    const char2 = { id: "", name: "" };
    it("No hay ningun personaje con ese ID, se devuelve array", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1231");
      expect(body).toContainEqual(char1);
      expect(body).toContainEqual(char2);
    });
  });
});
