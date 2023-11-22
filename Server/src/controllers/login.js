const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    console.log("email: ", email);
    if (!email) return res.status(400).json("FALTA EMAIL");
    if (!password) return res.status(400).json("FALTA CONTRASEÑA");
    const user = await User.findOne({ where: { email: email } });
    console.log(user);
    if (!user) return res.status(400).json("EMAIL INCORRECTO");
    if (user.password === password) return res.status(200).json(user);
    else return res.status(400).json("CONTRASEÑA INCORRECTA");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
