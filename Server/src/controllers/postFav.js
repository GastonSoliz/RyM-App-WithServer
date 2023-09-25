const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (name && origin && status && image && species && gender) {
      const newFav = await Favorite.create({
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender,
      });
      const favs = await Favorite.findAll();
      return res.status(200).json(favs);
    } else return res.status(401).send("Faltan datos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
