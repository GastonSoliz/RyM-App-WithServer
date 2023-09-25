const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email && password) {
      const newUser = await User.create({ email: email, password: password });
      
    } else return res.status(400).send("Faltan datos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.export = postUser;
