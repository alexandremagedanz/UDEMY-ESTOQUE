const express = require("express")

const userRouter = express.Router()

//opções do Usuário
userRouter.get('/info', () => {})
userRouter.put('/', () => {})
userRouter.delete('/', () => {})

//opções do Admin
userRouter.post('/', () => {})
userRouter.get('/', () => {})
userRouter.get('/:id', () => {})
userRouter.put('/:id', () => {})
userRouter.delete('/:id', () => {})

module.exports = userRouter