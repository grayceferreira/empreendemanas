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

  const getById = (request, response) => {
    const id = request.params.id
  
    return projetosModel.findById(id, (error, projeto) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      if (projeto) {
        return response.status(200).send(projeto)
      }
  
      return response.status(404).send('Projeto não encontrado!')
    })
  }

  module.exports = {
    getAll,
    getById
  }

