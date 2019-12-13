const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const empreendemanas = require('./routes/empreendemanas')
const PORT = 3000

app.use(bodyParser.json())
app.use('/empreendemanas', empreendemanas)

app.get('/', (request, response) => {
  response.send('Seja benvinda à sua rede de compartilhamento de serviços!')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)