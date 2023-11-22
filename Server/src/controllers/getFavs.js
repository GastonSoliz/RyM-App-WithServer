const { User, Favorite } = require("../DB_connection");

const getFavs = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: { id: id },
      include: { model: Favorite },
    });
    return res.status(200).json(user.Favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getFavs;
