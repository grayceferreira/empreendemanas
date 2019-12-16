const express = require('express');
const router = express.Router();

const controller = require("../controllers/ProjetosController")

router.get('/projetos', controller.getAll)

module.exports = router