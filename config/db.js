//configuração de conexão do bd
const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex


