const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        if (user.password === password) {
          return res.status(200).json({ access: true });
        } else return res.status(403).send("Contraseña incorrecta");
      } else return res.status(404).send("Usuario no encontrado");
    } else return res.status(400).send("Faltan datos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
