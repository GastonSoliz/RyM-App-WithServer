const { User, Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { idUser } = req.params;
  console.log(idUser);
  const { id, name, origin, status, image, species, gender } = req.body;
  try {
    if (id && name && origin && status && image && species && gender) {
      const user = await User.findByPk(idUser);
      if (!user) return res.status(400).json("EL USUARIO NO EXISTE");

      const newFav = await Favorite.create({
        id: id,
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender,
        UserId: user.id,
      });

      return res.status(200).json("Caracter favorito agregado");
    } else return res.status(401).json("Faltan datos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
