class ApiInventoryMovement {

    async FindById(req, res){
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = {} // service.findById(inventoryMovementId)
            res.status(200).send({inventoryMovement})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async FindAll(req, res){
        try {
            const organizationId = 1
            const { inventoryId } = req.params
            const inventoryMovements = {} // service.findAll()
            res.status(200).send({inventoryMovements})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const userId = 1
            const { inventoryId } = req.params
            const { type, amout, productId } = req.body
            const inventoryMovement = { } // service.Create(name, email, password, role, organizationId)   
            res.status(200).send({inventoryMovement})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { inventoryId } = req.params
            const { type, amout, productId } = req.body
            const inventoryMovement = {  } // service.Update(id, name, email, password, role, organizationId)   
            res.status(200).send({inventoryMovement})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Delete(req, res){
        try {
            const organizationId = 1
            const { id, inventoryId } = req.params
            const inventoryMovement = { id } // service.Delete(id)   
            res.status(204).send()             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
}

module.exports = new ApiInventoryMovement()
