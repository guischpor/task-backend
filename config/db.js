//configuração de conexão do db
const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex


