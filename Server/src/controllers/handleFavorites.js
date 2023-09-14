let myFavorites = [];

function postFav(req, res) {
  // const character = req.body;
  // myFavorites.push(character);
  myFavorites = [...myFavorites, req.body];
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((elem) => elem.id !== Number(id));
  return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
