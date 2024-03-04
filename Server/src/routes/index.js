const getCharById = require("../controllers/getCharById");
const get5Char = require("../controllers/get5Char");
const deleteFav = require("../controllers/deleteFav");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const getFavs = require("../controllers/getFavs");

const { Router } = require("express");

const router = Router();

router.get("/characters", get5Char);
router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav/:idUser", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/fav/:id", getFavs);

module.exports = router;
