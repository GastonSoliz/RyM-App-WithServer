const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email) return res.status(400).json("FALTA EL EMAIL");
    if (!password) return res.status(400).json("FALTA LA CONTRASEÑA");

    const user = await User.findOne({ where: { email: email } });
    if (user)
      return res.status(400).json("YA EXISTE UN USUARIO CON ESTE EMAIL");

    const newUser = await User.create({ email: email, password: password });
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
