class ApiInventory {

    async FindById(req, res){
        try {
            const organizationId = 1
            const { id } = req.params
            const inventory = { id } // service.findById(inventoryId)
            res.status(200).send({inventory})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async FindAll(req, res){
        try {
            const organizationId = 1
            const inventories = {} // service.findAll()
            res.status(200).send({inventories})  
        } catch (error) {
            res.status(500).send({msg: error.message})              
        }
    }
    async Create(req, res) {
        try {
            const organizationId = 1
            const { name } = req.body
            const inventory = { } // service.Create(name, email, password, role, organizationId)   
            res.status(200).send({inventory})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const { name } = req.body
            const inventory = { } // service.Update(id, name, email, password, role, organizationId)   
            res.status(200).send({inventory})             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
    async Delete(req, res){
        try {
            const organizationId = 1
            const {id} = req.params
            const inventory = {  } // service.Delete(id)   
            res.status(204).send()             
        } catch (error) {
            res.status(500).send({msg: error.message})                          
        }
    }
}

module.exports = new ApiInventory()
