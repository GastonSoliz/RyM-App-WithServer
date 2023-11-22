const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const toDestroy = await Favorite.findByPk(id);
    if (!toDestroy) return res.status(400).json("NO SE ENCONTRO");
    await Favorite.destroy({ where: { id: id } });

    return res.status(200).json(toDestroy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;
