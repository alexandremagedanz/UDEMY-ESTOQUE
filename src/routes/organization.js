const express = require("express")

const organizationRouter = express.Router()

organizationRouter.get('/:id', () => {})
organizationRouter.post('/', () => {})
organizationRouter.put('/:id', () => {})
organizationRouter.delete('/:id', () => {})

module.exports = organizationRouter