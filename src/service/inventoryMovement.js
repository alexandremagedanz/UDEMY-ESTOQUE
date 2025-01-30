const modelInventoryMovement = require("../model/inventoryMovement");
const product = require("../model/product");

const movementType = ['in','out']

class ServiceInventoryMovement {

    async FindAll(inventoryId, transaction) {
        return modelInventoryMovement.findAll(
            {where: {inventoryId} , include: {model: product} }, 
            {transaction } 
        )
    }
    async FindById(inventoryId, id, transaction) {
        return modelInventoryMovement.findOne(
            {where: {inventoryId, id}, transaction } 
        )
    }

    async Create(inventoryId, userId, type, amount, productId, transaction) {
         if (!inventoryId) {
            throw new Error('Favor informar o inventário')
        } else if (!userId) {
            throw new Error('Favor informar o usuário')
        } else if (!type || !movementType.includes(type)) {
            throw new Error('Favor informar o tipo corretamente')
        } else if (!amount) {
            throw new Error('Favor informar a quantia')
        } else if (!productId) {
            throw new Error('Favor informar o produto')
        }

        return modelInventoryMovement.create( 
            { inventoryId, userId, type, amount, productId } , 
            { transaction }
        )
    }
    async Update(inventoryId, id, type, amount, transaction) {
        const oldInventoryMovement = await this.FindById(inventoryId, id, transaction)
        if (!oldInventoryMovement) {
            throw new Error('Inventário não Encontrada')
        }
        if (type && !movementType.includes(type)) {
            throw new Error('Favor informar o tipo corretamente')
        }
        oldInventoryMovement.type = type || oldInventoryMovement.type
        oldInventoryMovement.amount = amount || oldInventoryMovement.amount

        return oldInventoryMovement.save({transaction})

    }
    async Delete(inventoryId, id, transaction) {
        const oldInventoryMovement = await this.FindById(inventoryId, id, transaction)

        if (!oldInventoryMovement) {
            throw new Error('Produto não Encontrada')
        }
        oldInventoryMovement.destroy({transaction})
    }
}
module.exports = new ServiceInventoryMovement()