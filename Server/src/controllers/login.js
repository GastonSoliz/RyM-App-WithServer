const user = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  const found = user.find(
    (elem) => elem.email === email && elem.password === password
  );
  const access = found ? true : false;
  res.status(200).json({ access });
}

module.exports = login;
