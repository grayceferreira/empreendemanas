const { connect } = require('../models/Repository')
const { AdminModel } = require('../models/AdminSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SEGREDO = 'MIICXAIBAAKBgQCOl54HaBM/WiL/jPPdFGjm9f8VprUst1J+vs7G/YRGRHYLGqt+M/ljAhcROPy3FdaVi2smqqyZhf4d+EZ9lKM6LVed91sxvcyMFEp6x8R2KS9wIzUtJ6r1MAIKd8HURmbaN4V2TV/FLeOUANRCZ+QhYEy+eNbuVIJANYtXBUSn8QIDAQABAoGBAIuVS/MAJGdNuxjiSA5Q3mfIw03UhWIiirTb39rXbNbESbGRB/NguW38K8yGNoya6hY2BkwxowgeLKX11js0d5sSHgEgL+pDQtXshHu7vlYU0ksHwfmD/R8+ZHJH6F6L0vuzs4NoVK/8iQHFLboUjF2sORyuLHbBmFZQWhInet8pAkEA0OlL2uHCYhkNuokJ9H+OnJEqKS2BtYSkH3Hrh2opZg2HtvUtXEIxzmj/95CzxMXQtNJhQMK3ekvnF3Upcj2avwJBAK67i8OEKM2jerbFKrBqr6/kUkZeyHLA8I4L2C3/3nKPGUj/GAc2xxuK1XxnpC0e3Wqz5OMwzkWU4Ynblsdq2U8CQHu9U6LICbzVHh6YwP7C9xOhoBlXzPZZJGVDssA4j2DVLsednUqCIsIhy0s1uGUazi3sVpJnQwn7H1vzl6ME/j0CQAT7qj+4LCW5LM27j70aPcppW4NQPq0vHW0fn1moe2KO/CydwcSq5kC909rJZeA3ih755GQqRyeq2EfDMGidfncCQD770Za6sJP1/i1vcdoWuWYnhpiU8TNKjFb2vJEN598amcyJV9PlAAdEkszh6EDA76t6/yT6NoUn/y9x4YskzQo='

connect()

const newAdmin = (request, response) => {
    const senhaCriptografada = bcrypt.hashSync(request.body.senha)
    request.body.senha = senhaCriptografada
    request.body.permissao = 'administrador'
    const novoAdmin = new AdminModel(request.body)
  
    novoAdmin.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(201).send(novoAdmin)
    })
  }

  const login = async (request, response) => {
    const adminEncontrado = await AdminModel.findOne({ email: request.body.email })
    try {
      if (adminEncontrado) {
        const senhaCorreta = bcrypt.compareSync(request.body.senha, adminEncontrado.senha)
    
        if (senhaCorreta) {
          const token = jwt.sign(
            {
              permissao: adminEncontrado.permissao
            },
            SEGREDO,
            { expiresIn: 6000 }
          )
    
          return response.status(200).send({ token })
        }
    
        return response.status(401).send('Sua senha está incorreta!')
      }
    
      return response.status(404).send('Ooops! Usuário(a) não encontrado(a).')
  } catch (err) {
      return response.status(424).send({ message: `O arquivo não pôde ser processado.`})
    } 
  }


  const remove = (request, response) => {
    const id = request.params.id
  
    AdminModel.findByIdAndDelete(id, (error, admin) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      if (admin) {
        return response.status(200).send('Usuário(a) deletado(a) com sucesso!')
      }
  
      return response.status(404).send('Usuário(a) não encontrado(a).')
    })
  }
  

    const update = (request, response) => {
        const id = request.params.id
        const body = request.body
        const options = { new: true }
      
        AdminModel.findByIdAndUpdate(id, body, options, (error, admin) => {
          if (error) {
            return response.status(500).send(error)
          } else if (admin) {
            return response.status(200).send(admin)
          } else {
            return response.sendStatus(404)
          }
      
        })
      }

      

  module.exports = {
    login,
    newAdmin,
    remove,
    update
    }
