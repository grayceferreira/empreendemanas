const { connect } = require('../models/Repository')
const { projetosModel } = require('../models/ProjetosSchema')

connect()

  const getAll = (request, response) => {
    projetosModel.find((error, projetos) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(200).send(projetos)
    })
  }

  module.exports = {
    getAll
  }

