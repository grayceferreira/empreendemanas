const express = require('express');
const router = express.Router();

const controller = require("../controllers/ProjetosController")

router.get('/projetos', controller.getAll)
router.get('projetos/:id', controller.getById)

module.exports = router