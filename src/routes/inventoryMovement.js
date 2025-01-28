const express = require("express")

const movementRouter = express.Router()

movementRouter.get('/', () => {})
movementRouter.get('/:id', () => {})
movementRouter.post('/', () => {})
movementRouter.put('/:id', () => {})
movementRouter.delete('/:id', () => {})

module.exports = movementRouter