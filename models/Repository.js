const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/empreendemanas';

function connect () {
  mongoose.connect(MONGO_URL,
    { useNewUrlParser: true },
    function (error) {
      if(error) {
        console.error("Ooops, mana! Temos um erro:", error)
      } else {
        console.log("Sua conexão foi um sucesso!")
      }
    }
  );
}

module.exports = { connect }
