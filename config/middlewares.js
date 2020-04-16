const bodyParser = require('body-parser')
const cors = require('cors')

//encapsulamento de todos os arquivos
module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors({
        origin: '*'
    }))
}