const modelInventory = require("../model/inventory");
const serviceInventoryMovement = require('./inventoryMovement')
const getProductsMovements = require("../fns/get-products-movements")
class ServiceInventory {

    async FindAll(organizationId, transaction) {
        return modelInventory.findAll(
            {where: {organizationId}, transaction } 
        )
    }
    async FindById(organizationId, id, transaction) {
        const inventory = await modelInventory.findOne(
            {where: {organizationId, id}, transaction } 
        )
        if (!inventory) {
            throw new Error('Estoque não encontrado')
        }

        const movements = await serviceInventoryMovement.FindAll(inventory.id)
        const result = getProductsMovements(movements)
        return {...inventory.dataValues, ...result}
    }

    async Create(organizationId, name, transaction) {
        if (!organizationId) {
            throw new Error('Favor informar a organização')
        } else if (!name) {
            throw new Error('Favor informar o nome')
        }

        return modelInventory.create( 
            { organizationId, name } , 
            { transaction }
        )
    }
    async Update(organizationId, id, name, transaction) {
        const oldInventory = await this.FindById(organizationId, id, transaction)
        if (!oldInventory) {
            throw new Error('Inventário não Encontrada')
        }
        oldInventory.name = name || oldInventory.name

        await oldInventory.save({transaction})

        return oldInventory
    }
    async Delete(organizationId, id, transaction) {
        const oldInventory = await this.FindById(organizationId, id, transaction)

        if (!oldInventory) {
            throw new Error('Produto não Encontrada')
        }
        oldInventory.destroy({transaction})
    }
}
module.exports = new ServiceInventory()