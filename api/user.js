const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    //obert hash e encriptar o pass do usuario
    const obertHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    //metodo que enfim vai salvar o usuario novo
    const save = (req, res) => {
        obertHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({name: req.body.name, email: req.body.email.toLowerCase(), password})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}