const jwt = require('jsonwebtoken')
const user = require('../service/user')

const salt = 12
const secretKey = 'meu segredo forte'

function authMiddleware(role){
    return (req, res, next) => {
        const token = req.headers['authorization']
        console.log(token, role)

        if(!token) {
            res.status(400).json({msg: 'Token inválido ou não fornecido'})
            return
        }

        jwt.verify(token, secretKey, async (err, decoded) => {
            if (err) {
                console.log(err)
                res.status(400).json({msg: 'Token inválido ou não fornecido'})
            }

            const verify = await user.Verify(decoded.id, decoded.role)

            if (!verify || (role && role === decoded.role)) {
                res.status(401).json({msg: 'Permissão Negada - Sem Permissão'})
                return
            }

            req.session = decoded
            next()
        })

    } 
}

module.exports =  authMiddleware