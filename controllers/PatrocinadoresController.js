const { connect } = require('../models/Repository')
const patrocinadoresModel = require('../models/PatrocinadoresSchema')
const { projetosModel } = require('../models/ProjetosSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SEGREDO2 =  'MIICXQIBAAKBgQDTViexemXb/6rArAdQ//rRDhjodIwdchzSV2VN6OQ/tFRz7z/ZrJBJkVb6j21CkBEcaWiTKyEEDdPMqf/Obg9B/VBhVqOxrTGLM7jEEHAm5UMVllxTprk+um1jUGxNg8ZefXE2CaT4BgMxSI7kLC4SP7RlK75XdoqL2CyejhA0HQIDAQABAoGBAIvNoLB9gciJVxHiO2zQCcImC0AraU1JYdubyP5DJEsoJf4TtS9wQnsIVHuoSeUQnOEose85RrwB0azAgOK0WA5hgmrPoBKao4KVCT1jyrEP7Q8DqQRglj885PBE0jwEUWrcItzFl3PT8lBrK7I9dB6FyqHAkhL8e94dkf2Ese5ZAkEA7ycBVcscKzrpteggmCoO6OacF3287QMnbsVko7p+DHV0uXdZx6F1HSR3zulHvyNSyovtf8082QjMykhI9kTaRwJBAOI5gVeMSqpB8jtEoaUgc3LcDL9Ek9umGgRP/lVh0WlTKW8+IJATKaez9ZD1bMFHYRknPfBAHSOmFNTx1plADHsCQQCYW6kmFzfi8q1iDnh1eJX3GrPm41wxQwkkMO1kwbL8DPhIEBlKbTpHTqxlTYk/5CkikPLFsONLAag2Vsbk3giRAkA/YS8MkSCGDM3JrxO+iJXvsxjbKWJnYmTdmm++Cha6dHMiWHyVANllw7Rj9W6Pw+i/PFBNFBlV2HzzoAGok9orAkB0VsQVjraC8aQALv8jmh2YEAB43qkmvwvcanjViXOI1Nm2c4z8zAxBp/sJFZUSqGplpXRJdQL2t8hGC4qrhMwu';

connect()

const getAll = (request, response) => {
  patrocinadoresModel.find((error, patrocinadores) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(patrocinadores)
  })
}

const newPatrocinador = (request, response) => {
  const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  request.body.senha = senhaCriptografada
  request.body.permissao = 'comum'
  const novoPatrocinador = new patrocinadoresModel(request.body)

  novoPatrocinador.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoPatrocinador)
  })
}

const newAdmin = (request, response) => {
  const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  request.body.senha = senhaCriptografada
  request.body.permissao = 'administrador'
  const novoPatrocinadorAdm = patrocinadoresModel(request.body)

  novoPatrocinadorAdm.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoPatrocinadorAdm)
  })
}

const login = async (request, response) => {
  const patrocinadorEncontrado = await patrocinadoresModel.findOne({ email: request.body.email })

  if (patrocinadorEncontrado) {
    const senhaCorreta = bcrypt.compareSync(request.body.senha, patrocinadorEncontrado.senha)

    if (senhaCorreta) {
      const token = jwt.sign(
        {
          permissao: patrocinadorEncontrado.permissao
        },
        SEGREDO,
        { expiresIn: 6000 }
      )

      return response.status(200).send({ token })
    }

    return response.status(401).send('Patrocinador(a), sua senha está incorreta!')
  }

  return response.status(404).send('Ooops! Patrocinador não encontrado(a).')
}

const update = (request, response) => {
  const id = request.params.id
  const updatePatrocinador = request.body
  const options = { new: true }

  patrocinadoresModel.findByIdAndUpdate(
    id,
    updatePatrocinador,
    options,
    (error, patrocinador) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (patrocinador) {
        return response.status(200).send(patrocinador)
      }

      return response.status(404).send('Ooops! Patrocinador(a) não encontrado(a).')
    }
  )
}

const remove = (request, response) => {
  const id = request.params.id

  patrocinadoresModel.findByIdAndDelete(id, (error, patrocinador) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (patrocinador) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Ooops! Patrocinador(a) não encontrado(a).')
  })
}


module.exports = {
  getAll,
  newPatrocinador,
  newAdmin,
  login,
  update,
  remove
  }